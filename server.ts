import express from 'express';
import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const db = new Database('tools.db');

// Initialize database
db.exec(`
  CREATE TABLE IF NOT EXISTS tools (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    category TEXT NOT NULL,
    icon TEXT NOT NULL,
    promptTemplate TEXT NOT NULL,
    inputPlaceholder TEXT NOT NULL,
    inputLabel TEXT NOT NULL,
    isCustom INTEGER DEFAULT 1,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get('/api/tools', (req, res) => {
    try {
      const tools = db.prepare('SELECT * FROM tools ORDER BY createdAt DESC').all();
      res.json(tools);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch tools' });
    }
  });

  app.post('/api/tools', (req, res) => {
    const { id, name, description, category, icon, promptTemplate, inputPlaceholder, inputLabel } = req.body;
    
    if (!id || !name || !promptTemplate) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
      const stmt = db.prepare(`
        INSERT INTO tools (id, name, description, category, icon, promptTemplate, inputPlaceholder, inputLabel)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `);
      stmt.run(id, name, description, category, icon, promptTemplate, inputPlaceholder, inputLabel);
      res.status(201).json({ success: true });
    } catch (error) {
      console.error('Database error:', error);
      res.status(500).json({ error: 'Failed to save tool' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

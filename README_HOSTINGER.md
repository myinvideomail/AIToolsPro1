# Hosting on Hostinger via GitHub

This guide explains how to deploy this full-stack AI Tools application to Hostinger using their Git integration.

## 1. Prepare Your GitHub Repository
1. Create a new private repository on GitHub.
2. Push this code to your repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

## 2. Setup on Hostinger (Node.js Hosting)
1. Log in to your Hostinger hPanel.
2. Go to **Advanced** > **Node.js**.
3. Click **Create Application**.
4. Configure the following:
   - **Application Name**: `ai-tools-pro`
   - **Node.js Version**: 20 or higher
   - **Application Path**: `public_html` (or your preferred folder)
   - **Application URL**: Your domain
   - **Environment Variables**:
     - `NODE_ENV`: `production`
     - `GEMINI_API_KEY`: Your Google Gemini API Key
     - `APP_URL`: Your domain (e.g., `https://yourdomain.com`)
5. Click **Create**.

## 3. Connect GitHub to Hostinger
1. In the Node.js application settings, find the **Git** section.
2. Connect your GitHub account and select the repository you created.
3. Set the branch to `main`.
4. Enable **Automatic Deployment** if you want Hostinger to redeploy whenever you push to GitHub.

## 4. Build and Start
1. Hostinger will automatically run `npm install`.
2. You need to run the build script to generate the frontend assets. You can do this via the **Terminal** in Hostinger or by adding it to your `package.json`'s `start` script (already configured).
3. Ensure the **Application Startup File** is set to `server.ts` (Hostinger's Node.js runner will use `npm start` which runs `tsx server.ts`).

## 5. Troubleshooting
- **Database**: The app uses SQLite (`tools.db`). This file will be created automatically on the server. It is ignored by Git to prevent local data from overwriting server data.
- **Native Modules**: We've used the latest version of `better-sqlite3` which provides prebuilt binaries for most environments. If you encounter permission issues during installation on Hostinger, try `npm install better-sqlite3 --build-from-source` or ensure your Node.js version is 20+.
- **Port**: The app is configured to run on port 3000, which Hostinger's proxy will automatically map to your domain.

## 6. Security
- Never commit your `.env` file to GitHub.
- Use Hostinger's **Environment Variables** panel to manage your API keys.

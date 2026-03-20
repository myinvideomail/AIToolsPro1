import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Tools from './pages/Tools';
import ToolPage from './pages/Tool';
import Categories from './pages/Categories';
import Category from './pages/Category';
import CreateTool from './pages/CreateTool';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tools" element={<Tools />} />
          <Route path="tool/:id" element={<ToolPage />} />
          <Route path="categories" element={<Categories />} />
          <Route path="categories/:categorySlug" element={<Category />} />
          <Route path="create" element={<CreateTool />} />
        </Route>
      </Routes>
    </Router>
  );
}

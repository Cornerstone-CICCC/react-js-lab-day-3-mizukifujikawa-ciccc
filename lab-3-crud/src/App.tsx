import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import BlogList from './pages/BlogList';
import BlogDetail from './pages/BlogDetail';
import AddPost from './pages/AddPost';
import EditPost from './pages/EditPost';
import { Toaster } from 'react-hot-toast';
import { BlogProvider } from './context/BlogContextProvider';
import NotFound from "./pages/NotFound";
import './App.css';

const App = () => {
  const firstname = "Mizuki"
  return (
    <BlogProvider>
      <BrowserRouter>
        <div className="app">
          <Header firstname={firstname} />
          <main className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<BlogList />} />
              <Route path="/blog/new" element={<AddPost />} />
              <Route path="/blog/:id" element={<BlogDetail />} />
              <Route path="/blog/edit/:id" element={<EditPost />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <Toaster />
        </div>
      </BrowserRouter>
    </BlogProvider>
  );
}

export default App;

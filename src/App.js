import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Stories from './pages/Stories';
import StoryDetail from './pages/StoryDetail';
import Weddings from './pages/Weddings';
import WeddingDetail from './pages/WeddingDetail';
import Films from './pages/Films';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/stories" element={<Stories />} />
                        <Route path="/stories/:slug" element={<StoryDetail />} />
                        <Route path="/weddings" element={<Weddings />} />
                        <Route path="/weddings/:slug" element={<WeddingDetail />} />
                        <Route path="/films" element={<Films />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </div>
    );
}

export default App;

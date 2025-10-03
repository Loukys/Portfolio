import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";
import Router from './Router';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

// Composant principal de l'application
export default function App() {
  return (
    <div className="app">
      <Header />
      <ScrollToTop />
      <Router />
      <Footer />
    </div>
  );
}

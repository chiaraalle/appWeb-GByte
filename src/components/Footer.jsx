import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="text-white py-4 mt-5 footer-color">
      <div className="container">
        <div className="row align-items-center text-center text-md-start">
          {/* Colonna 1: Info e link */}
          <div className="col-md-6 mb-3 mb-md-0">
            <p className="mb-1">&copy; {new Date().getFullYear()} GecoByte. Tutti i diritti riservati.</p>
            <p className="mb-0">
              <Link to="/servizi" className="text-white text-decoration-none me-2">Servizi</Link> |
              <Link to="/contatti" className="text-white text-decoration-none mx-2">Contatti</Link> |
              <a href="/privacy" className="text-white text-decoration-none ms-2">Privacy</a>
            </p>
          </div>

          {/* Colonna 2: Social */}
          <div className="col-md-6 text-md-end">
            <span className="me-2">Seguici su:</span>
            <a href="https://facebook.com" className="text-white me-3" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={20} />
            </a>
            <a href="https://instagram.com" className="text-white me-3" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={20} />
            </a>
            <a href="https://tiktok.com" className="text-white" target="_blank" rel="noopener noreferrer">
              <FaTiktok size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

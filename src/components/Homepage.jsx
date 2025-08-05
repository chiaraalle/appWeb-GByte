import { Link } from "react-router-dom";
import AnteprimaServizi from "./AnteprimaServizi";
import { FaClock, FaUserCheck, FaHome } from 'react-icons/fa';

function Homepage() {
  return (
    <>
      {/* HERO SECTION */}
      <div className="container-fluid hero-section py-5">
        <div className="row align-items-center hero-border">
          {/* Colonna sinistra - Logo */}
          <div className="col-md-6 text-center">
            <img
              src="/GecoByte-Logo.png" 
              alt="Logo aziendale"
              className="img-fluid hero-logo w-75"
            />
          </div>

          {/* Colonna destra - Testo */}
          <div className="col-md-6 text-center text-md-start px-5">
            <h1 className="display-5 fw-bold mb-3">
              Soluzioni su misura per il tuo PC
            </h1>
            <p className="lead">
              Offriamo consulenze professionali, riparazioni veloci, installazione reti LAN e impianti Wi-Fi per privati e aziende.
            </p>
            <Link to="/servizi" className="btn btn-lg mt-3">
              Scopri i nostri servizi
            </Link>
          </div>
        </div>
      </div>
      {/* FINE HERO SECTION */}
    
      {/* SERVIZI SECTION */}
      <h2 className="text-center">Servizi offerti</h2>
      <AnteprimaServizi />

      <div className="bg-light py-5">
        <div className="container">
            <div className="row text-center">
                {/* Punto 1 */}
                <div className="col-md-4 mb-4 mb-md-0">
                    <FaHome size={40} className="b-3 servizio-icon" />
                    <h5>Interventi rapidi</h5>
                    <p className="text-muted">A domicilio o da remoto</p>
                </div>

                {/* Punto 2 */}
                <div className="col-md-4 mb-4 mb-md-0">
                    <FaClock size={40} className="b-3 servizio-icon" />
                    <h5>Flessibilità oraria</h5>
                    <p className="text-muted">Disponibile anche su appuntamento</p>
                </div>

                {/* Punto 3 */}
                <div className="col-md-4">
                    <FaUserCheck size={40} className="mb-3 servizio-icon" />
                    <h5>Assistenza trasparente</h5>
                    <p className="text-muted">Soluzioni personalizzate e chiare</p>
                </div>
            </div>
        </div>
      </div>

    </>
  );
}

export default Homepage;

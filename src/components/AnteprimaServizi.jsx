import { Link } from 'react-router-dom';
import {
  FaTools,
  FaLightbulb,
  FaNetworkWired,
  FaVideo,
  FaLaptopMedical,
  FaShieldAlt,
} from 'react-icons/fa';

const servizi = [
    {
      icona: <FaTools size={40} className="servizio-icon"/>,
      titolo: 'Riparazione PC',
      descrizione: 'Diagnosi e interventi hardware/software rapidi ed efficaci.',
    },
    {
      icona: <FaLightbulb size={40} className="servizio-icon" />,
      titolo: 'Consulenza hardware',
      descrizione: 'Ti aiutiamo a scegliere PC e componenti su misura.',
    },
    {
      icona: <FaNetworkWired size={40} className="servizio-icon"/>,
      titolo: 'Reti LAN / Wi-Fi',
      descrizione: 'Installazione e configurazione di reti domestiche e aziendali.',
    },
    {
      icona: <FaVideo size={40} className="servizio-icon"/>,
      titolo: 'Videosorveglianza',
      descrizione: 'Installazione telecamere per la sicurezza dei tuoi spazi.',
    },
    {
      icona: <FaLaptopMedical size={40} className="servizio-icon" />,
      titolo: 'Supporto a distanza',
      descrizione: 'Interventi da remoto per risolvere i problemi in tempo reale.',
    },
    {
      icona: <FaShieldAlt size={40} className="servizio-icon" />,
      titolo: 'Cybersecurity',
      descrizione: 'Proteggi i tuoi dispositivi da virus, spyware e attacchi.',
    },
  ];

function AnteprimaServizi() {
  
  return (
    <div className="container py-5">
      <div className="row g-4">
        {servizi.map((servizio, index) => (
          <div key={index} className="col-md-4">
            <div className="card h-100 text-center shadow-sm p-3">
              <div className="card-body">
                <div className="mb-3 text-primary">{servizio.icona}</div>
                <h5 className="card-title">{servizio.titolo}</h5>
                <p className="card-text">{servizio.descrizione}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-5">
        <Link to="/servizi" className="btn btn-lg">
          Vedi tutti i servizi
        </Link>
      </div>
    </div>
  );
}

export default AnteprimaServizi;

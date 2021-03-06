import './Pied2Page.scss';
import Fade from 'react-reveal/Fade';

export default function Pied2Page(){
    return(
      <div  className="Pied2Page">
        <div style={{overflow: 'hidden'}}>
          <Fade bottom>
            <div className="contenu">
              <h1>Merci</h1>
              <p>Design et programmation par Monica Léonard</p>
            </div>
          </Fade>
        </div>
      </div>
    )
}
import Grave from './Grave';
import "./graveyard.css";
const GraveyardPage = () => {
  return( 
    <div id="Graveyard">Welcome to the graveyard page!
      <Grave petImage="https://media.discordapp.net/attachments/1082563227851956234/1100655896239018064/salina.png?width=850&height=1134"
      name="salina" deathDate="today" funFact="Sleep is good for you." />
    </div>
  )
};
export default GraveyardPage;

import {useParams} from 'react-router-dom';
import './plantdetail.css';
import icon from './info-icon.png';
import { standard_plants } from '../models/plant-model';

function something(warning){
    return (
        <div>
            <p class="warning"><img src={icon} className="App-icon-image" alt="icon" />{warning}</p>
        </div>
    );
}

export default function PlantDetail() {
    const { id } = useParams(); 
    return standard_plants.map(plant => {
        if(plant.name === id){
            return (
                <div className="color-div">
                    {plant.warnings.map(warning => something(warning))}
                   <h2 className="h1-nice">{plant.name}</h2>
                   <h3>General Information:</h3>
                   <p class="plant-text">{plant.description}</p>
                   <h3>What is Edible:</h3>
                   <p class="plant-text">{plant.eat}</p>
                   <h3>Health Benefits:</h3>
                   <p class="plant-text">{plant.benefits}</p>
                   <h3>How to Harvest:</h3>
                   <p class="plant-text">{plant.harvest}</p>
                </div>
             );
        }
    });
}

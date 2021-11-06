import {useParams} from 'react-router-dom';

import { standard_plants } from '../models/plant-model';
import Plant from '../models/plant-model';


export default function PlantDetail() {
    const { id } = useParams(); 
    return standard_plants.map(plant => {
        if(plant.name === id){
            return (
                <div className="color-div">
                   <h2 className="h1-nice">{plant.name}</h2>
                   <h3>{plant.benefits}</h3>
                </div>
             );
        } else {
            return <p></p>;
        }
        
     });

    
 }
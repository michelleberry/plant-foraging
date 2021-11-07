import React from 'react';
import { Form, Button, Card } from 'react-bootstrap'
import{Link} from 'react-router-dom';
import { standard_plants } from '../models/plant-model';
import './plant.css'
import pic from './logoplant.png'

function Dlants() {
   return standard_plants.map(plant => {
      var routestr = '/plantdetail' + plant.name
      return (
           <div class='container'>
               <Card style={{ width: '18rem' }}>
               <img class="card-img-top" src={pic} ></img>
                  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                  <Card.Body>
                     <Card.Title>{plant.name}</Card.Title>
                     <Card.Text>
                        {plant.description}
                     </Card.Text>
                     <Button as={Link} to={routestr} variant="primary">Learn More</Button>
                  </Card.Body>
               </Card>
           </div>
      )
   });
}

export function DisplayPlants(){
   return(
      <Dlants></Dlants>
   );
}

export function Plants() {
   return (
      <div className="color-div">
         <h2 className="h1-nice">PLANT FORAGING DATABASE</h2>
         <Form>
            <Form.Group className="color-form">
               <Form.Label>Enter your Location:</Form.Label>
               <Form.Control />
               <Form.Text className="text-muted">
                  We'll show you local plants you can forage.
               </Form.Text>
               <Button as={Link} to='plantlist'>
                  Submit
               </Button>
            </Form.Group>
         </Form>
      </div>
   );
}
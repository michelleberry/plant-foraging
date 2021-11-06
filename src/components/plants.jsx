import React from 'react';
import { Form, Button, Card } from 'react-bootstrap'
import{Link} from 'react-router-dom';
import { Plant, standard_plants } from '../models/plant-model';
import './plant.css'

function DisplayPlants() {
   return standard_plants.map(plant => {
      return (
           <div class='container'>
               <Card style={{ width: '18rem' }}>
                  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                  <Card.Body>
                     <Card.Title>{plant.name}</Card.Title>
                     <Card.Text>
                        {plant.description}
                     </Card.Text>
                     <Button as={Link} to='plantdetail:29' variant="primary">Learn More</Button>
                  </Card.Body>
               </Card>
           </div>
      )
   });
}

export default function Plants() {
   return (
      <div className="color-div">
         <h2 className="h1-nice">PLANT FORAGING DATABASE</h2>
         <Form>
            <Form.Group className="color-form">
               <Form.Label>Enter your Location:</Form.Label>
               <Form.Control type="email" />
               <Form.Text className="text-muted">
                  We'll show you local plants you can forage.
               </Form.Text>
               <Button variant="primary" type="submit">
                  Submit
               </Button>
            </Form.Group>
         </Form>
         <DisplayPlants></DisplayPlants>
      </div>
   );
}
import React from 'react';
import { Form, Button } from 'react-bootstrap'
import { Plant, standard_plants } from '../models/plant-model';
import './plant.css'

function DisplayPlants() {
   return standard_plants.map(plant => {
      return (
           <div className='projects-grid'>
               <p>{plant.name}</p>
           </div>
      )
   });
}

export default function Plants() {
   return (
      <div className="color-div">
         <h2 className="h1-nice">Plant Foraging Database</h2>
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
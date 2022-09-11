
import './App.css';

import React from 'react';
import './CustInfo.css';
//import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
//import Row from 'react-bootstrap/Row';

function Custinfo() {
  return (
    
    <div className='CustInfo'>
    <Form>
      <h3>Customer Information Page</h3>
      <Form.Group >
        <Form.Label>Renter's Name: </Form.Label>
        <Form.Control type="text" placeholder="Enter Full Name" />
      </Form.Group>

      <Form.Group >
        <Form.Label>Address 1 :</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group >
        <Form.Label>Address 2 :</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Form.Group >
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control type="Date"/>
      </Form.Group>

      <Form.Group>
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="Enter City" />
        <Form.Label>ZIP: </Form.Label>
        <Form.Control type="number" placeholder="Enter Zip" />
      </Form.Group>

      <Form.Group >
        <Form.Label>HomePhone</Form.Label>
        <Form.Control type="number" placeholder="Enter Contact Number" />
        <Form.Label>Cell</Form.Label>
        <Form.Control type="number" placeholder="Enter Cellphone Number" />
      </Form.Group>

      <Form.Group >
        <Form.Label>Credit Card Type</Form.Label>
        <Form.Select defaultValue="Choose...">
          <option>Visa</option>
          <option>MasterCard</option>
          <option>Rupay</option>
        </Form.Select>
        <Form.Label>Card Number</Form.Label>
        <Form.Control type="number" placeholder="Enter Card Number" />
      </Form.Group>

      <Form.Group >
        <Form.Label>Local Driving License Number</Form.Label>
        <Form.Control type="number" placeholder="License Number" />
        <Form.Label>International Driving License Number</Form.Label>
        <Form.Control type="number" placeholder="License Number" />

      </Form.Group>

      <Form.Group>
        <Form.Label>Issued By</Form.Label>
        <Form.Control type="Text" placeholder="Issuer" />
        <Form.Label>Valid Till</Form.Label>
        <Form.Control type="Date" placeholder="Validity" />
      </Form.Group>

      <Form.Group>
        <Form.Label>Passport Number</Form.Label>
        <Form.Control type="Number" placeholder="Passport Number" />
        <Form.Label>Valid Till</Form.Label>
        <Form.Control type="Date" placeholder="Validity" />
      </Form.Group>
      
      <Form.Group>
        <Form.Label>Issued By</Form.Label>
        <Form.Control type="Text" placeholder="Issuer" />
        <Form.Label>Date</Form.Label>
        <Form.Control type="Date" placeholder="Date" />
      </Form.Group>

      <Form.Group>
        <Form.Label>Zip</Form.Label>
        <Form.Control />
      </Form.Group>

      <Form.Group>
        <Form.Label>Issued By</Form.Label>
        <Form.Control type="Text" placeholder="Issuer" />
        
      </Form.Group>
      </Form>
      <div>
      <button className="btn btn-outline-success btn-sm" type="submit">
        Continue Booking
      </button>
      </div>
      <button className="btn btn-outline-danger btn-sm" type="submit">
        Cancel
      </button>
    
    </div>
  );
}

export default Custinfo;
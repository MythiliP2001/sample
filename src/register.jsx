import { useState } from 'react';
import './css/style.css';
import {Button, Col ,Container, Form, FormGroup, Row} from 'react-bootstrap';

function Registration() {
    const[fname,setfname] = useState(0)
    const[lname,setlname] = useState(0)
    const[state,setState] = useState(0)
    const[address,setAddress] = useState(0)
    return(

       <>
       <Container>
          <Row className='justify-content-center'>
            <Col lg={20} xs={12} className=' bg-success border shadow rounded p-4'>
            <Form>
              <Form.Group className='mt-5'>
                 <Form.Label>First Name:</Form.Label>
                 <Form.Control type='text' name='firstname' placeholder='Enter your First name' 
                 onChange={
                    (e)=>{
                        setfname(e.target.value)
                    }
                }>
                    

                 </Form.Control>{fname}
              </Form.Group>
              <Form.Group className='mt-5'>
                 <Form.Label>Last Name:</Form.Label>
                 <Form.Control type='text' name='lastname' 
                 placeholder='Enter your Last name'
                 onChange={
                    (e)=>{
                        setlname(e.target.value)
                    }
                }>

                 </Form.Control>{lname}
              </Form.Group>
              &nbsp;
              <Form.Group>
                <Form.Select
                onChange={
                    (e)=>{
                        setState(e.target.value)
                    }
                }>
                    <option value="">Select state</option>
                    <option value="kerala">Kerala</option>
                    <option value="tamilnadu">Tamilnadu</option>
                </Form.Select>{state}
                &nbsp;
              </Form.Group>

              <Form.Group className="mt-3"
              onChange={
                (e)=>{
                    setAddress(e.target.value)
                }
            }>
                <Form.Control
                as="textarea"
                name="address"
                style={{height:'140px'}}
             >  
             </Form.Control> {address}
             </Form.Group>
             &#8377;

             <Form.Group className="mt-3">
                <Form.Label html for="male">Male</Form.Label>
                &nbsp;
                <Form.Check
                inline
                type="radio"
                name="gender"
                value="male"    
                id="male"
                >
                    </Form.Check>                 
              </Form.Group>
              <Form.Group>
                <Form.Label html for="female">Female</Form.Label>
                <Form.Check
                inline
                type="radio"
                name="gender"
                value="female"    
                id="female"
                >
                    </Form.Check>                 
              </Form.Group>

              <Form.Group>
                <Button>Submit</Button>
              </Form.Group>
            </Form>
            </Col>
          </Row>
       </Container>
       </> 
    )
}

export default Registration;
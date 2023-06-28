Init code for pages: 

import React from 'react';


const \name\ = () => {
    return (
        <>
        </>
    )
}

export default \name\;


INIT Header NavBar:

import React from 'react';
import { Navbar, Nav } from 'rsuite';

import '../style/Header.css';

const Header = () => {
  return (

    <Navbar id='nav'>

      <div>
        <img src="/images/logo.jpeg" alt="Logo" className="logo" />
      </div>

        <Nav className='left'>
            <Nav.Item href='' >Home
                </Nav.Item>
            <Nav.Item href='' >About Us
                </Nav.Item>
            <Nav.Item href='' >Contact
                </Nav.Item>
        </Nav>

        <Nav className='right'>
            <Nav.Item href='' >Sign In
                </Nav.Item>
            <Nav.Item href='' >Sign Up
                </Nav.Item>
        </Nav>

    </Navbar>

  );
};

export default Header;



INIT Footer:

import React from 'react';
import { Navbar, Nav } from 'rsuite';

import '../style/Footer.css';



const Footer = () => {
    return (
    <footer className="footer">
      <div className="footer-content">
        <span className="footer-text">© Whak inc. 2023. All rights reserved.</span>
      </div>
    </footer>    
    )
}

export default Footer;



## Redoing Landing:

<Container id="landing-container">

<div className="Landing1">
<h2 style={{color:'#992509'}}>Manage your home products with ease and never miss a maintenance task again!</h2>
</div>

<div className="Landing2">
<h1>Key Features</h1>

<p>Securely log in and manage your inventory, scheduling maintenance tasks and tracking their history for every household item.</p>
<p>Securely log in and manage your inventory, scheduling maintenance tasks and tracking their history for every household item.</p>
<p>Securely log in and manage your inventory, scheduling maintenance tasks and tracking their history for every household item.</p>

<img src='' alt='' className='' />

</div>

 <Container style={{ position: 'relative' }}>
      <div
        id="house-img"
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          marginTop: '9vw',
          marginRight: '13%',
        }}
      >
        <img src="../images/house.jpeg" alt="House" className="something" style={{ height: '12vw' }} />
      </div>

      <div
        id="content"
        style={{
          paddingTop: '6vw',
          display: 'flex',
          flexDirection: 'column',
          gap: '3vw',
          paddingBottom: '6vw',
          marginLeft: '13%',
        }}
      >
        <Panel className="box1" style={{ border: '1px solid #000000', width: '27vw', borderRadius: '5px' }}>
          <h2 style={{ marginLeft: '2vw' }}>Join the Team</h2>
          <p style={{ marginLeft: '6vw' }}>Become a member</p>
        </Panel>

        <Panel className="box2" style={{ border: '1px solid #000000', width: '27vw', borderRadius: '5px' }}>
          <h2 style={{ marginLeft: '2vw' }}>Stay on Task</h2>
          <p style={{ marginLeft: '6vw' }}>Become a member</p>
        </Panel>

        <Panel className="box3" style={{ border: '1px solid #000000', width: '27vw', borderRadius: '5px' }}>
          <h2 style={{ marginLeft: '2vw' }}>Responsive experience</h2>
          <p style={{ marginLeft: '6vw' }}>Become a member</p>
        </Panel>
      </div>
    </Container>








</Container>



### Things to add to my capstone:

polygon panels - home page

landing page edited 

## .env for secret key API




import ReactDOM from 'react-dom';
import './styles.css';
import React, { useState } from 'react';
import { Button, Modal, Input, InputGroup, Form,} from 'rsuite';
import mockTasks from '../mockTasks';



const New = () => {
  const [showModal, setShowModal] = useState(false);
  const [newTask, setNewTask] = useState({
    id: mockTasks.length + 1,
    area: '',
    item: '',
    task_name: '',
    task_descr: '',
    frequency: '',
    due_date: '',
    user_id: 1,
  });

  const handleClose = () => setShowModal(false);
  const handleOpen = () => setShowModal(true);
  const handleInputChange = (value, name) => setNewTask({...newTask, [name]: value});

  const handleAddTask = () => {
    mockTasks.push(newTask);
    setNewTask({ ...newTask, id: mockTasks.length + 1 });
    handleClose();
};

return (
  <>
    <Button appearance="primary" onClick={handleOpen}>
      New Task
    </Button>
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Add New Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form fluid>
          <Form.Group>
            <Form.ControlLabel>Area</Form.ControlLabel>
            <InputGroup>
              <Input name="area" value={newTask.area} onChange={value => handleInputChange(value, 'area')} />
            </InputGroup>
          </Form.Group>
          <Form.Group>
            <Form.ControlLabel>Item</Form.ControlLabel>
            <InputGroup>
              <Input name="item" value={newTask.item} onChange={value => handleInputChange(value, 'item')} />
            </InputGroup>
          </Form.Group>
          <Form.Group>
            <Form.ControlLabel>Task Name</Form.ControlLabel>
            <InputGroup>
            <Input name="task_name" value={newTask.task_name} onChange={value => handleInputChange(value, 'task_name')} />
              </InputGroup>
            </Form.Group>
            <Form.Group>
              <Form.ControlLabel>Description</Form.ControlLabel>
              <InputGroup>
                <Input name="task_descr" value={newTask.task_descr} onChange={value => handleInputChange(value, 'task_descr')} />
              </InputGroup>
            </Form.Group>
            <Form.Group>
              <Form.ControlLabel>Frequency</Form.ControlLabel>
              <InputGroup>
                <Input name="frequency" value={newTask.frequency} onChange={value => handleInputChange(value, 'frequency')} />
              </InputGroup>
            </Form.Group>
            <Form.Group>
              <Form.ControlLabel>Due Date</Form.ControlLabel>
              <InputGroup>
                <Input name="due_date" value={newTask.due_date} onChange={value => handleInputChange(value, 'due_date')} />
              </InputGroup>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button appearance="primary" onClick={handleAddTask}>
            Add Task
          </Button>
          <Button appearance="subtle" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      </>
  );
};



ReactDOM.render(<New />, document.getElementById('root'));

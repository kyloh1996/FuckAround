import React, { useState, useEffect } from 'react';
import { Button, Modal, Input, InputGroup, Form } from 'rsuite';
import { useNavigate } from 'react-router-dom';
import mockTasks from '../mockTasks';
import '../style/PracticeNew.css';

const New = () => {
  const [open, setOpen] = useState(true);
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

  const navigate = useNavigate();
  const handleClose = () => navigate('/index'); // Navigate to "/index" when modal is closed

  const handleInputChange = (value, name) => setNewTask({ ...newTask, [name]: value });

  const handleAddTask = () => {
    mockTasks.push(newTask);
    setNewTask({ ...newTask, id: mockTasks.length + 1 });
    navigate(`/index`);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setNewTask({ ...newTask, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    setOpen(true); // Set showModal to true when component mounts
  }, []);
return (
  <>
    <Modal open={open} >
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
            <Form.Group>
              <Form.ControlLabel>Image</Form.ControlLabel>
              <div className="upload-container">
                <label htmlFor="image-upload" className="upload-button">
                  Upload Image
                  <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                </label>
              </div>
              {newTask.image && (
                <div style={{ maxWidth: '200px' }}>
                  <img
                    src={newTask.image}
                    alt="Uploaded"
                    style={{
                      width: '100%',
                      boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
                      borderRadius: '4px',
                    }}
                  />
                </div>
              )}
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

export default New;
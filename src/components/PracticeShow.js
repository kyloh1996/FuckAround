import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Panel, Button } from 'rsuite';
import mockTasks from '../mockTasks';

import '../style/PracticeShow.css';

const PracticeShow = () => {
  const { id } = useParams();
  const task = mockTasks.find((item) => item.id === Number(id));

  return (
    <div id="page">
      {task ? (
        <div className="practice-container">
          <Panel shaded bordered bodyFill style={{ width: '240px' }}>
            <img src={task.image} alt={task.name} className="img" /> 
            <Panel header={task.task_name} className="content-panel">
              <p className="subTit">{`${task.area} - ${task.item}`}</p>
           ge:
           ge   <p className="description">{task.task_descr}</p>
              <div className="button-container">
                <Link to="/index">
                  <Button className="return-button">Return</Button>
                </Link>
              </div>
            </Panel>
          </Panel>
        </div>
      ) : (
        <p>No task found</p>
      )}
    </div>
  );
};

export default PracticeShow;

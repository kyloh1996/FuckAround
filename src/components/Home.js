import React, { useState } from "react";
import { Panel, Placeholder } from 'rsuite';
import { Link } from "react-router-dom";
import Chat from './Chat';

import '../style/Home.css';

const Card = ({ title, onClick }) => (
  <Panel bordered header={title} className="card" onClick={onClick}>
    <Placeholder.Paragraph />
  </Panel>
);

const Home = ({ currentUser }) => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChatToggle = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
<div id='portal' >

      <h1 className='welcome' style={{ display: 'flex', justifyContent: 'center', gap: '3vw', paddingBottom: '6vw' }}>Welcome {currentUser} </h1>
      <div className="container" >
        <a href="/users/tasks">
          <div className="hexagon" style={{ marginTop: '7vw', color: '#000000',  backgroundImage: `url("../images/productive.jpeg")`, backgroundSize:'cover', backgroundPosition:'center',  }}>
            <Card title="My Tasks" />
          </div>
        </a>

        <Link to="/calendar">
          <div className="hexagon" style={{ marginTop: '-7vw', color: '#000000',  backgroundImage: `url("../images/productive.jpeg")`, backgroundSize:'cover', backgroundPosition:'center',  }}>
            <Card title="My Calendar" />
          </div>
        </Link>

        <a href="/tasks/add">
          <div className="hexagon" style={{ marginTop: '7vw', color: '#000000', backgroundImage: `url("../images/productive.jpeg")`, backgroundSize:'cover', backgroundPosition:'center', }}>
            <Card title="Add Task" />
          </div>
        </a>

        <div style={{ cursor: 'pointer' }} onClick={handleChatToggle}>
          <div className="hexagon" style={{ marginTop: '-7vw', color: '#000000' ,  backgroundImage: `url("../images/productive.jpeg")`, backgroundSize:'cover', backgroundPosition:'center',   }}>
            <Card title="ChatGPT Assistant" />
          </div>
        </div>
        {isChatOpen && <Chat />}
      </div>
    </div>
  );
};

export default Home;

import React from 'react';
import { Container, Panel } from 'rsuite';
import '../style/Landing.css';
import Background from '../components/Background';

const Landing = () => {
 

  return (
    <>
    <Background style={{zIndex:'-2', position:'absolute'}} />
    <Container
    style={{
      position: 'relative',
      boxShadow: '13px 13px 100px #99830d, -13px -13px 100px #ffff1d',
      backgroundImage:"url('../components/Background')" ,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      minHeight: '100vh',
      padding: '3vw 0',
      fontFamily: 'Alegreya',
      border:'none',
      zIndex:'2',
    }}
        >
      <div className="Landing1" style={{ paddingTop: '4vw', width:'60vw' }}>
        <h2 style={{ color: '#992509', marginBottom: '1.5vw', marginLeft:'4vw', textAlign: 'center', fontSize: '4vw' }}>
      
          Manage your home products with ease and never miss a maintenance task again!
          
        </h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', marginTop:'6vw', marginBottom:'6vw' }}>
  <div className="Landing2" style={{ marginBottom: '4vw', display: 'flex', alignItems: 'center' }}>
    <div style={{ marginRight: '13vw' }}>
      <h1 style={{ marginBottom: '3vw', color: '#000000', fontSize: '3vw', textAlign: 'left' }}>
        Key Features
      </h1>

      <p style={{ marginBottom: '1.5vw', color: '#992509', fontSize: '1.3vw', width: '40vw', textAlign: 'left' }}>
        Securely log in and manage your inventory, scheduling maintenance tasks and tracking their history for every
        household item.
      </p>
      <p style={{ marginBottom: '1.5vw', color: '#992509', fontSize: '1.3vw', width: '40vw', textAlign: 'left' }}>
        Securely log in and manage your inventory, scheduling maintenance tasks and tracking their history for every
        household item.
      </p>
      <p style={{ marginBottom: '1.5vw', color: '#992509', fontSize: '1.3vw', width: '40vw', textAlign: 'left' }}>
        Securely log in and manage your inventory, scheduling maintenance tasks and tracking their history for every
        household item.
      </p>
    </div>

          <div style={{ marginLeft: '4vw' }}>
            <img src="../images/house.jpeg" alt="House" className="something" style={{ height: '18vw', }} />
          </div>
        </div>

        <Container style={{ position: 'relative', marginTop:'6vw', marginBottom:'6vw' , width: '100%' }}>
          <div
            id="house-img"
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              marginTop: '7vw',
              marginRight: '10%',
            }}
          ></div>

          <div
            id="content"
            style={{
              paddingTop: '4vw',
              display: 'flex',
              flexDirection: 'column',
              gap: '2vw',
              paddingBottom: '4vw',
              marginLeft: '10%',
              width: '80%',
            }}
          >
            <Panel
              className="box1"
              style={{
                width: '100%',
                borderRadius: '5px',
                background: '#992509 ',
                color: '#000000',
                padding: '1.5vw',
                fontSize: '1.8vw',
                borderRadius:'3vw'
              }}
            >
              <h2 style={{ marginLeft: '1vw', marginBottom: '0.5vw' }}>Join the Team</h2>
              <p style={{ marginLeft: '6vw' }}>Join the ranks of our productive members</p>
            </Panel>

            <Panel
              className="box2"
              style={{
                width: '100%',
                borderRadius: '5px',
                background: '#992509 ',
                color: '#000000',
                padding: '1.5vw',
                fontSize: '1.8vw',
                borderRadius:'3vw'
              }}
            >
              <h2 style={{ marginLeft: '1vw', marginBottom: '0.5vw' }}>Stay on Task</h2>
              <p style={{ marginLeft: '6vw' }}>Manage your tasks effortlessly</p>
            </Panel>

            <Panel
              className="box3"
              style={{
                width: '100%',
                borderRadius: '5px',
                background: '#992509',
                color: '#000000',
                padding: '1.5vw',
                fontSize: '1.8vw',
                borderRadius:'3vw'
              }}
            >
              <h2 style={{ marginLeft: '1vw', marginBottom: '0.5vw' }}>Responsive experience</h2>
              <p style={{ marginLeft: '6vw' }}>Enjoy integrated assistance with your tasks</p>
            </Panel>
          </div>
        </Container>

        <div className="Landing3" style={{ marginTop: '4vw', textAlign: 'left', width: '60vw', marginTop:'6vw', marginBottom:'6vw'  }}>
          <h1 style={{ marginBottom: '3vw', color: '#992509', fontSize: '3vw' }}>
            Ready to become a home maintenance master? Maximize your home’s value and organization today!
          </h1>
          <div className="btns" style={{ display: 'flex', justifyContent: 'center', gap: '2vw' }}>
            <button
              style={{
                color: '#FFFFFF',
                background: '#000000',
                borderRadius: '5px',
                height: '3.5vw',
                width: '10vw',
                fontSize: '1.8vw',
                border: 'none',
                cursor: 'pointer',
                marginTop: '3vw',
                borderRadius:'3vw'
              }}
            >
              Sign Up
            </button>
            <button
              style={{
                color: '#FFFFFF',
                background: '#992509',
                borderRadius: '5px',
                height: '3.5vw',
                width: '10vw',
                fontSize: '1.8vw',
                border: 'none',
                cursor: 'pointer',
                marginTop: '3vw',
                borderRadius:'3vw'
              }}
            >
              Demo
            </button>
          </div>
        </div>

        <div className="Landing4" style={{ marginTop: '4vw' }}>
          <img src="../images/family.jpeg" alt="Family" style={{ width: '45vw', maxWidth: '100%' }} />
        </div>
      </div>
    </Container>
    </>
  );
};

export default Landing;

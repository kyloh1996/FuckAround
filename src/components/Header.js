import React from 'react';
import { Navbar, Nav, Content, Container } from 'rsuite';
import '../style/Header.css';
import Background from '../components/Background';

const Header = () => {
  return (
    <>
      <Navbar id='nav'>
        <Nav className='left'>
          <span
            style={{
              content: "''",
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              boxShadow: '0 0 10px #ffed75, 0 0 20px #ffed75, 0 0 30px #ffed75, 0 0 40px #ffed75',
              opacity: '0.8',
              
              clipPath: 'polygon(50% 0%, 85% 7%, 100% 50%, 85% 93%, 50% 100%, 15% 93%, 0% 50%, 15% 7%)',
            }}
          ></span>
          <img
            src="/images/logo.jpeg"
            alt="Logo"
            className="logo"
            style={{
              height: '6vw',
              width: '6vw',
              borderRadius: '100%',
              boxShadow: '0 0 0px #ffed75, 0 0 10px #ffed75, 0 0 20px #ffed75, 0 0 30px #ffed75',
              background: 'radial-gradient(#ffed75, transparent)',
            }}
          />
          <Nav.Item href='' style={{ color: '#ffffff' }}>Home</Nav.Item>
          <Nav.Item href='' style={{ color: '#ffffff' }}>About Us</Nav.Item>
          <Nav.Item href='' style={{ color: '#ffffff' }}>Contact</Nav.Item>
        </Nav>
        <Nav className='right'>
          <Nav.Item href='' style={{ color: '#ffffff' }}>Sign In</Nav.Item>
          <Nav.Item href='' style={{ color: '#ffffff' }}>Sign Up</Nav.Item>
        </Nav>
      </Navbar>
      <Container>
        <Content>
        <div id="landing">
  <div className="title-position">
    <h1 className="title">HoneyHome</h1>
    <h1 className="title2">
      Track<span className="flicker">e</span>r
    </h1>
  </div>
            <div className="pic-position">
              <img src="/images/landing.jpeg" alt="pic" className="pic" />
            </div>
          </div>
        </Content>
      </Container>
    </>
  );
};

export default Header;

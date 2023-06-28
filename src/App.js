import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Landing from './pages/Landing';
import Footer from './components/Footer';
import LogIn from './components/LogIn';
import New from './components/New';
import Home from './components/Home';
import EventCalendar from './calendar/eventCalendar';
import mockTasks from './mockTasks';

const App = () => {
  const [practice, setPractice] = useState(mockTasks);
  console.log(practice);
  return (
    <Router>
      <div className="App">
        <Header />
        <LogIn />
        <Landing />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/calendar" element={<EventCalendar />} />
          <Route path="/new" element={<New practice={practice}/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

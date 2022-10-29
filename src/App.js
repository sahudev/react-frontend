// import logo from './logo.svg';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
  
function App() {
  return (
    <div>
      <Router>
            <HeaderComponent />
              <div className="container">
                <Routes>
                    <Route path="/" exact component = {ListEmployeeComponent}></Route>
                    <Route path="/employees" exact component = {ListEmployeeComponent}></Route>
                </Routes>
                <ListEmployeeComponent/>
              </div>
            <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;

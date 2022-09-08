//import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom"
import Select from 'react-select'
//import Custinfo from './Custinfo'
import AddonDatatable from './AddonDatatable';


function App() {
  return (
    <><div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="memreg">Membership</Link>
          </li>
          <li>
            <Link to="custcare">Customer Care</Link>
          </li>

          <li>
            <Link to="new">More</Link>
          </li>

          <li>
            <Link to="login">Login</Link>
          </li>
        </ul>
      </nav>
      <div className="main">
        {/* Define all the routes */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          {/* <Route path="memreg" element={<Custinfo/>}></Route> */}
          <Route path="custcare"  element={<Custcare />}></Route>
          <Route path="new" element={<MyComponent />}></Route>
          <Route path="login" element={<Login />}></Route>

          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>

      <AddonDatatable/>
      
    </div></>
  );
}
export const Home = () => {
  return <div>You are in Home page</div>
}
export const About = () => {
  return <div>This is the page where you put details about yourself</div>
}
export const NotFound = () => {
  return <div>This is a 404 page</div>
}
export const Membership = () => {
  return <div>This is the page for registration</div>
}
export const Custcare = () => {
  return <div>This is the page for customer care information</div>
}
export const Login = () => {
  return <div>This is the login page</div>
}
const options = [
  { value: 'Booking', label: 'Booking' },
  { value: 'Cancellation', label: 'Cancellation' },
  { value: 'Handover', label: 'Handover' }
]

export const MyComponent = () => (
  <Select options={options} />
)

export default App;

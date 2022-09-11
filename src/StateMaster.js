import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import AvailableCars from "./Available_cars";
//import AvailableCars from "./Available_cars";
function StateMaster() {
  const [data, setData] = useState([]);
  const [State, setState] = useState([]);
  const [City, setCity] = useState([]);
  const navigate = useNavigate();
  const [Hub, setHub] = useState([]);

  const navigateToContacts = () => {
    // 👇️ navigate to /contacts
    navigate('AvailableCars');
  };

  useEffect(() => {
    axios
      .get("https://localhost:44356/api/State_Master")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  //removing duplicate country names
  let state = [...new Set(data.map((item) => item.State_Name))];
  state.sort();
  

  const handleStateChange = (e) => {
    let Singlestate = data.filter((item) => item.State_Name === e.target.value);
    setState(Singlestate);
    let Cityp = [...new Set(Singlestate.map((item) => item.City_Master))];
    let Citys = [...new Set(Cityp[0].map((item) => item.City_Name))];
    console.log(Citys)

    setCity(Citys);
  };
  

  const handleCityChange = (e) => {
    let City_Master = [...new Set(State.map((item) => item.City_Master))];
    let SingleCity = City_Master[0].filter(
      (item) => item.City_Name === e.target.value
    );
    console.log(SingleCity);
    let Hubp = [...new Set(SingleCity.map((item) => item.Hub_Master))];
    let Hubs = [...new Set(Hubp[0].map((item) => item.Hub_Name))];
      setHub(Hubs);
  };

  return (
    <div >
      {/*Country Selection */}
      <div className="container w-25">
      <label>
       State  : 
      </label>
      <select className="form-select" aria-label="Default select example" onChange={(e) => handleStateChange(e)}>
        {state?.map((item, index) => (
          <option key={index} value={item} >
            {item}
          </option>
        ))}
      </select>
      </div>
      <br/><br/>
      {/*State Selection */}
      <div>
      <div className="container w-25">
      <label>City  : </label>
      <select className="form-select "  aria-label="Default select example" onChange={(e) => handleCityChange(e)}>
        <option>Select City</option>
        {City?.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      </div>

      </div>
<br/><br/>
<div className="container w-25">
      <label >Hub Selection : </label>
      <select className="form-select" aria-label="Default select example">
        <option>Select Hub</option>
        {Hub?.map((item, index) => (
          <option key={index} value={item} highlightOnHover>
            {item}
          </option>
        ))}
      </select>
      </div>

      <div className="container w-25">
      <label >Airport Selection : </label>
      <select className="form-select" aria-label="Default select example">
        <option>Select Hub</option>
        {Hub?.map((item, index) => (
          <option key={index} value={item} highlightOnHover>
            {item}
          </option>
        ))}
      </select>
      </div>

      
      <br/><br/>
      <div>
        <button className="btn btn-outline-success btn-sm" onClick={navigateToContacts}  >Confirm Hub</button>
        <Routes><Route path="./Available_cars" element={<AvailableCars />} /></Routes>
        </div>

    </div>

    

    
  );
}

export default StateMaster;

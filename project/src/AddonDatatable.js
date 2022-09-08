import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
//import axios from "axios";
import "./addon.css";
import 'bootstrap/dist/css/bootstrap.css';


const AddonDatatable = () => {
  const [Addons, setAddon] = useState([]);
  const [value, setvalue] = useState([]);

  
  // const getAddons = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://localhost:44356/api/AddOn_Master"
  //     );
  //     setAddon(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getAddons();
  // }, []);

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch('https://localhost:44356/api/AddOn_Master')
        .then(response => response.json())
        .then(response => setAddon(response));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);


  const columns = [
    // {
    //   name: "Addon_id",
    //   selector: (row) => row.Addon_id,
    //   sortable: true,
    // },
    {
      name: "Addon_Name",
      selector: (row) => row.Addon_Name,
      sortable: true,
    },
    {
      name: "Addon_Daily_Rate",
      selector: (row) => "$ "+ row.Addon_Daily_Rate,
      sortable: true,
    },
    {
      name: "Rate_Valid_Upto",
      selector: (row) => row.Rate_Valid_Upto,
      sortable: true,
    },
    {
      name: "Select",
      cell: (row) => (
        <input type="checkbox" onClick={() => setvalue(row)}></input>
      ),
    },
  ];

 

  return (
    <div className="w-75 p-5">
      <DataTable className= "mdc-data-table__cell"
        title="Rental Add-ons"
        columns={columns}
        data={Addons}
        highlightOnHover
        
      />
      <button type="submit"
      value={value} 
      className="btn btn-outline-success btn-sm"
      //onClick="./bookingconform"
      //formAction=""
      >Continue Booking</button> 
      <button  className="btn btn-outline-danger btn-sm"
      //onClick="./HomeForm"
      >Cancel</button>
    </div>
  );
};

export default AddonDatatable;

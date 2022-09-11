import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import "./addon.css";
import 'bootstrap/dist/css/bootstrap.css';
import Audi from "./Audi.jpg";
import AddonDatatable from "./AddonDatatable";
import StateMaster from "./StateMaster";
import { Route, Routes, useNavigate } from "react-router-dom";
const AvailableCars = () => {
  const [Available_cars, setAvailable_cars] = useState([]);
  const [value, setvalue] = useState([]);
  const navigate = useNavigate();

  const navigateToAddonDatatable = () => {
    // 👇️ navigate to /contacts
    navigate('AddonDatatable');
  };
  const navigateToHome = () => {
    // 👇️ navigate to /contacts
    navigate('StateMaster');
  };
  const getAvailable_cars = async () => {
    try {
      const response = await axios.get(
        "https://localhost:44356/api/CarType_Master"
      );
      setAvailable_cars(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    // {
    //   name: "Addon_id",
    //   selector: (row) => row.Addon_id,
    //   sortable: true,
    // },
    {
      name: "Cartype_Id",
      selector: (row) => row.Cartype_Id,
      sortable: true,
    },
    {
      name: "Cartype_Name",
      selector: (row) =>  row.Cartype_Name,
      sortable: true,
    },
    {
      name: "Daily_Rate",
      selector: (row) => row.Daily_Rate,
      sortable: true,
    },
    {
        name: "Weekly_Rate",
        selector: (row) => row.Weekly_Rate,
        sortable: true,
      },
      {
        name: "Monthly_Rate",
        selector: (row) => row.Monthly_Rate,
        sortable: true,
      },
      {
        name: "Image",
        selector: (row) => <img width={50} height={50} src={Audi} alt="audi"/>
        ,
        sortable: true,
      },
    {
      name: "Select",
      cell: (row) => (
        <input type="checkbox" onClick={() => setvalue(row)}></input>
      ),
    },
  ];

  useEffect(() => {
    getAvailable_cars();
  }, []);

  return (
    <div className="w-75 p-5 container-fluid">
      <DataTable className= "mdc-data-table__cell"
        title="AvailableCars"
        columns={columns}
        data={Available_cars}
        highlightOnHover
        
      />
     <div>
        <button className="btn btn-outline-success btn-sm" onClick={navigateToAddonDatatable}  >Continue Booking</button>
        <Routes><Route path="./AddonDatatable" element={<AddonDatatable />} /></Routes>
        </div>
        <div>
        <button className="btn btn-outline-danger btn-sm" onClick={navigateToHome}  >Cancel</button>
        <Routes><Route path="./StateMaster" element={<StateMaster />} /></Routes>
        </div>

      {/* <button type="submit"
      value={value} 
      className="btn btn-outline-success btn-sm"
      //onClick="./bookingconform"
      //formAction=""
      >Continue Booking</button>
      <Routes><Route path="./AddonDatatable" element={<AddonDatatable />} /></Routes> </form>
      <button  className="btn btn-outline-danger btn-sm"

onClick={navigateToContacts}
      //onClick="./HomeForm"
      >Cancel</button> */}
       
    </div>

  );
};

export default AvailableCars;
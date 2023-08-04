/*!

=========================================================
* Black Dashboard React v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useEffect, useState } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

import { useFormik } from "formik";
import MonitorService from "../services/monitoring";

import { useSignIn } from 'react-auth-kit'

const UserProfile=() =>{
  const [bigChartData, setBigChartData] = React.useState("data1");
  const setBgChartData = (name) => {
    setBigChartData(name);
  };
  const signIn=useSignIn();
  const [initialAuthDone, setInitialAuthDone] = useState(false);

  const fetchdata = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      if (!accessToken) {
        console.error('Access token not found. Please login first.');
        return;
      }
  
      var config = {
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${accessToken}`
        }
      };
  
      // Make your API call using Axios or Fetch here
      // For example:
      const response = await fetch('https://staging-antro.srv.kirei.co.id/monitoring', config);
      const data = await response.json();
      console.log('Data fetched:', data);
  
    } catch (error) {
      // Handle errors here
      console.error('An error occurred during API call.', error);
    }
  };

  useEffect(() => {
    // If the initial authentication is not done, trigger the fetchdata function
    if (!initialAuthDone) {
      fetchdata();
      setInitialAuthDone(true);
    }
  }, [initialAuthDone]);

  return (
    <>
        
    </>
  );
}

export default UserProfile;

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

import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar, Pie, PolarArea} from "react-chartjs-2";

// reactstrap components
import {
  Table,
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Button,
  CardFooter,
  FormGroup,
  Form,
  Input,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  UncontrolledTooltip,
  Container,
} from "reactstrap";

// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4,
  chartExample5,
  chartExample6,
  chartExample7,
  chartExample8,
  chartExample9
} from "variables/charts.js";

import { useFormik } from "formik";
import MonitorService from "../services/monitoring";

import { useSignIn } from 'react-auth-kit'
import moment from 'moment';

const PantauSatker=() =>{
  const [data, setData] = useState([]);
  const [bigChartData, setBigChartData] = React.useState("data1");
  const [satkerOptions, setSatkerOptions] = useState([]);
  const [selectedSatkerId, setSelectedSatkerId] = useState("");
  const [userData, setUserData] = useState([]);
  const setBgChartData = (name) => {
    setBigChartData(name);
  };

  const signIn=useSignIn();
  const [initialAuthDone, setInitialAuthDone] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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
      const responseData = await response.json();
      console.log('Data fetched:', responseData);

      const userId = localStorage.getItem('id');
      console.log("ini id", userId);

      const satkerId = localStorage.getItem('satker');
      console.log("ini satker id", satkerId);
  
      const respon = await fetch('https://staging-antro.srv.kirei.co.id/users', config);
      const responData = await respon.json();
      console.log('Data fetched:', responData);
  
      const matchingObject = responData.data.data.find(obj => obj.satker_id === satkerId);

      setData(responseData.data.data); // Set the data array to the state
      setIsLoading(false); // Set isLoading to false after data is fetched
      console.log('isLoading:', isLoading);

      if (matchingObject) {
        const satker = matchingObject.id;
        setSatkerOptions(satker); // Set the baby objects to the state
        setIsLoading(false); // Set isLoading to false after fetching baby options
        return satker;
      } 

  } catch (error) {
    console.error('An error occurred during API call.', error);
  }
};

  const fetchUserData = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      if (!accessToken) {
        console.error('Access token not found. Please login first.');
        return;
      }
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        }
      };
  
      const response = await fetch('https://staging-antro.srv.kirei.co.id/users', config);
      const responseData = await response.json();
      console.log('User data fetched:', responseData);
  
      return responseData.data.data;
    } catch (error) {
      console.error('An error occurred during API call.', error);
      return [];
    }
  };  

  useEffect(() => {
    if (!initialAuthDone) {
      fetchdata();
      fetchUserData().then((userData) => {
        setUserData(userData);
  
        // Extract unique satker_ids from user data
        const uniqueSatkerIds = Array.from(new Set(userData.map(user => user.satker_id)));
  
        // Set the satkerOptions with unique satker_ids
        setSatkerOptions(uniqueSatkerIds);
  
        setInitialAuthDone(true);
      });
    }
  }, [initialAuthDone]);

  return (
    <>
      <div className="content">
        <Row>
          <Col md="6">
            <FormGroup>
              <Label for="exampleSelect">Select a satker</Label>
              <Input type="select" name="select" id="exampleSelect">
                <option value="">Select</option>
                {satkerOptions.map((satker) => (
                  <option key={satker.id} value={satker.id}>
                    {satker.name}
                  </option>
                ))}
              </Input>
            </FormGroup>
          </Col> 
        </Row>
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <h4 className="title">Child Monitoring Data</h4>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Nama Depan</th>
                      <th>Nama Belakang</th>
                      <th>Umur</th>
                      <th>Tinggi Badan</th>
                      <th>Berat Badan</th>
                      <th>Lingkar Lengan</th>
                      <th>Lingkar Kepala</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data && data.length > 0 ? (
                      data
                        .filter((item) => {
                          const user = userData.find(user => user.id === item.nakes_user_id);
                          return user && user.satker_id === selectedSatkerId;
                        })
                        .map((item) => {
                          const birthDate = new Date(item.baby.created_at);
                          const createdAt = new Date(item.created_at);
                          const monthsDiff =
                            (createdAt.getFullYear() - birthDate.getFullYear()) * 12 +
                            (createdAt.getMonth() - birthDate.getMonth());

                          return (
                            <tr key={item.id}>
                              <td>{item.baby.first_name}</td>
                              <td>{item.baby.last_name}</td>
                              <td>{monthsDiff} months</td>
                              <td>{item.body_height}</td>
                              <td>{item.body_weight}</td>
                              <td>{item.head_circumference}</td>
                              <td>{item.arm_circumference}</td>
                            </tr>
                          );
                        })
                    ) : (
                      <tr>
                        <td colSpan="7">{isLoading ? 'Loading...' : 'No data available.'}</td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default PantauSatker;

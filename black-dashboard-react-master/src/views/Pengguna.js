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
import moment from 'moment';

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

const DataPengguna=() =>{
  const [data, setData] = useState([]);
  const [bigChartData, setBigChartData] = React.useState("data1");
  const [babyId, setBabyId] = useState(''); // State to hold the entered baby_id
  const [filteredData, setFilteredData] = useState([]); // State to hold filtered data
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track submit button press
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

    setData(responseData.data.data); // Set the data array to the state
    setIsLoading(false); // Set isLoading to false after data is fetched
    console.log('isLoading:', isLoading);
  } catch (error) {
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

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (babyId.trim() === '') {
      // If the babyId is empty, show all data
      setIsSubmitted(true);
      setFilteredData(data);
    } else {
      // Filter the data based on the entered baby_id
      const filtered = data.filter((item) => item.baby.id === babyId);
  
      if (filtered.length > 0) {
        setIsSubmitted(true);
        setFilteredData(filtered);
      } else {
        setIsSubmitted(false); // No matching data found, reset isSubmitted
        setFilteredData([]); // Clear filteredData
      }
    }
  };
  

  return (
    <>
      <div className="content">
        <Row>
          <CardBody>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="babyId">Baby ID:</Label>
                <Input
                  type="text"
                  id="babyId"
                  name="babyId"
                  value={babyId}
                  onChange={(e) => setBabyId(e.target.value)}
                  placeholder="Enter Baby ID"
                />
              </FormGroup>
              <Button color="primary" type="submit">
                Submit
              </Button>
            </Form>
          </CardBody>
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
                      <th>Jenis Kelamin</th>
                      <th>Umur</th>
                      <th>Tinggi Badan</th>
                      <th>Berat Badan</th>
                      <th>Lingkar Lengan</th>
                      <th>Lingkar Kepala</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.length > 0 ? (
                      filteredData.map((item) => {
                        const birthDate = new Date(item.baby.date_of_birth);
                        const createdAt = new Date(item.created_at);
                        const monthsDiff =
                          (createdAt.getFullYear() - birthDate.getFullYear()) * 12 +
                          (createdAt.getMonth() - birthDate.getMonth());

                        return (
                          <tr key={item.id}>
                            <td>{item.baby.first_name}</td>
                            <td>{item.baby.last_name}</td>
                            <td>{item.baby.gender}</td>
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
                        <td colSpan="8">
                          {isSubmitted ? 'No matching data found.' : isLoading ? 'Loading...' : 'No data available.'}
                        </td>
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

export default DataPengguna;

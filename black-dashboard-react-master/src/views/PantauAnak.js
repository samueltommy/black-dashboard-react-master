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
  tbCo0,
  tbCo24,
  bbCo0,
  bbCo24,
  bbtbCo0,
  bbtbCo24,
  tbCe0,
  tbCe24,
  bbCe0,
  bbCe24,
  bbtbCe0,
  bbtbCe24,
} from "variables/charts.js";

import { useFormik } from "formik";
import MonitorService from "../services/monitoring";
import moment from 'moment';
import apiClient from "../utils/api"

import { useSignIn } from 'react-auth-kit'

const PantauAnak=() =>{
  const [dataTabel, setDataTabel] = useState([]);
  const [bigChartData, setBigChartData] = React.useState("data1");
  const [babyOptions, setBabyOptions] = useState([]);
  const [selectedBabyId, setSelectedBabyId] = useState("");
  const setBgChartData = (name) => {
    setBigChartData(name);
  };

  const calculateAge = (birthdate) => {
    const today = new Date();
    const birthDate = new Date(birthdate);
    const ageInMonths = (today.getFullYear() - birthDate.getFullYear()) * 12 + (today.getMonth() - birthDate.getMonth());
    return ageInMonths;
  };

  const signIn=useSignIn();
  const [initialAuthDone, setInitialAuthDone] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleIdChange = (event) => {
    const selectedBabyId = event.target.value;
    setSelectedBabyId(selectedBabyId);
    localStorage.setItem("babyId", selectedBabyId);
    console.log(selectedBabyId, "selected baby_id");
  };
   

  const handleSubmit = async (monitorAnakPayload) => {
    fetchdata();
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
    console.log(monitorAnakPayload, "ini payload");
  };

  const fetchdata = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      if (!accessToken) {
        console.error('Access token not found. Please login first.');
        return;
      }
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${accessToken}`
        }
      };
  
      // Fetch data from the API
      const response = await fetch('https://staging-antro.srv.kirei.co.id/monitoring', config);
      const responseData = await response.json();
      console.log('Data fetched:', responseData);
  
      const userId = localStorage.getItem('id');
  
      const respon = await fetch('https://staging-antro.srv.kirei.co.id/parent', config);
      const responData = await respon.json();
      console.log('Data fetched:', responData);
  
      const matchingObject = responData.data.data.find(obj => obj.user_id === userId);

      setDataTabel(responseData.data.data); // Set the data array to the state
      setIsLoading(false); // Set isLoading to false after data is fetched
      console.log('isLoading:', isLoading);
  
      if (matchingObject) {
        const babies = matchingObject.baby;
        setBabyOptions(babies); // Set the baby objects to the state
        setIsLoading(false); // Set isLoading to false after fetching baby options
        return babies;
      } 
  
      
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

  return (
    <>
      <div className="content">
        <Row>
          <Col md="6">
            <FormGroup>
              <Label for="exampleSelect">Select a Baby</Label>
              <Input type="select" name="select" id="exampleSelect" onChange={handleIdChange}>
                <option value="">Select</option>
                {babyOptions.map((baby) => (
                  <option key={baby.id} value={baby.id}>
                    {baby.first_name} {baby.last_name}
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
                    {dataTabel && dataTabel.length > 0 ? (
                      dataTabel
                        .filter((item) => item.baby.id === selectedBabyId) // Filter data based on selected baby_id
                        .map((item) => {
                          const birthDate = new Date(item.baby.date_of_birth);
                          const createdAt = new Date(item.created_at);
                          const monthsDiff =
                            (createdAt.getFullYear() - birthDate.getFullYear()) * 12 +
                            (createdAt.getMonth() - birthDate.getMonth());

                          return (
                            <tr key={item.id}>
                              <td>{item.baby.first_name}</td>
                              <td>{item.baby.last_name}</td>
                              <td>{monthsDiff} bulan</td>
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
        {selectedBabyId && dataTabel.length > 0 && ( // Only render if a baby is selected and there is data available
          <>
        <Row >
            <Col lg="6">
              <Card style={{ backgroundColor: 'rgb(173, 216, 230)' }}> {/* Add the 'soft-blue-card' class here */}
                <CardHeader>
                  <h5 className="card-category">KMS Panjang Badan Menurut Usia (Laki-Laki)</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-bell-55 text-info" /> 0-24 Bulan
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area" style={{ height: "500px" }}>
                  <Line
                    data={() => tbCo0.data(null, dataTabel, selectedBabyId)}
                    options={tbCo0.options}
                  />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6">
              <Card style={{ backgroundColor: 'rgb(173, 216, 230)' }}> {/* Add the 'soft-blue-card' class here */}
                <CardHeader>
                  <h5 className="card-category">KMS Berat Badan Menurut Usia (Laki-Laki)</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-send text-success" /> 0-24 Bulan
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area" style={{ height: "500px" }}>
                    <Line
                      data={() => bbCo0.data(null, dataTabel, selectedBabyId)}
                      options={bbCo0.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
          <Col lg="6">
            {calculateAge(selectedBabyId.birth_date) < 24 && (
              <Card style={{ backgroundColor: 'rgb(173, 216, 230)' }}>
                <CardHeader>
                  <h5 className="card-category">KMS Tinggi Badan Menurut Usia (Laki-Laki)</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-bell-55 text-info" /> 24-60 Bulan
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area" style={{ height: "500px" }}>
                    <Line
                      data={() => tbCo24.data(null, dataTabel, selectedBabyId)}
                      options={tbCo24.options}
                    />
                  </div>
                </CardBody>
              </Card>
              )}
            </Col>
            <Col lg="6">
              {calculateAge(selectedBabyId.birth_date) < 24 && (
              <Card style={{ backgroundColor: 'rgb(173, 216, 230)' }}>
                <CardHeader>
                  <h5 className="card-category">KMS Berat Badan Menurut Usia (Laki-Laki)</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-send text-success" /> 24-60 Bulan
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area" style={{ height: "500px" }}>
                    <Line
                      data={() => bbCo24.data(null, dataTabel, selectedBabyId)}
                      options={bbCo24.options}
                    />
                  </div>
                </CardBody>
              </Card>
              )}
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <Card style={{ backgroundColor: 'rgb(173, 216, 230)' }}>
                <CardHeader>
                  <h5 className="card-category">KMS Berat Badan Menurut Tinggi Badan (Laki-Laki)</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-bell-55 text-info" /> 0-24 Bulan
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area" style={{ height: "500px" }}>
                    <Line
                      data={() => bbtbCo0.data(null, dataTabel, selectedBabyId)}
                      options={bbtbCo0.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6">
              {calculateAge(selectedBabyId.birth_date) < 24 && (
              <Card style={{ backgroundColor: 'rgb(173, 216, 230)' }}>
                <CardHeader>
                  <h5 className="card-category">KMS Berat Badan Menurut Tinggi Badan (Laki-Laki)</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-send text-success" /> 24-60 Bulan
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area" style={{ height: "500px" }}>
                    <Line
                      data={() => bbtbCo24.data(null, dataTabel, selectedBabyId)}
                      options={bbtbCo24.options}
                    />
                  </div>
                </CardBody>
              </Card>
              )}
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <Card style={{ backgroundColor: 'rgb(255, 182, 193)' }}> {/* Add the 'soft-blue-card' class here */}
                <CardHeader>
                  <h5 className="card-category">KMS Panjang Badan Menurut Usia (perempuan)</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-bell-55 text-info" /> 0-24 Bulan
                  </CardTitle>
                </CardHeader>
                <CardBody>
                 <div className="chart-area" style={{ height: "500px" }}>
                    <Line
                      data={() => tbCe0.data(null, dataTabel, selectedBabyId)}
                      options={tbCe0.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6">
              <Card style={{ backgroundColor: 'rgb(255, 182, 193)' }}> {/* Add the 'soft-blue-card' class here */}
                <CardHeader>
                  <h5 className="card-category">KMS Berat Badan Menurut Usia (perempuan)</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-send text-success" /> 0-24 Bulan
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area" style={{ height: "500px" }}>
                    <Line
                      data={() => bbCe0.data(null, dataTabel, selectedBabyId)}
                      options={bbCe0.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              {calculateAge(selectedBabyId.birth_date) < 24 && (
              <Card style={{ backgroundColor: 'rgb(255, 182, 193)' }}>
                <CardHeader>
                  <h5 className="card-category">KMS Tinggi Badan Menurut Usia (perempuan)</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-bell-55 text-info" /> 24-60 Bulan
                  </CardTitle>
                </CardHeader>
                <CardBody>
                 <div className="chart-area" style={{ height: "500px" }}>
                    <Line
                      data={() => tbCe24.data(null, dataTabel, selectedBabyId)}
                      options={tbCe24.options}
                    />
                  </div>
                </CardBody>
              </Card>
              )}
            </Col>
            <Col lg="6">
              {calculateAge(selectedBabyId.birth_date) < 24 && (
              <Card style={{ backgroundColor: 'rgb(255, 182, 193)' }}>
                <CardHeader>
                  <h5 className="card-category">KMS Berat Badan Menurut Usia (perempuan)</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-send text-success" /> 24-60 Bulan
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area" style={{ height: "500px" }}>
                    <Line
                      data={() => bbCe24.data(null, dataTabel, selectedBabyId)}
                      options={bbCe24.options}
                    />
                  </div>
                </CardBody>
              </Card>
              )}
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <Card style={{ backgroundColor: 'rgb(255, 182, 193)' }}>
                <CardHeader>
                  <h5 className="card-category">KMS Berat Badan Menurut Tinggi Badan (perempuan)</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-bell-55 text-info" /> 0-24 Bulan
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area" style={{ height: "500px" }}>
                    <Line
                      data={() => bbtbCe0.data(null, dataTabel, selectedBabyId)}
                      options={bbtbCe0.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6">
              {calculateAge(selectedBabyId.birth_date) < 24 && (
              <Card style={{ backgroundColor: 'rgb(255, 182, 193)' }}>
                <CardHeader>
                  <h5 className="card-category">KMS Berat Badan Menurut Tinggi Badan (perempuan)</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-send text-success" /> 24-60 Bulan
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area" style={{ height: "500px" }}>
                    <Line
                      data={() => bbtbCe24.data(null, dataTabel, selectedBabyId)}
                      options={bbtbCe24.options}
                    />
                  </div>
                </CardBody>
              </Card>
              )}
            </Col>
          </Row>
          </>
        )}
      </div>
    </>
  );
}

export default PantauAnak;

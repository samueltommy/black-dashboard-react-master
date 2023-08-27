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
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar, Pie, PolarArea} from "react-chartjs-2";

import "assets/css/black-dashboard-react.css";
import maps from "assets/img/map.svg";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
  Container,
} from "reactstrap";

// core components
import {
  chartExample1,
  bbCo0,
  bbCo24,
  tbCo0,
  tbCo24,
  bbtbCo0,
  bbtbCo24,
} from "variables/charts.js";

import { useSignIn } from 'react-auth-kit'

const Dashboard = (props) =>{
  const [bigChartData, setBigChartData] = React.useState("data1");
  const setBgChartData = (name) => {
    setBigChartData(name);
  };
  const [summaryData, setSummaryData] = useState({ total_satker: 0, total_nakes: 0 });
  const [babyData, setBabyData] = useState({totalItems: 0});
  const [grafikData, setGrafikData] = useState([]);
  const signIn = useSignIn();
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
      const response = await fetch('https://staging-antro.srv.kirei.co.id/summary/faskes', config);
      const responseData = await response.json();
      console.log('Data fetched:', responseData);

      const respon = await fetch('https://staging-antro.srv.kirei.co.id/baby', config)
      const responData = await respon.json();
      console.log('Data fetched:', responData);

      const grafik = await fetch('https://staging-antro.srv.kirei.co.id/monitoring', config)
      const grafikData = await grafik.json();
      console.log('Data fetched:', grafikData);

      // Extract the total_satker and total_nakes from the response data
      const { total_satker, total_nakes } = responseData.data;
      const { totalItems } = responData.data.meta;

      // Set the summaryData state with the extracted data
      setSummaryData({ total_satker, total_nakes });
      setBabyData({totalItems});
      setGrafikData(grafikData.data.data); // Set the data array to the state

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
      <div
        className={classNames("content", { "mt-70": props.fixedNavbar })}
        style={{ paddingTop: "80px", minHeight: "100vh" }} // Added minHeight property
      >
        <Container fluid>
          <Row>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Jumlah Puskesmas</h5>
                  <CardTitle tag="h3">
                  <i className="tim-icons icon-send text-success" />{" "}
                  {summaryData.total_satker} Satuan Kerja
                  </CardTitle>
                </CardHeader>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Jumlah Nakes</h5>
                  {/* Display the total_nakes value from summaryData */}
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-send text-success" />{" "}
                    {summaryData.total_nakes} Nakes
                  </CardTitle>
                </CardHeader>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Jumlah Anak</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-send text-success" />
                    {babyData.totalItems} Anak
                  </CardTitle>
                </CardHeader>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <Card>
                <CardHeader>
                  <Row>
                    <Col className="text-left" sm="6">
                      <h5 className="card-category">
                        Jumlah Pengukuran
                      </h5>
                      <CardTitle tag="h2">
                        Visualisasi Total Pengukuran per Bulan
                      </CardTitle>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={() => chartExample1.data(null, grafikData)}
                      options={chartExample1.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <Card className="card-chart">
                <CardHeader>
                  <Row>
                    <Col className="text-left" sm="6">
                      <CardTitle tag="h2">Visualisasi per Provinsi</CardTitle>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <img src={maps} alt ="map indo" />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Dashboard;
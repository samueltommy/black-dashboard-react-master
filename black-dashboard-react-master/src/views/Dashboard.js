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
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import "assets/css/black-dashboard-react.css";
import points from "assets/img/point.png";

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
  const [satkerData, setSatkerData] = useState([]);
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

      const map = await fetch('https://staging-antro.srv.kirei.co.id/satker', config)
      const mapData = await map.json();
      console.log('Data fetched:', map);

      // Extract the total_satker and total_nakes from the response data
      const { total_satker, total_nakes } = responseData.data;
      const { totalItems } = responData.data.meta;

      // Set the summaryData state with the extracted data
      setSummaryData({ total_satker, total_nakes });
      setBabyData({totalItems});
      setGrafikData(grafikData.data.data); // Set the data array to the state
      setSatkerData(mapData.data.data);

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

  // Create a custom icon for the markers
  const customIcon = L.icon({
    iconUrl: points, // Replace with the actual path to your marker icon image
    iconSize: [25, 32], // Adjust the size of the icon
    iconAnchor: [16, 32], // Adjust the anchor point
    popupAnchor: [0, -32] // Adjust the popup anchor
  });

  return (
    <>
      <div
        className={classNames("content", { "mt-70": props.fixedNavbar })}
        style={{ paddingTop: "80px", minHeight: "100vh" }} // Added minHeight property
      >
        <Container fluid>
          <Row>
          <Col lg="4">
            <Card className="card-chart" style={{ padding: '20px' }}>
              <CardHeader>
                <h5 className="card-category">Jumlah Puskesmas</h5>
                <CardTitle
                  tag="h3"
                  style={{
                    fontSize: '35px',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <i className="tim-icons icon-send text-success" style={{ marginRight: '10px' }} />
                  {summaryData.total_satker} Satuan Kerja
                </CardTitle>
              </CardHeader>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart" style={{ padding: '20px' }}>
              <CardHeader>
                <h5 className="card-category">Jumlah Nakes</h5>
                <CardTitle
                  tag="h3"
                  style={{
                    fontSize: '35px',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <i className="tim-icons icon-send text-success" style={{ marginRight: '10px' }} />
                  {summaryData.total_nakes} Nakes
                </CardTitle>
              </CardHeader>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart" style={{ padding: '20px' }}>
              <CardHeader>
                <h5 className="card-category">Jumlah Anak</h5>
                <CardTitle
                  tag="h3"
                  style={{
                    fontSize: '35px',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <i className="tim-icons icon-send text-success" style={{ marginRight: '10px' }} />
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
                      <h3 className="card-category">
                        Jumlah Pengukuran
                      </h3>
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
                    <CardTitle tag="h2">Persebaran Satuan Kerja</CardTitle>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
              <div>
              <MapContainer
                className="map-container" // Apply the class here
                center={[-2, 118]} // Center the map around Indonesia
                zoom={5} // Set an appropriate zoom level
                style={{ height: '600px', width: '100%' }}
                zoomControl={false} // Disable zoom control
                dragging={false} // Disable dragging
                scrollWheelZoom={false}
                doubleClickZoom={false} // Disable double-click zoom
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                  {satkerData.map((facility) => (
                    <Marker
                      key={facility.id}
                      position={[parseFloat(facility.lat), parseFloat(facility.lon)]}
                      icon={customIcon} // Provide the custom icon to the marker
                    >
                      <Popup>{facility.kabupaten}</Popup>
                    </Marker>
                  ))}
                </MapContainer>
                </div>
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
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
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

import { useFormik } from "formik";
import SettingsSatkerService from "../services/settingssatker";

import { useSignIn } from 'react-auth-kit'

const SettingsSatker=() =>{
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
  
    } catch (error) {
      // Handle errors here
      console.error('An error occurred during API call.', error);
    }
  };

  const handleSubmit = async (settingsSatkerPayload) => {
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
    console.log(settingsSatkerPayload, "ini payload");
    try {
      // Next, use the accessToken to make a request to MonitorService
      const settingsSatkerResponse = await SettingsSatkerService.settingssatker(settingsSatkerPayload, config);
      const settingsSatkerData = settingsSatkerResponse.data;
      console.log(settingsSatkerData, "ini hasil monitor post");

    } catch (error) {
      console.log('An error occurred during upload.');
      console.error(error);
      
    }
  };

  useEffect(() => {
    // If the initial authentication is not done, trigger the fetchdata function
    if (!initialAuthDone) {
      fetchdata();
      setInitialAuthDone(true);
    }
  }, [initialAuthDone]);

  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      lat: "",
      lon: "",
      desa: "",
      kecamatan: "",
      kabupaten: "",
      provinsi: "",
    },
    onSubmit: handleSubmit,
  });

  return (
    <>
      <div className="content">
        <Row>
          <Col md="8">
            <Card>
              <CardHeader>
                <h5 className="title">Pengaturan Satker</h5>
              </CardHeader>
              <CardBody>
                <form onSubmit={formik.handleSubmit}>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Nama</label>
                        <Input
                          type="text"
                          className="text-input"
                          value={formik.values.name}
                          onChange={formik.handleChange}
                          name="name"
                          placeholder="Nama satker"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="5">
                      <FormGroup>
                        <label>Alamat</label>
                        <Input
                          type="text"
                          className="text-input"
                          value={formik.values.address}
                          onChange={formik.handleChange}
                          name="address"
                          placeholder="Alamat satker"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                     <Col className="px-md-1" md="5">
                      <FormGroup>
                        <label>Posisi Latitude</label>
                        <Input
                          type="text"
                          className="text-input"
                          value={formik.values.lat}
                          onChange={formik.handleChange}
                          name="lat"
                          placeholder="Posisi latitude)"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Posisi Longitude</label>
                        <Input
                          type="text"
                          className="text-input"
                          value={formik.values.lon}
                          onChange={formik.handleChange}
                          name="lon"
                          placeholder="Posisi longitude"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pl-md-1" md="5">
                      <FormGroup>
                        <label>Desa</label>
                        <Input
                          type="text"
                          className="text-input"
                          value={formik.values.desa}
                          onChange={formik.handleChange}
                          name="desa"
                          placeholder="Desa satker"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Kecamatan</label>
                        <Input
                          type="text"
                          className="text-input"
                          value={formik.values.kecamatan}
                          onChange={formik.handleChange}
                          name="kecamatan"
                          placeholder="Kecamatan satker"
                          required
                        />
                      </FormGroup>
                    </Col>
                    </Row>
                    <Row>
                    <Col className="pl-md-1" md="5">
                      <FormGroup>
                        <label>Kabupaten</label>
                        <Input
                          type="text"
                          className="text-input"
                          value={formik.values.kabupaten}
                          onChange={formik.handleChange}
                          name="kabupaten"
                          placeholder="Kabupaen satker"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Provinsi</label>
                        <Input
                          type="text"
                          className="text-input"
                          value={formik.values.provinsi}
                          onChange={formik.handleChange}
                          name="provinsi"
                          placeholder="Provinsi satker"
                          required
                        />
                      </FormGroup>
                    </Col>
                    </Row>
                    <Button className="btn-fill" color="primary" type="submit">
                      Save
                    </Button>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default SettingsSatker;

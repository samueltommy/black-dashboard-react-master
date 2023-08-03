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
import AuthService from "../services/auth";

import { useSignIn } from 'react-auth-kit'

const UserProfile=() =>{
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

  const handleSubmit = async (userPayload) => {
    fetchdata();
    console.log(userPayload, "ini payload");
    try {
      // Next, use the accessToken to make a request to MonitorService
      const monitorResponse = await MonitorService.monitor(userPayload);
      const monitorData = monitorResponse.data;
      console.log(monitorData, "ini hasil monitor request");

    } catch (error) {
      if (error.response && (error.response.status === 404 || error.response.status === 401)) {
        console.error(error);
      } else {
        // Handle other types of errors
        console.log('An error occurred during upload.');
        console.error(error);
      }
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
      baby_id: "",
      body_height: "",
      body_weight: "",
      head_circumference: "",
      arm_circumference: "",
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
                <h5 className="title">Pengisian Data Pengukuran</h5>
              </CardHeader>
              <CardBody>
                <form onSubmit={formik.handleSubmit}>
                  <Row>
                    <Col className="pr-md-1" md="5">
                        <label>ID Anak</label>
                        <Input
                          type="text"
                          className="text-input"
                          value={formik.values.baby_id}
                          onChange={formik.handleChange}
                          name="baby_id"
                          placeholder="ID anak"
                          required
                        />
                    </Col>
                  </Row>
                  <Row>
                     <Col className="px-md-1" md="5">
                      <FormGroup>
                        <label>Tinggi</label>
                        <Input
                          type="number"
                          className="number-input"
                          value={formik.values.body_height}
                          onChange={formik.handleChange}
                          name="body_height"
                          placeholder="Tinggi anak"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Berat Anak</label>
                        <Input
                          type="number"
                          className="number-input"
                          value={formik.values.body_weight}
                          onChange={formik.handleChange}
                          name="body_weight"
                          placeholder="Berat anak"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="px-md-1" md="5">
                      <FormGroup>
                        <label>Lingkar Lengan</label>
                        <Input
                          type="number"
                          className="number-input"
                          value={formik.values.arm_circumference}
                          onChange={formik.handleChange}
                          name="arm_circumference"
                          placeholder="Lingkar lengan"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="5">
                      <FormGroup>
                        <label>Lingkar Kepala</label>
                        <Input
                          type="number"
                          className="number-input"
                          value={formik.values.head_circumference}
                          onChange={formik.handleChange}
                          name="head_circumference"
                          placeholder="Lingkar kepala"
                          required
                        />
                      </FormGroup>
                    </Col>
                    </Row>
                    <Button className="login-button" type="submit">
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

export default UserProfile;

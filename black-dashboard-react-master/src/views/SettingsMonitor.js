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
import SettingsMonitorService from "../services/settingsmonitor";
import DeleteMonitorService from "../services/deletemonitor";

import { useSignIn } from 'react-auth-kit'

const SettingsMonitor=() =>{
  const signIn=useSignIn();
  const [initialAuthDone, setInitialAuthDone] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');

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

  const handleIdChange = (event) => {
    // Update the formik values
    formik.setFieldValue("id", event.target.value);
    
    // Save the ID to local storage
    localStorage.setItem("inputId", event.target.value);
    console.log(event.target.value, "id")
  };

  const handleSubmit = async (settingsMonitorPayload) => {
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
    console.log(settingsMonitorPayload, "ini payload");
    try {
      // Next, use the accessToken to make a request to MonitorService
      const settingsMonitorResponse = await SettingsMonitorService.settingsmonitor(settingsMonitorPayload, config);
      const settingsMonitorData = settingsMonitorResponse.data;
      console.log(settingsMonitorData, "ini hasil monitor post");

      if (settingsMonitorResponse.status === 201) {
        setIsSuccess(true);
        setNotificationMessage('Account edited successfully.');
        formik.resetForm(); // Reset form fields
      } else {
        setIsSuccess(false);
        setNotificationMessage('Something went wrong. Please try again.');
      }

    } catch (error) {
      console.log('An error occurred during upload.');
      console.error(error);
      setIsSuccess(false);
      setNotificationMessage('Something went wrong. Please try again.');
    }
  };

  const deleteSubmit = async () => {
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
    try {
      const deleteMonitorResponse = await DeleteMonitorService.deletemonitor(config);
      console.log('Account deleted:', deleteMonitorResponse); // Log the response if needed

      // You might want to implement additional logic after the account is deleted, such as redirecting or showing a success message.
    } catch (error) {
      console.log('An error occurred during account deletion.');
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
      first_name: "",
      last_name: "",
      nik: "",
      no_kk: "",
      date_of_birth: "",
      parent_id: "",
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
                <h5 className="title">Pengaturan Monitor</h5>
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
                    {isSuccess && (
                      <div>
                        {notificationMessage}
                      </div>
                    )}
                    {!isSuccess && notificationMessage && (
                      <div>
                        {notificationMessage}
                      </div>
                    )}
                    <Button className="btn-fill" color="primary" type="submit">
                      Save
                    </Button>
                </form>
                <Button className="btn-fill" color="danger" type="button" onClick={deleteSubmit}>
                  Delete
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default SettingsMonitor;

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
import SettingsParentService from "../services/settingsparent";
import DeleteParentService from "../services/deleteparent";

import { useSignIn } from 'react-auth-kit'

const SettingsParent=() =>{
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

  const handleSubmit = async (settingsParentPayload) => {
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
    console.log(settingsParentPayload, "ini payload");
    try {
      // Next, use the accessToken to make a request to MonitorService
      const settingsParentResponse = await SettingsParentService.settingsparent(settingsParentPayload, config);
      const settingsParentData = settingsParentResponse.data;
      console.log(settingsParentData, "ini hasil monitor post");

      if (settingsParentResponse.status === 201) {
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
      const deleteParentResponse = await DeleteParentService.deleteparent(config);
      console.log('Account deleted:', deleteParentResponse); // Log the response if needed

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
      relation: "",
      contact: "",
      nik: "",
      no_kk: "",
      address: "",
      date_of_birth: "",
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
                <h5 className="title">Pengaturan Orangtua</h5>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md="12">
                    <FormGroup>
                      <label>ID</label>
                        <Input
                          type="text"
                          className="text-input"
                          value={formik.values.id}
                          onChange={handleIdChange}
                          name="id"
                          placeholder="Enter ID"
                          required
                        />
                      </FormGroup>
                  </Col>
                </Row>
                <form onSubmit={formik.handleSubmit}>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Nama Depan</label>
                        <Input
                          type="text"
                          className="text-input"
                          value={formik.values.first_name}
                          onChange={formik.handleChange}
                          name="first_name"
                          placeholder="Nama depan"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="5">
                      <FormGroup>
                        <label>Nama Belakang</label>
                        <Input
                          type="text"
                          className="text-input"
                          value={formik.values.last_name}
                          onChange={formik.handleChange}
                          name="last_name"
                          placeholder="Nama belakang"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                     <Col className="px-md-1" md="5">
                      <FormGroup>
                        <label>Relasi</label>
                        <Input
                          type="text"
                          className="text-input"
                          value={formik.values.relation}
                          onChange={formik.handleChange}
                          name="relation"
                          placeholder="Relasi dengan anak (m/f/o)"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Nomor Telepon</label>
                        <Input
                          type="text"
                          className="text-input"
                          value={formik.values.contact}
                          onChange={formik.handleChange}
                          name="contact"
                          placeholder="Nomor telepon orang tua"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="10">
                      <FormGroup>
                        <label>NIK</label>
                        <Input
                          type="text"
                          className="text-input"
                          value={formik.values.nik}
                          onChange={formik.handleChange}
                          name="nik"
                          placeholder="NIK"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pl-md-1" md="5">
                      <FormGroup>
                        <label>No. Kartu Keluarga</label>
                        <Input
                          type="text"
                          className="text-input"
                          value={formik.values.no_kk}
                          onChange={formik.handleChange}
                          name="no_kk"
                          placeholder="No. kartu keluarga"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Alamat</label>
                        <Input
                          type="text"
                          className="text-input"
                          value={formik.values.address}
                          onChange={formik.handleChange}
                          name="address"
                          placeholder="Alamat"
                        />
                      </FormGroup>
                    </Col>
                    </Row>
                    <Row>
                    <Col className="pl-md-1" md="5">
                      <FormGroup>
                        <label>Tanggal Lahir</label>
                        <Input
                          type="text"
                          className="text-input"
                          value={formik.values.date_of_birth}
                          onChange={formik.handleChange}
                          name="date_of_birth"
                          placeholder="Tanggal lahir"
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
                {/* Delete Button */}
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

export default SettingsParent;

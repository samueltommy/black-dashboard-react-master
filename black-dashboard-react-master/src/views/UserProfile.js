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
import React from "react";

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

function UserProfile() {
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
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Nama Anak</label>
                        <Input
                          placeholder="Masukkan nama lengkap anak..."
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="5">
                      <FormGroup>
                        <label>NIK Anak</label>
                        <Input
                        placeholder="Masukkan 16 digit NIK anak..."
                        type="email" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                     <Col className="px-md-1" md="5">
                      <FormGroup>
                        <label>Tanggal Lahir</label>
                        <Input
                          placeholder="Masukkan tanggal lahir anak dalam format DD-MM-YY..."
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Tanggal Pemeriksaan</label>
                        <Input
                          placeholder="Masukkan tanggal pemeriksaan terakhir anak dalam format DD-MM-YY..."
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="10">
                      <FormGroup>
                        <label>Username</label>
                        <Input
                          placeholder="Masukkan username baru untuk pergantian username..."
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pl-md-1" md="5">
                      <FormGroup>
                        <label>Berat Badan</label>
                        <Input
                          placeholder="Masukkan berat badan anak dalam kg..."
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Tinggi Badan</label>
                        <Input
                          placeholder="Masukkan tinggi badan anak dalam cm..."
                          type="number"
                        />
                      </FormGroup>
                    </Col>
                    </Row>
                    <Row>
                    <Col className="px-md-1" md="5">
                      <FormGroup>
                        <label>Lingkar Lengan</label>
                        <Input
                          placeholder="Masukkan lingkar lengan anak dalam cm..."
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="5">
                      <FormGroup>
                        <label>Lingkar Kepala</label>
                        <Input
                        placeholder="Masukkan lingkar kepala anak dalam cm..."
                        type="number" />
                      </FormGroup>
                    </Col>
                    </Row><Row>
                    <Col className="pl-md-1" md="5">
                      <FormGroup>
                        <label>Vaksinasi yang Diberikan</label>
                        <Input
                        placeholder="Masukkan vaksinasi yang telah diterima anak..."
                        type="number" />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="5">
                      <FormGroup>
                        <label>Obat yang Diberikan </label>
                        <Input
                        placeholder="Masukkan preskribsi yang telah diterima anak..."
                        type="number" />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit">
                  Save
                </Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default UserProfile;

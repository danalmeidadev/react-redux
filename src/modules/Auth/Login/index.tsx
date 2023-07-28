import React from 'react';
import { Button, Card, Col, Row, Form, Alert } from 'react-bootstrap';
import { Formik } from 'formik';
import { UserData } from './types';
import { schemaResolver } from './validation';
import { loginUser } from '../../../store/auth/auth.actions';
import { useDispatch, useSelector } from 'react-redux';


export default function Login() {
  const dispatch = useDispatch();

  const {  error } = useSelector((state: any) => ({
    user: state,
    loading: state.Auth.loading,
    error: state.Auth.error,
    userLoggedIn: state.Auth.userLoggedIn,
  }));

  const handleLogin = (formData: UserData) => {
    dispatch(loginUser(formData["email"], formData["password"]));
  };

  return (
    <>
      <div className="page">
        <div className="page-content">
          <div className="container">
            <Row>
              <div className="col mx-auto mt-5">
                <div className="row justify-content-center">
                  <Col md={7} lg={5} xl={4} className="col-md-7 col-lg-5 col-xl-4">
                    <Row>
                      <Col xl={12} md={12}>
                        <Card>
                          <Card.Body>
                            <div className="text-center mb-3">
                              <h1 className="mb-2">Portal</h1>
                              {error && (
                                <Alert variant="light-danger" className="my-2">
                                  {error}
                                </Alert>
                              )}
                            </div>
                            <Formik
                              validationSchema={schemaResolver}
                              onSubmit={(values: any) => handleLogin(values)}
                              initialValues={{
                                email: '',
                                password: '',
                              }}
                            >
                              {({
                                handleSubmit,
                                handleChange,
                                handleBlur,
                                values,
                                touched,
                                isValid,
                                errors,
                              }) => (
                                <Form noValidate onSubmit={handleSubmit} className="mt-5">

                                  <Col md={12}>
                                    <Form.Label htmlFor="validationServer03" className="form-label">Email</Form.Label>
                                    <Form.Control
                                      type="text"
                                      className={errors.email && "form-control is-invalid"}
                                      placeholder="Informe seu email"
                                      name="email"
                                      value={values.email}
                                      onChange={handleChange('email')}
                                    />
                                    {errors.email && (
                                      <div className="invalid-feedback">
                                        Campo obrigatório
                                      </div>
                                    )}
                                  </Col>
                                  <Col md={12} className='mb-3'>
                                    <Form.Label htmlFor="validationServer03" className="form-label">Senha</Form.Label>
                                    <Form.Control
                                      type="text"
                                      className={errors.password && "form-control is-invalid"}
                                      placeholder="Informe sua senha"
                                      name="email"
                                      value={values.password}
                                      onChange={handleChange('password')}
                                    />
                                    {errors.password && (
                                      <div className="invalid-feedback">
                                        Campo obrigatório
                                      </div>
                                    )}
                                  </Col>
                                  <Form.Group className="form-group text-center mb-3">
                                    <Button className="btn  w-100 br-7 btn-primary" type="submit">Entrar</Button>
                                  </Form.Group>
                                </Form>
                              )}
                            </Formik>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                    <div className="text-center register-icons">
                      <div className="small text-white mb-4">Login with</div>
                      <Button className="btn bg-white-50  text-white-50 font-weight-semibold w-12 google me-2" variant=''
                        type="button"><i className="fa fa-google"></i></Button>
                      <Button
                        className="btn bg-white-50  text-white-50 font-weight-semibold  w-12 facebook me-2" variant=''
                        type="button"><i className="fa fa-facebook-f"></i></Button>
                      <Button
                        className="btn bg-white-50  text-white-50 font-weight-semibold w-12 twitter me-2" variant=''
                        type="button"><i className="fa fa-twitter"></i></Button>
                    </div>
                  </Col>
                </div>
              </div>
            </Row>
          </div>
        </div>
      </div>
    </>

  )
}
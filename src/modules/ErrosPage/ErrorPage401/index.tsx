import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function ErrorPage401() {
  const handleGoBack = () => {
    window.history.go(-1)
  };
  return (
    <>
      <div className="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="page">
        <div className="page-content">
          <div className="container text-center">
            <Row>
              <Col md={12}>
                <div className="mt-lg-7">
                  <div className="text-white">
                    <div className="fs-100  mb-5 font-weight-normal h1 error-text"><i className="fa fa-frown-o"></i>Oops!</div>
                    <h1 className="h3  mb-3 font-weight-bold">Desculpe, página solicitada não encontrada!</h1>
                    <p className="h5 font-weight-normal mb-7 leading-normal">Você pode ter digitado errado o endereço ou a página pode ter sido movida.</p>
                    <Link className="btn btn-light text-primary mb-5 fs-18" to="#">Ajuda</Link>
                    <Button className="btn text-light border-light mb-5 ms-2 fs-18" onClick={handleGoBack}>Voltar</Button>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  )
}
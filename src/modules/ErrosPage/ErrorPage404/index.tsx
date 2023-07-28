import React from 'react';
import { Row, Col, Card, Container, Button } from "react-bootstrap";
import ghostSvg from "../../../assets/images/error.svg";
import { Link } from 'react-router-dom';


export function ErrorPage404() {
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
                <div>
                  <div className="text-primary">
                    <div className="display-1 mb-5 font-weight-bold error-text">404</div>
                    <h1 className="h3  mb-3 font-weight-bold">Desculpe, ocorreu um erro, a página solicitada não foi encontrada!</h1>
                    <p className="h5 font-weight-normal mb-7 leading-normal">Você pode ter digitado errado o endereço ou a página pode ter sido movida.</p>
                    <Link className="btn btn-primary text-light mb-5 fs-18" to="#">Ajuda</Link>
                    <Button className="btn text-primary border-primary mb-5 ms-2 fs-18" onClick={handleGoBack} >Voltar</Button>
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
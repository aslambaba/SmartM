import React from "react";
import MainMenu from "../components/MainMenu";
import { Container, Row, Col } from "react-bootstrap";
import AddClass from "../components/Classes/Addclass";
import ClassComponent from "../components/Classes/ClassComponent";

import "./style/classesstyle.css";

import { Link, useRouteMatch } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { GetClasses } from "../../queries/classquery";

function Classes() {
  let { url } = useRouteMatch();

  let { loading, error, data } = useQuery(GetClasses);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  let classes = data.getClasses;
  let classData = "1";
  return (
    <div>
      <MainMenu />
      <div className="ClassesConatiner">
        <Row>
          <Col lg={10} md={10} sm={8} xs={8}>
            <h1>TimeTable</h1>
          </Col>
          <Col lg={2} md={2} sm={4} xs={4}>
            <AddClass />
          </Col>
        </Row>
        <Row>
          <Col lg={4} md={4} sm={6} xs={6}>
            <Link to={`${url}/aa`}>
              <ClassComponent name="a" />
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Classes;

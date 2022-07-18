/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { Badge } from "react-bootstrap";
import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { fetchFormApi } from "../../Redux/Missions";

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);
  useEffect(() => {
    dispatch(fetchFormApi());
  }, [dispatch]);
  return (
    <Container className="rockets-container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>
          {missions.map(({
            id, name, description, joined,
          }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{description}</td>
              <td>
                {joined && <Badge>Active Member</Badge>}
                {!joined && <Badge>NOT A MEMBER</Badge>}
              </td>
              <td>
                {joined && <Button>Leave Mission</Button>}
                {!joined && <Button>Join Mission</Button>}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Missions;

/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { fetchMissions, joinMission, leaveMission } from "../../Redux/Missions";

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);

  useEffect(() => {
    if (!missions.length) {
      dispatch(fetchMissions);
    }
  }, []);

  const joinMissionHandler = (id) => dispatch(joinMission(id));
  const leaveMissionHandler = (id) => dispatch(leaveMission(id));

  return (
    <Container fluid="true" className="missions-container">
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>{"  "}</th>
          </tr>
        </thead>
        <tbody>
          {missions.map(({
            id, name, description, reserved,
          }) => (
            <tr key={id} className="table-content">
              <td>
                <p className="fw-bold content-color">{name}</p>
              </td>
              <td>
                <p className="content-color">{description}</p>
              </td>
              <td className="align-middle">
                {reserved && <Badge bg="success">Active Member</Badge>}
                {!reserved && <Badge bg="secondary">NOT A MEMBER</Badge>}
              </td>
              <td className="col-2 align-middle text-center">
                {reserved && (
                <Button
                  size="sm"
                  variant="danger"
                  onClick={() => leaveMissionHandler(id)}
                >
                  Leave Mission
                </Button>
                )}
                {!reserved && (
                <Button
                  size="sm"
                  variant="primary"
                  onClick={() => joinMissionHandler(id)}
                >
                  Join Mission
                </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Missions;

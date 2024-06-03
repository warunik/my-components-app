import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import ButtonCard from "./components/reactstrap/ButtonCard";
import { Container, Row, Col } from "reactstrap";

const App: React.FC = () => {
    return(
        <div>
            <Container>
              <Row>
                <Col>
                  <ButtonCard
                  type="card1"
                  image="https://via.placeholder.com/213x167"
                  title="My"
                  subtitle="Calendar"
                  icon={<FaCalendarAlt />}
                  link="#"
                  />
                </Col>
                <Col>
                  <ButtonCard
                  type="card2"
                  image="https://via.placeholder.com/213x167"
                  title="My"
                  subtitle="Calendar"
                  icon={<FaCalendarAlt />}
                  link="#"
                  />
                </Col>
                <Col>
                  <ButtonCard
                  type="card3"
                  image="https://via.placeholder.com/213x167"
                  title="My"
                  subtitle="Calendar"
                  icon={<FaCalendarAlt />}
                  link="#"
                  />
                </Col>
              </Row>
            </Container>            
        </div>
    );
    
}

export default App;


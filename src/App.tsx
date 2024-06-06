import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import ButtonCard from "./components/reactstrap/ButtonCard";
import { Container, Row, Col } from "reactstrap";
import IconComponent from "./components/reactstrap/IconComponent";


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
              <Row>
                <IconComponent icon="https://example.com/icon.png" label="24/7 Hotline" link="https://example.com"/>
                <IconComponent icon="https://example.com/icon.png" label="Online Consultation" link="https://example.com"/>
                <IconComponent icon="https://example.com/icon.png" label="Home Visits" link="https://example.com"/>
                <IconComponent icon="https://example.com/icon.png" label={<><span>Scan QR</span><br /><span>Code</span></>} link="https://example.com"/>
                <IconComponent icon="https://example.com/icon.png" label="Get Reports" link="https://example.com"/>
              </Row>
            </Container>            
        </div>
    );
    
}

export default App;


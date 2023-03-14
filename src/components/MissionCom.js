import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const MissionCom = () => {
  return (
    //this container element looks great on mobile but not so much on desktop view, check before deployment.
    <Container>
      <Row lg={2} md={1} sm={1} xs={1} className="mb-5 my-5 mission-container">
        <Col className="mb-4">
          <div className="missionDesBackground">
            <img
              className="mission-image1"
              src="rescue-repeat-logo.jpeg"
              alt="Image of human society "
            ></img>
            <img
              className="my-3 mission-image2"
              src="https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/287636126_310571657955815_1893965043947604716_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_ohc=N-vfPuO1MT0AX9s5XG8&_nc_ht=scontent-ord5-2.xx&oh=00_AfBZGH81ft3Vc1onDM6lnaz1VPOVwO-h4hUwT-7pMyGTSg&oe=6412E05D"
              alt="another-humansociety-img"
            />
          </div>
        </Col>
        <Col className="mb-4">
          <div className="missionDesMaroon">
            <div className="missionDesMaroon-content">
              <h1>The Mission</h1>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                The safety of other animals is very important. With your
                purchase, you get to help organizations like Rescue Release
                Repeat who share the same values and also dedicate all their
                resources and time to give domestic and wildlife a second chance
                at life.
              </motion.p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MissionCom;

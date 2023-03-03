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
              src="https://newscdn2.weigelbroadcasting.com/kpTfu-1670280235-242945-blog-Humane-society-st-joseph-county.jpg"
              alt="Image of human society "
            ></img>
            <img
              className="my-3 mission-image2"
              src="https://www.gannett-cdn.com/presto/2021/08/20/NSBT/f7014ae3-1388-4aa2-9577-20e6f4a2dc1c-riverdog08202021_03.jpg"
              alt="another-humansociety-img"
            />
          </div>
        </Col>
        <Col className="mb-4">
          <div className="missionDesMaroon">
            <h1>Our Mission</h1>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est
              laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est
              laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </motion.p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MissionCom;

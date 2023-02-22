import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const MissionCom = () => {
  return (
    //this container element looks great on mobile but not so much on desktop view, check before deployment.
    <Container>
      <Row lg={2} md={2} sm={1} xs={1} className="mb-5 my-5 mission-container">
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
            <h1>Maroon Title</h1>
            <p>
              "On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment, so blinded by desire, that they cannot
              foresee the pain and trouble that are bound to ensue; and equal
              blame belongs to those who fail in their duty through weakness of
              will, which is the same as saying through shrinking from toil and
              pain. These cases are perfectly simple and easy to distinguish. In
              a free hour, when our power of choice is untrammelled and when
              nothing prevents our being able to do what we like best, every
              pleasure is to be welcomed and every pain avoided. But in certain
              circumstances and owing to the claims of duty or the obligations
              of business it will frequently occur that pleasures have to be
              repudiated and annoyances accepted. The wise man therefore always
              holds in these matters to this principle of selection: he rejects
              pleasures to secure other greater pleasures, or else he endures
              pains to avoid worse pains."
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );

  {
    /* <div className="missionDesBackground">
      <img src=""></img>
      <div className="missionDesMaroon">
        <h2 style={{ margin: "10% 40%", color: "white" }}>Our Mission</h2>
        <p style={{ textAlign: "center", color: "white", padding: "50px" }}>
          This i sjust dummy text until we can get the mission text composed,
          "On the other hand, we denounce with righteous indignation and dislike
          men who are so beguiled and demoralized by the charms of pleasure of
          the moment, so blinded by desire, that they cannot foresee the pain
          and trouble that are bound to ensue; and equal blame belongs to those
          who fail in their duty through weakness of will, which is the same as
          saying through shrinking from toil and pain. These cases are perfectly
          simple and easy to distinguish. In a free hour, when our power of
          choice is untrammelled and when nothing prevents our being able to do
          what we like best, every pleasure is to be welcomed and every pain
          avoided. But in certain circumstances and owing to the claims of duty
          or the obligations of business it will frequently occur that pleasures
          have to be repudiated and annoyances accepted. The wise man therefore
          always holds in these matters to this principle of selection: he
          rejects pleasures to secure other greater pleasures, or else he
          endures pains to avoid worse pains."
        </p>
      </div>
    </div>
  ); */
  }
};

export default MissionCom;

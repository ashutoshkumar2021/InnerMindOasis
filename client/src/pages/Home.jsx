import ControlledCarousel from "../components/ControlledCarousel";
import NavigationBar from "../components/NavigationBar";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavLink } from "react-router-dom";
import feature1 from "../assets/typing.svg";
import feature2 from "../assets/calendar.svg";
import feature3 from "../assets/reading.svg";
import feature4 from "../assets/meditation.svg";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../contexts/UserAuthContext";
import header_image from "../assets/header_image.jpg";

const Home = ({ testimonies }) => {
  const { user } = useUserAuth();
  let navigate = useNavigate();

  let goSignUp = () => {
    navigate("/signup");
  };

  return (
    <div className="home-page">
      <NavigationBar />
      <div className="header">
        <Container className="header-container">
          <Row>
            <Col xs="12" lg="6" className="header-text">
              <h1 className="header-brand"><br/>InnerMind Oasis</h1>
              <p className="header-motto">
              Your  mentalLift  Central  for  InnerBalance Avenue
              </p>
              {user ? (
                <Button
                  style={{ marginLeft: 10 }}
                  onClick={() => {
                    navigate("/dashboard/write-new");
                  }}
                >
                  Dashboard
                </Button>
              ) : (
                <div className="header-buttons">
                  <Button
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    Log In
                  </Button>
                  <Button style={{ marginLeft: 10 }} onClick={goSignUp}>
                    Sign Up
                  </Button>
                </div>
              )}
            </Col>
            <Col xs="12" lg="6" className="d-flex justify-content-end align-items-center">
              <img
                src={header_image}
                className="header-image"
                alt="header-illustration"
              />
            </Col>
          </Row>
        </Container>
      </div>
      <section className="features">
        <h2>Features</h2>
        <Row className="features-list">
          <Col md="6" lg="3">
            <img src={feature1} alt="feature_1" className="feature-image" />
            <h3>Write</h3>
            <p>
              Keep a record of your daily journal entries which either be set
              private or public based on your selection.
            </p>
          </Col>
          <Col md="6" lg="3">
            <img src={feature2} alt="feature_2" className="feature-image" />
            <h3>Track</h3>
            <p>
              Track your mood throughout the month or year maintained on a
              calendar so you can know what affects you.
            </p>
          </Col>
          <Col md="6" lg="3">
            <img
              src={feature3}
              alt="feature_3"
              className="feature-image"
              style={{ marginTop: 60, marginBottom: 60 }}
            />
            <h3>Explore</h3>
            <p>
              Read and comment on other public journals sharing your insights
              and help.
            </p>
          </Col>
          <Col md="6" lg="3">
            <img src={feature4} alt="feature_4" className="feature-image" />
            <h3>Relax</h3>
            <p>
              Try out meditation and other relaxation methods to relieve that
              stress and anxiety of yours.
            </p>
          </Col>
        </Row>
      </section>
      <section className="testimonials">
        <ControlledCarousel testimonies={testimonies} />
      </section>
      <section className="contact-section">
        <Container>
          <Row className="d-flex justify-content-center align-items-center" style={{ height: "30vh" }}>
            <Col xs="12" md="6" className="contact-section-text text-center">
              <h5>
                Have any queries, suggestions or complaints?<br></br>Reach out
                to us.
              </h5>
              <Button
                onClick={() => {
                  navigate("/contact-us");
                }}
              >
                Contact Us
              </Button>
            </Col>
          </Row>
        </Container>
      </section>


    </div>
  );
};

export default Home;

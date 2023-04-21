import { Container, Row, Col, Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";
import "./App.css";

function App() {

  const [answer, setAnswer] = useState("")
  const [audio, setAudio] = useState(null);
  const [isRight, setIsRight] = useState(null);
  const [response, setResponse] = useState("")

  function answerChangeHandler(value) {

    setAnswer(() => (value));

  }

  function submitAnswerHandler() {

    switch (answer) {

      case "stinky":
      case "stink":
        import("./correct.mp3").then((audioModule) => {
          const audioFile = audioModule.default;
          const newAudio = new Audio(audioFile);
          setAudio(newAudio);
        })
        setIsRight(true);
        break;
      case "beautiful":
        import("./youarea10.mp3").then((audioModule) => {
          const audioFile = audioModule.default;
          const newAudio = new Audio(audioFile);
          setAudio(newAudio);
        })
        setIsRight(false);
        break;
      case "ugly":
        import("./youareugly.mp3").then((audioModule) => {
          const audioFile = audioModule.default;
          const newAudio = new Audio(audioFile);
          setAudio(newAudio);
        })
        setIsRight(false);
        break;
      case "sexy":
        import("./cockyhuh.mp3").then((audioModule) => {
          const audioFile = audioModule.default;
          const newAudio = new Audio(audioFile);
          setAudio(newAudio);
        })
        setIsRight(false);
        break;
      case "girlfriend":
      case "wife":
        import("./ohgodno.mp3").then((audioModule) => {
          const audioFile = audioModule.default;
          const newAudio = new Audio(audioFile);
          setAudio(newAudio);
        })
        setIsRight(false);
        break;
      case "bad":
        import("./bad.mp3").then((audioModule) => {
          const audioFile = audioModule.default;
          const newAudio = new Audio(audioFile);
          setAudio(newAudio);
        })
        setIsRight(false);
        break;
      case "good":
        import("./good.mp3").then((audioModule) => {
          const audioFile = audioModule.default;
          const newAudio = new Audio(audioFile);
          setAudio(newAudio);
        });
        setIsRight(false);
        break;
      default:
        import("./pathetic.mp3").then((audioModule) => {
          const audioFile = audioModule.default;
          const newAudio = new Audio(audioFile);
          setAudio(newAudio);
        });
        setIsRight(false);
        break;

    }

  }

  useEffect(() => {

    if (audio) {
      audio.play();
    }

    if (isRight) {

      setResponse(() => ("Yay! you got it right!"));

    } else if (isRight === false) {

      setResponse(() => ("u stink ate"));

    }

  }, [audio, isRight])



  return (
    <Container fluid style={{height: "100%", width: "100%", backgroundColor: "#FEE8B0"}}>
      <Row style={{height: "20%"}}>
        {
          audio ? <audio autoPlay><source src={audio}></source></audio> : null
        }
      </Row>
      <Row>
        <Col lg={4}></Col>
        <Col lg={4} style={{backgroundColor: "#F97B22", padding: "5%"}}>
          <h1 style={{textAlign: "center"}}>Hello Camille!</h1>
          <p>Please prove yourself to be my favorite ate camille by completing the sentence below.</p>
          <Form>
            <Form.Label>ate camille, u</Form.Label>
            <Form.Control placeholder="what are you ate" onChange={(e) => {answerChangeHandler(e.target.value.toLowerCase())}}></Form.Control>
            <Button type="submit" variant="primary" onClick={(e) => {e.preventDefault(); submitAnswerHandler()}}>Submit</Button>
          </Form>
          { response ? <p>{response}</p> : null}
        </Col>
        <Col lg={4}></Col>
      </Row>
      <Row style={{height: "20%"}}></Row>
    </Container> 
  );
}

export default App;

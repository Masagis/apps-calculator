import React, { useState } from "react";
import {
  Container,
  Col,
  Card,
  CardBody,
  Form,
  FormGroup,
  Row,
  Input,
  Button,
} from "reactstrap";

const Calculate = (props) => {

  const [first, setFirst] = useState({ value: null, checked: false });
  const [second, setSecond] = useState({ value: null, checked: false });
  const [third, setThird] = useState({ value: null, checked: false });
  const [total, setTotal] = useState(0);
  const [error, setError] = useState("");

  const Sum = (e) => {
    const value = [];
    if (first.checked) {
      value.push(first.value);
    }
    if (second.checked) {
      value.push(second.value);
    }
    if (third.checked) {
      value.push(third.value);
    }

    if (value.length <= 1) {
      setError("Please, Checklist and input the value");
      setTimeout(() => {
        setError(null);
      }, 3000);
    } else {
      switch (e) {
        case "plus":
          plus(value)
          break;
        case "minus":
          minus(value);
          break;
        case "devided":
          devided(value);
          break;
        case "times":
          times(value);
          break;
        default:
          break;
      }
    }
  };

  const plus = (value) => {
    let total = +value[0];
    for (let i = 1; i < value.length; i++) {
      total += +value[i];
    }
    setTotal(total);
  };
  const minus = (value) => {
    let total = +value[0];
    for (let i = 1; i < value.length; i++) {
      total -= +value[i];
    }
    setTotal(total);
  };
  const times = (value) => {
    let total = +value[0];
    for (let i = 1; i < value.length; i++) {
      total *= +value[i];
    }
    setTotal(total);
  };
  const devided = (value) => {
    let total = +value[0];
    for (let i = 1; i < value.length; i++) {
      total /= +value[i];
    }
    setTotal(total);
  };

  return (
    <Container className="App">
      <Col sm="12" md={{ size: 6, offset: 3 }}>
        <Card className="mt-5">
          <CardBody>
          <h1 className="text-center mb-4">{props.title}</h1>
            <Form>
              <FormGroup className="form-group">
                <Row>
                  <Col sm="11">
                    <Input
                      type="number"
                      className="input-form btn-block"
                      onChange={(e) =>
                        setFirst({ ...first, value: e.target.value })
                      }
                      value={first.value}
                      placeholder="Value 1"
                    />
                  </Col>
                  <Col className="ml-2">
                    <Input
                      type="checkbox"
                      checked={first.checked}
                      onChange={(e) =>
                        setFirst({ ...first, checked: !first.checked })
                      }
                    />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup className="form-group">
                <Row>
                  <Col sm="11">
                    <Input
                      type="number"
                      className="input-form btn-block"
                      onChange={(e) =>
                        setSecond({ ...second, value: e.target.value })
                      }
                      value={second.value}
                      placeholder="Value 2"
                    />
                  </Col>
                  <Col className="ml-2">
                    <Input
                      type="checkbox"
                      checked={second.checked}
                      onChange={(e) =>
                        setSecond({ ...second, checked: !second.checked })
                      }
                    />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup className="form-group">
                <Row>
                  <Col sm="11">
                    <Input
                      type="number"
                      className="input-form btn-block"
                      onChange={(e) =>
                        setThird({ ...third, value: e.target.value })
                      }
                      value={third.value}
                      placeholder="Value 3"
                    />
                  </Col>
                  <Col className="ml-2">
                    <Input
                      type="checkbox"
                      checked={third.checked}
                      onChange={(e) =>
                        setThird({ ...third, checked: !third.checked })
                      }
                    />
                  </Col>
                </Row>
              </FormGroup>
              <hr/>
              <div>
                <Row>
                  <Col sm="3">
                    <Button color="primary" className="btn-block" onClick={Sum.bind(this, "plus")}><b>+</b></Button>
                  </Col>
                  <Col sm="3">
                    <Button color="primary" className="btn-block" onClick={Sum.bind(this, "minus")}><b>-</b></Button>
                  </Col>
                  <Col sm="3">
                    <Button color="primary" className="btn-block" onClick={Sum.bind(this, "devided")}><b>/</b></Button>
                  </Col>
                  <Col sm="3">
                    <Button color="primary" className="btn-block" onClick={Sum.bind(this, "times")}><b>*</b></Button>
                  </Col>
                </Row>
              </div>
              <hr/>
              <h2 className="text-center">= {total}</h2>
              <hr/>
              {error && <h3 className="text-center" color="danger">{error}</h3>}
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Container>
  );
}
export default Calculate;
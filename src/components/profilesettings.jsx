import React from "react";
import {From, Button, Form, Row, Col} from "react-bootstrap";

function ProfileSettings(props) {
    const user = props.user;

    return (
        <div className="d-flex flex-column align-items-center container flex-wrap">
        <h1>Settings</h1>
        <form>
            <Form.Group className="mt-3 mb-3">
                <Form.Label className="display-6">Your Email</Form.Label>
                <Form.Control type="email" placeholder={user.email}></Form.Control>
                <Form.Text>We will never share your email with anyone</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
                <Row className="d-flex flex-row">
                    <Col>
                        <img src={user.picture} />
                    </Col>
                    <Col>
                        <h1 className="display-6">Your Avatar</h1>
                    </Col>
                </Row>
                <Row>
                <input type="file" placeholder="Avatar" />
                <Form.Text>Place your pretty face here</Form.Text>
                </Row>
                
            </Form.Group>
            <div className="container d-flex justify-content-center">
                <Button variant="success" type="submit" className="align-self-center">
                Submit changes
            </Button></div>
            

        </form>
        </div>
    )
}

export default ProfileSettings;
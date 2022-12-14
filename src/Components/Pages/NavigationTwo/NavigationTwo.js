import React, { useRef, useState } from "react";
import { Button, Container, Form, Modal, Nav, Navbar } from "react-bootstrap";
import { toast } from "react-toastify";
import useFetch from "../../../Hooks/useFetch/useFetch";

const NavigationTwo = () => {
    const { postMethod } = useFetch();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const amountRef = useRef();

    const handFormSubmit = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const phone = phoneRef.current.value;
        const amount = amountRef.current.value;
        console.log({ name, email, phone, amount });
        const data = { name, email, phone, amount };

        postMethod("https://phero-task-server.herokuapp.com/api/allBiills", setShow, data, e);
    };

    return (
        <div>
            <Navbar bg="secondary" expand="lg" className="my-5">
                <Container>
                    <Navbar.Brand className="text-light">Billings</Navbar.Brand>
                    <Navbar.Brand>
                        <form className="d-flex" role="search">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button className="btn btn-danger" type="submit">
                                Search
                            </button>
                        </form>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Button variant="light" onClick={handleShow}>
                                Add new bill
                            </Button>

                            <Modal
                                show={show}
                                onHide={handleClose}
                                backdrop="static"
                                keyboard={false}
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title>Add Bill Form</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <>
                                        <Form onSubmit={handFormSubmit}>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>Full Name</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter Full Name"
                                                    ref={nameRef}
                                                    required
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>Email address</Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    placeholder="Enter email"
                                                    ref={emailRef}
                                                    required
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>Phone Number</Form.Label>
                                                <Form.Control
                                                    type="tel"
                                                    placeholder="Enter valid phone number"
                                                    ref={phoneRef}
                                                    maxLength="11"
                                                    pattern="[0-9]{11}"
                                                    required
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>Paid Ammount</Form.Label>
                                                <Form.Control
                                                    type="number"
                                                    placeholder="paid ammount"
                                                    ref={amountRef}
                                                    required
                                                />
                                            </Form.Group>

                                            <Button variant="secondary" onClick={handleClose}>
                                                Close
                                            </Button>

                                            <Button
                                                variant="primary"
                                                type="submit"
                                                className="ms-2"
                                            >
                                                Submit
                                            </Button>
                                        </Form>
                                    </>
                                </Modal.Body>
                            </Modal>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationTwo;

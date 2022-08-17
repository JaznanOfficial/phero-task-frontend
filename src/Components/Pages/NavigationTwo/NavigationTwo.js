import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

const NavigationTwo = () => {
    return (
        <div>
            <Navbar bg="secondary" expand="lg" className="my-5">
                <Container>
                    <Navbar.Brand className="text-light">Billings</Navbar.Brand>
                    <Navbar.Brand>
                        <form class="d-flex" role="search">
                            <input
                                class="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button class="btn btn-danger" type="submit">
                                Search
                            </button>
                        </form>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Button variant="light" size="lg">
                                Add New Bill
                            </Button>{" "}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationTwo;

import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import useFetch from "../../Hooks/useFetch/useFetch";

const Navigation = () => {
    const { data, getMethod } = useFetch();
    const [total, setTotal] = useState(0);

    useEffect(() => {
        getMethod("https://phero-task-server.herokuapp.com/api/allBills");
        console.log(data);

        let totalAmount = 0;
        data.forEach((bill) => {
            const totalNumber = (totalAmount += parseInt(bill.amount));
            console.log(totalNumber);
            setTotal(totalNumber);
        });
    }, [getMethod, data]);

    // const [total, setTotal] = useState(0);
    // const [bills, setBills] = useState([]);
    // const totalAmount = [];

    // useEffect(() => {
    //     fetch("https://phero-task-server.herokuapp.com/api/allBills")
    //         .then((res) => res.json())
    //         .then((data) => {
    //             let totalAmount = 0;
    //             data.forEach((bill) => {
    //                 // console.log(bill.amount);
    //                 const totalNumber = (totalAmount += parseInt(bill.amount));
    //                 setTotal(totalNumber);
    //                 console.log(total);
    //             });
    //         });
    // }, [total]);

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCUEwts4uoA2Zk4uGFSWayTNfoLgraSoxF2g&usqp=CAU"
                        width="80"
                        height="80"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Container>
                            <h3 className="text-light">Total Paid: {total} </h3>
                        </Container>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;

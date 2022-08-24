import React, { useEffect, useRef, useState } from "react";
import { Button, Form, Modal, Table } from "react-bootstrap";
import useFetch from "../../../Hooks/useFetch/useFetch";
import "./DataTable.css";

const DataTable = () => {
    // const [bills, setBills] = useState([]);

    // const { data } = useFetch("https://phero-task-server.herokuapp.com/api/allBills");
    // console.log(data);
    const { deleteMethod, data, getMethod, putMethod } = useFetch();
    const [modalData, setModalData] = useState();

    const deleteHandler = (id) => {
        console.log(id);
        window.confirm("Are you sure you want to delete this bill?");
        deleteMethod(`https://phero-task-server.herokuapp.com/api/deleteBill/${id}`, id, data);
    };

    // delete method--------------------------->
    // useEffect(() => {
    getMethod("https://phero-task-server.herokuapp.com/api/allBills");
    // },[])

    // get method------------------------------->

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (bill) => {
        setShow(true);
        setModalData(bill);
        console.log(modalData);
    };
    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const amountRef = useRef();
    const idRef = useRef();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const phone = phoneRef.current.value;
        const amount = amountRef.current.value;
        const _id = idRef.current.value;

        // console.log({ name, email, phone, amount, _id });
        const data = { name, email, phone, amount };
        console.log(data);
        putMethod(`https://phero-task-server.herokuapp.com/api/updateBills/${_id}`,data,setShow,e)
    };


    // put mehtod--------------------------->

    return (
        <div>
            <Table striped bordered hover bg="secondary" className="border border-1 rounded">
                <thead>
                    <tr>
                        <th>Billing Id</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Paid Ammount</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody style={{ width: "100%" }}>
                    {data.map((bill) => {
                        const { _id, name, email, phone, amount } = bill;
                        return (
                            <tr style={{ width: "100%" }} key={_id}>
                                <td className="billing-desk">{_id}</td>
                                <td>{name}</td>
                                <td>{email}</td>
                                <td>{phone}</td>
                                <td>{amount}</td>
                                <td>
                                    <Button variant="info" onClick={() => handleShow(bill)}>
                                        Edit
                                    </Button>{" "}
                                    <Modal
                                        show={show}
                                        onHide={handleClose}
                                        backdrop="static"
                                        keyboard={false}
                                    >
                                        <Modal.Header closeButton>
                                            <Modal.Title>Edit Bill Form</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <>
                                                <Form onSubmit={handleFormSubmit}>
                                                    <Form.Group
                                                        className="mb-3"
                                                        controlId="formBasicId"
                                                    >
                                                        <Form.Label>Id</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            ref={idRef}
                                                            value={modalData?._id}
                                                            disabled
                                                        />
                                                    </Form.Group>
                                                    <Form.Group
                                                        className="mb-3"
                                                        controlId="formBasicName"
                                                    >
                                                        <Form.Label>Full Name</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Enter Full Name"
                                                            ref={nameRef}
                                                            defaultValue={modalData?.name}
                                                            required
                                                        />
                                                    </Form.Group>
                                                    <Form.Group
                                                        className="mb-3"
                                                        controlId="formBasicEmail"
                                                    >
                                                        <Form.Label>Email address</Form.Label>
                                                        <Form.Control
                                                            type="email"
                                                            placeholder="Enter email"
                                                            ref={emailRef}
                                                            required
                                                            defaultValue={modalData?.email}
                                                        />
                                                    </Form.Group>
                                                    <Form.Group
                                                        className="mb-3"
                                                        controlId="formBasicEmail"
                                                    >
                                                        <Form.Label>Phone Number</Form.Label>
                                                        <Form.Control
                                                            type="tel"
                                                            placeholder="Enter valid phone number"
                                                            ref={phoneRef}
                                                            maxLength="11"
                                                            pattern="[0-9]{11}"
                                                            defaultValue={modalData?.phone}
                                                            required
                                                        />
                                                    </Form.Group>
                                                    <Form.Group
                                                        className="mb-3"
                                                        controlId="formBasicEmail"
                                                    >
                                                        <Form.Label>Paid Ammount</Form.Label>
                                                        <Form.Control
                                                            type="number"
                                                            placeholder="paid ammount"
                                                            ref={amountRef}
                                                            required
                                                            defaultValue={modalData?.amount}
                                                        />
                                                    </Form.Group>

                                                    <Button
                                                        variant="secondary"
                                                        onClick={handleClose}
                                                    >
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
                                    <Button variant="danger" onClick={() => deleteHandler(_id)}>
                                        Delete
                                    </Button>{" "}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    );
};

export default DataTable;

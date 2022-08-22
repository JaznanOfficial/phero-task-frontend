import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import useFetch from "../../../Hooks/useFetch/useFetch";
import "./DataTable.css";

const DataTable = () => {
    // const [bills, setBills] = useState([]);

    // const { data } = useFetch("https://phero-task-server.herokuapp.com/api/allBills");
    // console.log(data);
    const { deleteMethod, data, getMethod } = useFetch();

    const deleteHandler = (id) => {
        console.log(id);
        window.confirm("Are you sure you want to delete this bill?");
        deleteMethod(`https://phero-task-server.herokuapp.com/api/deleteBill/${id}`, id, data);
    };

    getMethod("https://phero-task-server.herokuapp.com/api/allBills");

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
                                    <Button variant="info">Edit</Button>{" "}
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

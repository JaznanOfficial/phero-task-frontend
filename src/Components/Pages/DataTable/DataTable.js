import React from "react";
import { Button, Table } from "react-bootstrap";
import './DataTable.css';

const DataTable = () => {
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
                <tbody style={{width:'100%'}}>
                    <tr style={{width:'100%'}}>
                        <td className="billing-desk">1156489641351684651651</td>
                        <td>Mark</td>
                        <td>Otto@gmail.com</td>
                        <td>123456</td>
                        <td>50000</td>
                        <td>
                            <Button variant="info">Edit</Button>{" "}
                            <Button variant="danger">Delete</Button>{" "}
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default DataTable;

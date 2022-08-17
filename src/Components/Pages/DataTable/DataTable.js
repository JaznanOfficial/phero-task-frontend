import React from "react";
import { Button, Table } from "react-bootstrap";

const DataTable = () => {
    return (
        <div>
            <Table striped bordered hover bg="secondary" className="border border-1 rounded">
                <thead>
                    <tr>
                        <th style={{width:'16%'}}>Billing Id</th>
                        <th style={{width:'16%'}}>Full Name</th>
                        <th style={{width:'16%'}}>Email</th>
                        <th style={{width:'16%'}}>Phone</th>
                        <th style={{width:'16%'}}>Paid Ammount</th>
                        <th style={{width:'16%'}}>Action</th>
                    </tr>
                </thead>
                <tbody style={{width:'100%'}}>
                    <tr style={{width:'100%'}}>
                        <td className="text-wrap" style={{width:'100px'}} >1156489641351684651654</td>
                        <td style={{width:'16%'}}>Mark</td>
                        <td style={{width:'16%'}}>Otto@gmail.com</td>
                        <td style={{width:'16%'}}>123456</td>
                        <td style={{width:'16%'}}>50000</td>
                        <td style={{width:'16%'}}>
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

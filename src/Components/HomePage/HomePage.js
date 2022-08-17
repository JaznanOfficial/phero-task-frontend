import React from 'react';
import { Container } from 'react-bootstrap';
import DataTable from '../Pages/DataTable/DataTable';
import NavigationTwo from '../Pages/NavigationTwo/NavigationTwo';

const HomePage = () => {
    return (
        <Container>
            <NavigationTwo />
            <DataTable/>
        </Container>
    );
};

export default HomePage;
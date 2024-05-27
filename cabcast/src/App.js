import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
// import Login from '../Login/LoginComponent';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LoginComponent from './Components/LoginComponent';
import Signup from './Components/Signup';

export default function loginsignuptab() {

    return (
        <section className='Login-background'>
            <h1 className='text-center pt-5'>Welcome to CabCast</h1>

            <Row className="justify-content-center mt-5">
                <Col className='left-background-image' xl="4" lg="4" md="12" sm="12">

                </Col>
                <Col className="ml-4" xl="4" lg="4" md="12" sm="12">

                    <Tabs
                        defaultActiveKey="Login"
                        id="uncontrolled-tab-example"
                        className="mb-3" >
                        <Tab eventKey="Login" title="Login">
                            <LoginComponent></LoginComponent>
                        </Tab>
                        <Tab eventKey="Signup" title="Signup">
                            <Signup></Signup>
                        </Tab>
                    </Tabs>

                </Col>

            </Row>

        </section>
    )
}

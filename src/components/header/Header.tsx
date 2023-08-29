import React, { useState } from 'react'
import { Stack, Button, Container, Form, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { ReactComponent as HomeIcon } from '../../icons/home.svg'
import { ReactComponent as AccountIcon } from '../../icons/user.svg'
import { ReactComponent as SearchIcon } from '../../icons/search.svg'
import { ReactComponent as QuestionIcon } from '../../icons/question.svg'
import './Header.css'

function Header() {
    const expand: string = "sm";
    const [show, setShow] = useState(false);
    let navigate = useNavigate(); 

    const routeChange = () =>{ 
        let path = `login`; 
        navigate(path);
        handleClose();
      }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
            <Container fluid>
                <Navbar.Brand href="#">deliveroo</Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <div className="searchBox">
                    <div className="searchIcon">
                        <SearchIcon height="24" width="24" />
                    </div>
                    <Form className="d-flex">
                        <Form.Control
                            id='searchField'
                            type="search"
                            placeholder=" Search Tossed - St Martin's Lane"
                            className="font-family:plex-sans"
                            aria-label="Search"
                        />
                    </Form>
                </div>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                    {/* <Nav.Link href="#action1">Home</Nav.Link> */}
                    <Stack gap={2} direction="horizontal">
                        <Nav.Link href="login"><HomeIcon height="24" width="24" /> Sign up or log in</Nav.Link>
                        <Button variant="outline-success" onClick={handleShow}><AccountIcon height="24" width="24" /> Account</Button>
                    </Stack>
                </Nav>
                <Offcanvas show={show} onHide={handleClose} placement="end">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>deliveroo</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Stack direction="vertical" gap={2}>
                            <Button id="login" onClick={routeChange}>Sign up or log in</Button>
                            <Button id="faq"><QuestionIcon height="24" width="24" /> FAQs</Button>
                        </Stack>
                    </Offcanvas.Body>
                </Offcanvas>
            </Container>
        </Navbar>
    )
}

export default Header
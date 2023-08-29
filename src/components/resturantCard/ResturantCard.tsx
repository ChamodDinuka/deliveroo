import React, { useEffect, useState } from 'react'
import ResturantDetails from './ResturantDetails'
import Order from './Order'
import MenuImage from '../../icons/menu.png'
import { ReactComponent as GroupUserIcon } from '../../icons/group-user.svg'
import { ReactComponent as BackIcon } from '../../icons/back.svg'
import { Button, Card, Col, Row } from 'react-bootstrap'

function ResturantCard() {
    const [windowWidth, setWindowWidth] = useState(window.screen.width);
    const setWindowDimensions = () => {
        setWindowWidth(window.screen.width);
    }
    useEffect(() => {
        window.addEventListener('resize', setWindowDimensions);
        return () => {
            window.removeEventListener('resize', setWindowDimensions);
        }
    }, [])
    return (
        <>
            <div className="back-button">
                <Button id="back" variant="outline-secondary"><BackIcon />  Back</Button>
            </div>
            <Card>
                <Row>
                    <Col md={4} xs={12}>
                        <div className="image-group">
                            <Card.Img variant="top" src={MenuImage} />
                            {windowWidth <= 955 ? <Button id="image-button" variant="outline-secondary"><GroupUserIcon /> Start group order</Button> : ''}
                        </div>
                    </Col>
                    <Col md={8} xs={12}>
                        <Card.Body>
                            <Row>
                                <Col xl={8} lg={12}>
                                    <ResturantDetails />
                                </Col>
                                <Col xl={4} lg={12}>
                                    <Order />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </>
    )
}

export default ResturantCard
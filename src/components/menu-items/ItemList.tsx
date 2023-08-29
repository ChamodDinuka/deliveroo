import React, { useEffect, useRef } from 'react'
import Bucket from './Bucket'
import { Col, Row, Stack } from 'react-bootstrap'
import './MenuItems.css'

function ItemList({sectionName}:{sectionName :string}) {
    const parentRef = useRef<HTMLDivElement | null>(null);
    const data = [
        { key: 'Bundles', value: ['Salad Bundle'] },
        { key: 'Salads', value: ['Taco Salad', 'Chipotle Salad', 'Buffolo Chicken'] },
        { key: 'Hot Power Bowls', value: ['Chipotle Power', 'Salad Power', 'Hot Chicken', 'Taco Power'] },
        { key: 'Vegan Menu', value: ['Salad Menu'] },
        { key: 'Rainbow Wraps', value: ['Beef Wraps', 'Vegitable Pro'] },
        { key: 'Smoothies, shakes & juice', value: ['Milk Shake', 'Orange', 'Avacado'] },
        { key: 'Cold Drinks', value: ['Coke', 'Sprite', 'Orange Juice'] },
        { key: 'Yoghurt & fruit', value: ['Apple', 'Orange', 'Banana'] },
    ];

    useEffect(() => {
        if (sectionName) {
          const elementToScroll = document.getElementById(sectionName);
          if (elementToScroll) {
            elementToScroll.scrollIntoView({ behavior: 'smooth',block: 'start' });
          }
        }
      }, [sectionName]);

    return (
        <div className="item-list">
            <Row>
                <Col md={12} lg={8}>
                    <div className="item-text">Adults need around 2000 kcal a day</div>
                    {data && data.map(item => (
                        <div key={item.key} ref={parentRef} id={item.key} style={{scrollMarginTop:'100px'}}>
                            <h2 style={{ textAlign: 'left', marginBottom: '16px', marginTop: '32px', fontFamily: 'plex-sans,sans-serif', fontSize: '22px', fontWeight: '700' }}>{item.key}</h2>
                            <Row>
                                {item.value.map((value, index) => (
                                    <Col lg={12} xl={6} key={index}>
                                        <div className="item-card">
                                            <Stack direction="horizontal" gap={1}>
                                                <Stack id="item-details" direction="vertical">
                                                    <div>{value}</div>
                                                    <div>Create your own masterpiece! choose from over 70 fresh and healthy ingredients</div>
                                                    <div>334 Kcal</div>
                                                    <div>£14.99</div>
                                                </Stack>
                                                <img src="https://images.unsplash.com/photo-1602253057119-44d745d9b860?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlzaHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" width="100" height="100" />
                                            </Stack>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    ))}
                </Col>
                <Col md={12} lg={4}>
                    <Bucket />
                </Col>
            </Row>
        </div>
    )
}

export default ItemList
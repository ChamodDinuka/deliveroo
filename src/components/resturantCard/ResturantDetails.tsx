import React from 'react'
import './ResturantCard.css'
import { ReactComponent as InfoIcon } from '../../icons/information.svg'
import { ReactComponent as StarIcon } from '../../icons/star.svg'
import { ReactComponent as RightArrowIcon } from '../../icons/right-arrow.svg'
import { Stack } from 'react-bootstrap'

function ResturantDetails() {
    return (
        <Stack direction="vertical" gap={2}>
            <h1>Tossed - St Martin's Lane</h1>
            <div>Chicken·Salads·Healthy</div>
            <div>0.20 miles away·Opens at 11:00 on Monday·£0.99 delivery·£7.00 minimum</div>
            <div className="info">
                <Stack direction="horizontal" gap={2}>
                    <div className="icon">
                        <InfoIcon height="24" width="24" />
                    </div>
                    <div>
                        <div>Info</div>
                        <div>Map, allergens and hygiene rating</div>
                    </div>
                    <div className="icon">
                        <RightArrowIcon height="24" width="24" />
                    </div>
                </Stack>
            </div>
            <div className="info">
                <Stack direction="horizontal" gap={2}>
                    <div className="icon">
                        <StarIcon height="24" width="24" />
                    </div>
                    <div>
                        <div>4.7 Excellent</div>
                        <div>See all 500 reviews</div>
                    </div>
                    <div className="icon">
                        <RightArrowIcon height="24" width="24" />
                    </div>
                </Stack>
            </div>
        </Stack>
    )
}

export default ResturantDetails
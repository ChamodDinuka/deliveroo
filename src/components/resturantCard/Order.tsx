import React, { useEffect, useState } from 'react'
import { Button, Stack } from 'react-bootstrap'
import { ReactComponent as RiderIcon } from '../../icons/rider.svg'
import { ReactComponent as GroupUserIcon } from '../../icons/group-user.svg'

function Order() {
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
        <div className="order">
            <Stack direction="vertical" gap={3}>
                <div className="info">
                    <Stack direction="horizontal" gap={2}>
                        <RiderIcon height="24" width="24" />
                        <div>Deliver</div>
                        <div className="colored-text">Change</div>
                    </Stack>
                </div>
                <div>
                    {windowWidth > 955 ? <Button variant="outline-secondary"><GroupUserIcon /> Start group order</Button> : ''}
                </div>
            </Stack>
        </div>
    )
}

export default Order
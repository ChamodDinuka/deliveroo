import React from 'react'
import { ReactComponent as BucketIcon } from '../../icons/bucket.svg'
import './Bucket.css'
import { Button } from 'react-bootstrap'

function Bucket() {
  return (
    <>
    <div className="bucket">
        <BucketIcon height="48" width="48"/>
        <div className="empty-text">Your basket is empty</div>
        <Button variant="secondary" disabled={true}>Go to checkout</Button>
    </div>
    </>
  )
}

export default Bucket
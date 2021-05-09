import React from 'react'
import { Spinner } from 'react-bootstrap';

const Loader = () => {
    return (
        <Spinner
            animation='border'
            role='status'
            variant="warning"
            style={{
                width: '100px',
                height: '100px',
                margin: 'auto',
                display: 'block'
            }}
            size="sm"
        >
            <span className='sr-only'>Loading ...</span>
        </Spinner>
    )
}

export default Loader

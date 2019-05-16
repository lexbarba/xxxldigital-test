import React from 'react'
import './index.sass'

export default function Loading({ showSpinner }) {

    return (
        <div className={showSpinner ? 'spinner display-block' : 'spinner display-none'}>
            <div className='container-spinner'>
                <i className='fas fa-spinner fa-pulse container-spinner__icon' />
            </div>
        </div>
    )
}
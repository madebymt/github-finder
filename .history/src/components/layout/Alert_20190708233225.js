import React from 'react'

const Alert = ({alert}) => {
    return (alert !== null(
        <div className={`alert ${alert.type}`}>
            <i class="fas fa-inbox"></i>
            <p>{alert.msg}</p>
        </div>

    ))
}

export default Alert

import React, { useContext } from 'react'
import AlertContext from './context/alert/alertConetext'

const Alert = () => {
    const alertConetext = useContext(AlertContext)
    const { alert } = alertConetext
    return (
        alert !== null && (
            <div className={`alert alert-${alert.type}`}>
                <i className='fas fa-info-circle' /> {alert.msg}
            </div>
        )


    )
}

export default Alert

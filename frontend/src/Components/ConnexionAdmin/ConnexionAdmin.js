import { Col } from 'antd'
import React from 'react'
import FormAdmin from '../FormAdmin/FormAdmin'
import './ConnexionAdmin.css'

const ConnexionAdmin = () => {
  return (
      <div className="admin-connexion">
            <div className="login-form">
            <Col xs={24} sm={20} md={16} lg={15} xl={12} className='login-container'>
                <h2> Connectez-vous en tant qu'administrateur </h2>
                <FormAdmin />
            </Col>
            </div>
      </div>
  )
}

export default ConnexionAdmin
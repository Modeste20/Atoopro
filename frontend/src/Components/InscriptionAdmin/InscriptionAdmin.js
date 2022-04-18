import { Col } from 'antd'
import React from 'react'
import FormAdmin from '../FormAdmin/FormAdmin'
import './../ConnexionAdmin/ConnexionAdmin.css'

const InscriptionAdmin = () => {
  return (
      <div className="admin-inscription">
            <div className="register-form">
            <Col xs={24} sm={20} md={16} lg={15} xl={12} className='register-container'>
                <h2> Inscrivez-vous en tant qu'administrateur </h2>
                <FormAdmin inscription />
            </Col>
            </div>
      </div>
  )
}

export default InscriptionAdmin
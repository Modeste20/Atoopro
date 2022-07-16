import { Card, Col } from 'antd'
import React from 'react'
import Markdown from '../../Shared/Markdown/Markdown'
import './MetiersCard.css'

const MetiersCard = ({ content, className, title }) => {

  return (

    <Col xs={24} sm={19} md={10} xl={7} className={'metier-card ' + (className || '')}>
      <Card bordered={false}>
        <h3>{title}</h3>
        <div className="card-content">
        <Markdown>
          {
            content
          }
        </Markdown>
        </div>
      </Card>
    </Col>
    
  )
}

export default MetiersCard
import { Card, Col } from 'antd'
import React from 'react'
import './MetiersCard.css'

const MetiersCard = ({content,className,title}) => {
  return (
    <Col xs={24} sm={19}  md={10} xl={7} className={'metier-card '+(className || '')}>
        <Card  title={<h3>{title}</h3>} bordered={false}>
          {
              content
          }
        </Card>
      </Col>
  )
}

export default MetiersCard
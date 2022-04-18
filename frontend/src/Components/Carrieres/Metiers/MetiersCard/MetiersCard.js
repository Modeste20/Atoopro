import { Card, Col } from 'antd'
import React from 'react'
import './MetiersCard.css'

const { Meta } = Card

const MetiersCard = ({className,image, title, content }) => {
  return (
    <Col xs={24} sm={19} md={12} xl={8} className={' card-metier '+className}>
      <Card
        className='metier-card'
        cover={image && <img alt={title} src={image} height={250} />}
      >
        <Meta title={<h2>{title}</h2>} description={content} />
      </Card>
    </Col>

  )
}

export default MetiersCard
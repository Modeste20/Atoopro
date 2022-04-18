import { Col } from 'antd';
import React from 'react'
import './JoinCard.css'

const JoinCard = ({icon,title,children,className,...rest}) => {
  return (
    <Col xs={23} sm={20} md={10} lg={12} xl={8} className={'card-join '+className} {...rest}>
      <div className="head">
        <div className="head-icn">
          {
            icon
          }
        </div>
        <div className="head-title">
          <h3>{title}</h3>
        </div>
      </div>
      <div className="card-body">
          {
            children
          }
      </div>
    </Col>
  )
}

export default JoinCard;
import { Card, Col, Row } from 'antd'
import React from 'react'
import { FadeComponent } from '../../Shared/FadeComponent/FadeComponent'
import Markdown from '../../Shared/Markdown/Markdown'
import delve from "dlv"

const Engagement = ({ data }) => {
  return (
    <>
      <Row gutter={[20, 50]} style={{ background: 'transparent !important' }}>

        {
          data ? data.map(({svg,description,title}) => {
            return (

              <Col xs={24} sm={22} md={12} xl={8} className={'eng'} key={title}>
                <Card title={
                  <Row style={{ alignItems: 'center' }}>
                    <FadeComponent left>
                      <Col style={{ width: 40, height: 40, borderRadius: '50%', background: '#97dcfa', color: '#06183a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img src={svg && process.env.STRAPI_APP_URL+delve(svg,"data.attributes.url")} width={18} height={18} />
                      </Col>
                    </FadeComponent>
                    <FadeComponent right delay={400}>
                      <Col style={{ marginLeft: '5px' }}>
                        <p>{title}</p>
                      </Col>
                    </FadeComponent>

                  </Row>
                } bordered={false}>
                  <FadeComponent bottom delay={500}>
                    <Markdown>
                      {
                        description
                      }
                    </Markdown>
                  </FadeComponent>
                </Card>
              </Col>

            )
          }) : null
        }

      </Row>
    </>
  )
}

export default Engagement
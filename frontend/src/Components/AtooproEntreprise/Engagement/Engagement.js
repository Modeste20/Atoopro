import { Card, Col, Row } from 'antd'
import React from 'react'
import { FaAffiliatetheme, FaPlus, FaSpider, FaUser } from 'react-icons/fa'
import { FadeComponent } from '../../Shared/FadeComponent/FadeComponent'

const Engagement = () => {
  return (
    <>
      <Row gutter={[20, 50]} style={{ background: 'transparent !important' }}>
        <Col xs={24} sm={22} md={12} xl={8} className={'eng1'}>
          <Card title={
            <Row style={{ alignItems: 'center' }}>
              <FadeComponent left>
                <Col style={{ width: 40, height: 40, borderRadius: '50%', background: '#97dcfa', color: '#06183a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <FaUser />
                </Col>
              </FadeComponent>
              <FadeComponent right delay={400}>
                <Col style={{ marginLeft: '5px' }}>
                  <p>This is a title of a component</p>
                </Col>
              </FadeComponent>

            </Row>
          } bordered={false}>
            <FadeComponent bottom delay={500}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque est harum quos veritatis! Iure non corporis dolor perspiciatis aspernatur dignissimos quia sapiente, nulla praesentium doloribus. Repellat commodi similique iure nesciunt?
              </p>
            </FadeComponent>
          </Card>
        </Col>

        <Col xs={24} sm={22} md={12} xl={8} className={'eng1'}>
          <Card title={
            <Row style={{ alignItems: 'center' }}>
              <FadeComponent left>
                <Col style={{ width: 40, height: 40, borderRadius: '50%', background: '#97dcfa', color: '#06183a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <FaPlus />
                </Col>
              </FadeComponent>
              <FadeComponent right delay={400}>
                <Col style={{ marginLeft: '5px' }}>
                  <p>This is a title of a component</p>
                </Col>
              </FadeComponent>

            </Row>
          } bordered={false}>
            <FadeComponent bottom delay={500}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque est harum quos veritatis! Iure non corporis dolor perspiciatis aspernatur dignissimos quia sapiente, nulla praesentium doloribus. Repellat commodi similique iure nesciunt?
              </p>
            </FadeComponent>
          </Card>
        </Col>

        <Col xs={24} sm={22} md={12} xl={8} className={'eng1'}>
          <Card title={
            <Row style={{ alignItems: 'center' }}>
              <FadeComponent left>
                <Col style={{ width: 40, height: 40, borderRadius: '50%', background: '#97dcfa', color: '#06183a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <FaAffiliatetheme />
                </Col>
              </FadeComponent>
              <FadeComponent right delay={400}>
                <Col style={{ marginLeft: '5px' }}>
                  <p>This is a title of a component</p>
                </Col>
              </FadeComponent>

            </Row>
          } bordered={false}>
            <FadeComponent bottom delay={500}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque est harum quos veritatis! Iure non corporis dolor perspiciatis aspernatur dignissimos quia sapiente, nulla praesentium doloribus. Repellat commodi similique iure nesciunt?
              </p>
            </FadeComponent>
          </Card>
        </Col>

        <Col xs={24} sm={22} md={12} xl={8} className={'eng1'}>
          <Card title={
            <Row style={{ alignItems: 'center' }}>
              <FadeComponent left>
                <Col style={{ width: 40, height: 40, borderRadius: '50%', background: '#97dcfa', color: '#06183a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <FaSpider />
                </Col>
              </FadeComponent>
              <FadeComponent right delay={400}>
                <Col style={{ marginLeft: '5px' }}>
                  <p>This is a title of a component</p>
                </Col>
              </FadeComponent>

            </Row>
          } bordered={false}>
            <FadeComponent bottom delay={500}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque est harum quos veritatis! Iure non corporis dolor perspiciatis aspernatur dignissimos quia sapiente, nulla praesentium doloribus. Repellat commodi similique iure nesciunt?
              </p>
            </FadeComponent>
          </Card>
        </Col>

        <Col xs={24} sm={22} md={12} xl={8} className={'eng1'}>
          <Card title={
            <Row style={{ alignItems: 'center' }}>
              <FadeComponent left>
                <Col style={{ width: 40, height: 40, borderRadius: '50%', background: '#97dcfa', color: '#06183a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <FaPlus />
                </Col>
              </FadeComponent>
              <FadeComponent right delay={400}>
                <Col style={{ marginLeft: '5px' }}>
                  <p>This is a title of a component</p>
                </Col>
              </FadeComponent>

            </Row>
          } bordered={false}>
            <FadeComponent bottom delay={500}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque est harum quos veritatis! Iure non corporis dolor perspiciatis aspernatur dignissimos quia sapiente, nulla praesentium doloribus. Repellat commodi similique iure nesciunt?
              </p>
            </FadeComponent>
          </Card>
        </Col>

        <Col xs={24} sm={22} md={12} xl={8} className={'eng1'}>
          <Card title={
            <Row style={{ alignItems: 'center' }}>
              <FadeComponent left>
                <Col style={{ width: 40, height: 40, borderRadius: '50%', background: '#97dcfa', color: '#06183a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <FaPlus />
                </Col>
              </FadeComponent>
              <FadeComponent right delay={400}>
                <Col style={{ marginLeft: '5px' }}>
                  <p>This is a title of a component</p>
                </Col>
              </FadeComponent>

            </Row>
          } bordered={false}>
            <FadeComponent bottom delay={500}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque est harum quos veritatis! Iure non corporis dolor perspiciatis aspernatur dignissimos quia sapiente, nulla praesentium doloribus. Repellat commodi similique iure nesciunt?
              </p>
            </FadeComponent>
          </Card>
        </Col>

        
      </Row>
    </>
  )
}

export default Engagement
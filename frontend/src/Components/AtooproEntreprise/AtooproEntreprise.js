import React from 'react'
import StepHistory from './StepHistory/StepHistory'
import './AtooproEntreprise.css'
import { Card, Col, Row } from 'antd'
import AtooProImage from './../../File/images/banner.jpg'
import { FaPlus } from 'react-icons/fa'
import SectionContact from '../Shared/SectionContact/SectionContact'
import Engagement from './Engagement/Engagement'
import { FadeComponent } from './../Shared/FadeComponent/FadeComponent'

import ImageHomeBannerPc from './../../File/images/home-banner-pc.svg'


const AtooproEntreprise = () => {
  return (
    <div className="atoopro-entreprise">
      <div className="banner">
        <Row gutter={[15,30]} justify='space-between' align='center' className="banner-section">
        <Col xs={24} md={12} lg={12} className='banner-section-content'>
        <FadeComponent left>
            <h1 className='banner-section-title'>
              En savoir plus sur Atoo Pro
            </h1>
          </FadeComponent>
          <FadeComponent bottom delay={500}>
            <p className='banner-section-content'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla explicabo nihil, exercitationem, illo officia sit, qui eos vero sapiente totam facilis mollitia soluta. Consectetur laboriosam illo laborum dignissimos, veritatis ea.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex natus aliquam, laborum modi enim eum eveniet repellendus suscipit nesciunt in. In sequi iste maiores voluptas, tempora eum vero corrupti optio.
            </p>
          </FadeComponent>
        </Col>
        <Col xs={24} sm={18} md={12} lg={8} className='banner-section-image'>
          <img alt='' src={ImageHomeBannerPc} width='100%' />
        </Col>
          

        </Row>

      </div>
      <section className="atoopro-def">
        <Row justify='center'>
          <Col xs={24} sm={22} md={12} className='atoopro-def-image'>
            <FadeComponent left>
              <img src={AtooProImage} style={{ borderRadius: 10 }} width='80%' alt="Qu'est ce que Atoo Pro" />
            </FadeComponent>
          </Col>
          <Col xs={24} sm={22} md={12} className='atoopro-def-content'>
            <FadeComponent top delay={500}>
              <h2>Qu'est ce que Atoo Pro ?</h2>
            </FadeComponent>
            <FadeComponent right>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, vel quaerat inventore recusandae ducimus repudiandae ratione nulla eaque, molestiae cupiditate sit illo. Corrupti ipsa, aliquam ea ullam minus consectetur voluptatem.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt aspernatur dolore, hic beatae perferendis, amet labore, assumenda doloremque ipsam quas veniam ad repudiandae totam nemo ratione obcaecati suscipit optio. Hic!</p>
            </FadeComponent>
          </Col>
        </Row>
      </section>

      <section className="atoopro-mission">
        <Row justify='center'>
          <Col xs={24} sm={22} md={12} className='atoopro-mission-content'>
            <FadeComponent bottom>
              <h2>Notre mission</h2>
            </FadeComponent>
            <FadeComponent top delay={500}>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, vel quaerat inventore recusandae ducimus repudiandae ratione nulla eaque, molestiae cupiditate sit illo. Corrupti ipsa, aliquam ea ullam minus consectetur voluptatem.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt aspernatur dolore, hic beatae perferendis, amet labore, assumenda doloremque ipsam quas veniam ad repudiandae totam nemo ratione obcaecati suscipit optio. Hic!</p>

            </FadeComponent>
          </Col>
          <Col xs={24} sm={22} md={12} className='atoopro-mission-image'>
            <FadeComponent right>
              <img src={AtooProImage} style={{ borderRadius: 10 }} width='80%' alt="Qu'est ce que Atoo Pro" />
            </FadeComponent>
          </Col>

        </Row>
      </section>

      <section className='atoopro-engagement'>
        <FadeComponent bottom>
          <h2>Nos engagements</h2>

        </FadeComponent>
        <Engagement />
      </section>

      <SectionContact title={'Avez-vous un projet'}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi similique culpa ab, molestias vitae eveniet iure perspiciatis rem ad recusandae quos sunt, pariatur voluptas eligendi libero autem, illo ut veniam!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis harum hic cupiditate cum blanditiis natus vero deserunt cumque unde! Sint magnam eius beatae neque tenetur rem, enim obcaecati laborum consequatur!
        </p>
      </SectionContact>


      <section id='history-atoopro' className='history-atoopro'>
        <FadeComponent bottom>
          <h2 style={{margin:'45px 0'}}>L'Histoire de Atoo Pro</h2>
        </FadeComponent>
        <div className="history">
          <StepHistory />
        </div>
      </section>
    </div>
  )
}

export default AtooproEntreprise
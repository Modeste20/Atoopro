import { Col, Row } from 'antd'
import React from 'react'
import { FadeComponent } from '../../Shared/FadeComponent/FadeComponent'
import MetiersCard from '../Metiers/MetiersCard/MetiersCard'
import OffresData from './Offres.data'
import './Offres.css'
import JoinCard from './Join/JoinCard'
import {FaShoppingBasket} from 'react-icons/fa'

const Offres = () => {
  return (
    <div className="atoopro-jobs">
            <Col xs={24} sm={20} md={16} className='banner-jobs'>
                <FadeComponent top>
                    <h1>Nos Offres d'emplois</h1>
                </FadeComponent>
                <FadeComponent bottom delay={200}>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, quis, natus expedita porro beatae voluptates optio nulla quasi odio, ut hic suscipit laborum ab dignissimos quas temporibus illum deleniti sequi.
                    </p>
                </FadeComponent>
            </Col>

            <section className='all-jobs'>
                
                <Row justify='space-between' gutter={[20, 50]}>
                    {
                        OffresData.map(offres => <MetiersCard  {...offres} key={offres.key} />)
                    }
                </Row>

            </section>

            <section className='reasons-join'>
                <h2>Pourquoi nous rejoindre ?</h2>
                <Row justify='space-between' className='reasons'>
                    <JoinCard icon={<FaShoppingBasket size={20} />} title={'This is my title'}>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit magni voluptates voluptatem facilis eaque ex quidem fugiat unde quo. Maxime qui voluptatum repellendus ut iusto modi dolorem animi debitis quae.
                        </p>
                    </JoinCard>

                    <JoinCard icon={<FaShoppingBasket size={20} />} title={'This is my title'}>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit magni voluptates voluptatem facilis eaque ex quidem fugiat unde quo. Maxime qui voluptatum repellendus ut iusto modi dolorem animi debitis quae.
                        </p>
                    </JoinCard>

                    <JoinCard icon={<FaShoppingBasket size={20} />} title={'This is my title'}>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit magni voluptates voluptatem facilis eaque ex quidem fugiat unde quo. Maxime qui voluptatum repellendus ut iusto modi dolorem animi debitis quae.
                        </p>
                    </JoinCard>
                </Row>
            </section>
        </div>
  )
}

export default Offres
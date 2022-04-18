import { Col, Collapse, Row } from 'antd'
import React, { useContext } from 'react'
import { ThemeContext } from '../../Shared/Context/ThemeContext/ThemeContext'
import MetiersData from './Data/Metiers.data'
import './Metiers.css'
import MetiersCard from './MetiersCard/MetiersCard'
import {FadeComponent} from './../../Shared/FadeComponent/FadeComponent'

const { Panel } = Collapse

const Metiers = () => {

    const { theme } = useContext(ThemeContext)

    return (
        <div className="metiers">
            <Col xs={24} sm={20} md={16} className='banner-metiers'>
                <FadeComponent top>
                    <h1>Nos métiers</h1>
                </FadeComponent>
                <FadeComponent bottom delay={200}>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, quis, natus expedita porro beatae voluptates optio nulla quasi odio, ut hic suscipit laborum ab dignissimos quas temporibus illum deleniti sequi.
                    </p>
                </FadeComponent>
            </Col>

            <section className='all-metiers'>
                {/*
                <Collapse defaultActiveKey={[0]} ghost={theme === 'dark'}>
                    
                        MetiersData.map(metier => <Panel key={metier.id} header={<h4  className='header-collapse'>{metier.header}</h4>}>{metier.content}</Panel>)
                     
                </Collapse>
            */}
                <Row justify='space-between' gutter={[20, 50]}>
                    {
                        MetiersData.map(metier => <MetiersCard {...metier} key={metier.key} />)
                    }
                </Row>

            </section>
        </div>
    )
}

export default Metiers
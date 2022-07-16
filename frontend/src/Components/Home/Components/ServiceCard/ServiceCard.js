import { Col } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { FadeComponent } from '../../../Shared/FadeComponent/FadeComponent'
import './ServiceCard.css'

const ServiceCard = ({ className, srcSet , image, title, children, alt,url='/',...rest }) => {

    //Composant de carte pour les services
    
    return (
        <Col {...rest} xs={24} md={12} xl={6} className={'service ' + (className ? className : '')}>
            <div className="service-card">
                <FadeComponent top delay={300}>
                    <div className="image-round">
                        <img src={image} srcSet={srcSet} alt={alt} />
                    </div>
                </FadeComponent>

                <div className="content-service-card">
                    <FadeComponent bottom distance={'25px'} delay={500}>
                        <h3 className='title-card'><Link className='' to={url} >{title}</Link></h3>
                    </FadeComponent>
                    <FadeComponent bottom delay={900}>
                        {
                            children
                        }
                    </FadeComponent>
                </div>
            </div>
        </Col>
    )
}

export default ServiceCard

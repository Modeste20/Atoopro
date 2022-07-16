import { Col, Row } from 'antd'
import React, { useContext, useEffect, useRef , useState} from 'react'
import { ReactComponent as ImageHomeBannerPc } from './../../File/images/home-banner-pc.svg'
import Accordeon from './Components/Accordeon/Accordeon'
import Partenaires from './Components/Partenaires/Partenaires'
import ServiceCard from './Components/ServiceCard/ServiceCard'
import './Home.css'
import { FadeComponent } from '../Shared/FadeComponent/FadeComponent'
import { Link, useLocation } from 'react-router-dom'
import AnimateNumber from './Components/AnimateNumber/AnimateNumber'
import { AdminContext } from '../Shared/Context/AdminContext/AdminContext'
import { Helmet } from 'react-helmet'
import { withTranslation } from 'react-i18next'
import { ContentContext } from '../Shared/Context/ContentContext/ContentContext'
import { getSrcSet } from './../Shared/getSrcSet/getSrcSet'
import Markdown from '../Shared/Markdown/Markdown'
import delve from "dlv"
import Modale from './Components/Modal/Modal'
import { CookieHandlerContext } from '../Shared/Context/CookieHandler/CookieHandler'

const Home = () => {

    //Accept cookie or reject

    const refuseCookie = useContext(CookieHandlerContext)

    console.log('refusecookie',refuseCookie)

    //State of modal handler 

    const [modal,setModal] = useState(false)

    //window.localStorage.clear()

    useEffect(() => {
        /*if(navigator.cookieEnabled && window.localStorage){
            const modal_open = window.localStorage.getItem('modal_open');
            if( modal_open && modal_open === "true"){
                setModal(false)
            } else{
                setModal(true)
            }
        } else{
            setModal(true)
        }*/

        if(navigator.cookieEnabled && window.localStorage){

            const cookie = document.cookie
            .split('; ')
            .find(row => row.startsWith('cookie='))
            ?.split('=')[1];

            if((cookie && (cookie === "okay" || cookie === "no") ) || refuseCookie === false){
                setModal(false)
            } else{
                setModal(true)
            }
        } else{
            if(refuseCookie === true){
                setModal(false)
            }
            setModal(true)
        }
        //document.cookie = "cookie="
    },[])

    //use cntent context data 

    const { banner, Content,Modal } = useContext(ContentContext)


    // t  pour la translation

    const ref = useRef(null)

    const { hash } = useLocation()

    console.log(hash)

    const isAdmin = useContext(AdminContext)

    //données pour les statistiques

    const stats = delve(Content,"0.stats")

    //données pour les vignettes des services

    const card_service = delve(Content,"1.card_service")

    return (
        <div className="atoopro-home">
            <Helmet>
                <title>Page d'accueil du site d'atoopro | Atoopro</title>
                <meta name="description" content="Page d'accueil de Atoo pro" />
            </Helmet>

            {/* Display Modal if it's first visit of user */}

            <Modale setModal={setModal} modal_content={Modal} modal={modal} />

            {/* Bannière */}

            <Row justify='space-between' className='banner-home'>
                <Col xs={24} md={12} lg={12} xxl={14} className='banner-text'>
                    <FadeComponent left>

                        <h1 className='pb-2'>{delve(banner,"title")}</h1>

                        <p>
                            <Markdown>
                                {
                                   delve(banner,"description")
                                }
                            </Markdown>
                        </p>

                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Link className='banner-button-contact btn-link-primary' to='/contactez-nous' style={{ marginTop: 25, height: 45, padding: '0 15px !important', borderRadius: 5 }}>{delve(banner,"buttontext")}</Link>
                            {
                                isAdmin && <Link style={{ marginLeft: 15 }} to='/admin'>Admin account</Link>
                            }
                        </div>
                    </FadeComponent>
                </Col>

                <Col xs={24} md={12} lg={8} xxl={8} className='banner-image'>
                    <FadeComponent right>
                        <div className='img'>
                            <ImageHomeBannerPc />
                        </div>
                    </FadeComponent>

                </Col>
            </Row>

            {/* Section des statistics */}


            <section className="statistics">
                <FadeComponent top>
                    <h2 className='section-title'>{delve(Content,"0.title")}</h2>
                </FadeComponent>
                <Row className='row-statistics'>


                    {
                        stats ? stats.map(({ need_suffix, number, label }) => (
                            <Col xs={24} sm={12} md={6} className='statistic'>
                                <div className='st'>

                                    {/* AnimateNumber pour animer les nombres sur l'accueil */}

                                    <AnimateNumber end={number} needSuffix={need_suffix} />

                                    <FadeComponent bottom distance='10px'>
                                        <p>{label}</p>
                                    </FadeComponent>
                                </div>
                            </Col>
                        )) : null
                    }
                </Row>
            </section>

            {/* Section des services images:198*198  */}

            <section className="services">
                <FadeComponent top delay={500}>
                    <h2 className='section-title'>{delve(Content,"1.title")}</h2>
                </FadeComponent>
                <Row className='row-services'>

                    {
                        card_service ? card_service.map(({ className,title, description, link, image_alt, image: { data: { attributes } } }) => {

                            const srcSet = getSrcSet(delve(attributes,"url"),delve(attributes,"width"),{url:delve(attributes,"formats.thumbnail.url"),width:delve(attributes,"formats.thumbnail.width")})
                            
                            return (
                                <ServiceCard title={title} image={delve(attributes,"url")} srcSet={srcSet} alt={image_alt} key={className} url={link} ><p className='p'>
                                        <Markdown>
                                            {description}
                                        </Markdown>
                                </p></ServiceCard>
                            )

                        }) : null
                    }

                </Row>
            </section>

            

            {/* Section des partenaires images:200*40*/}

            <section className='partenaires' id='partenaires' ref={ref}>
                <FadeComponent top>
                    <h2 className='title'>{delve(Content,"2.title")}</h2>
                </FadeComponent>
                <Partenaires data={delve(Content,"2.Images")} />
            </section>


            {/* FAQ */}

            <section className="faq">
                <Row justify='center'>
                    <Col xs={24} md={19} lg={15} xl={12}>
                        <FadeComponent top>
                            <h2 className='section-title faq-title' style={{ padding: '30px 0' }}>{delve(Content,"3.title")}</h2>
                        </FadeComponent>
                        <Accordeon data={delve(Content,"3.questions")} />
                    </Col>
                </Row>
            </section>

            
        </div>
    )
}

//withTranslation : composant d'ordre supérieur permettant de prendre en charge le props t pour la traduction

export default withTranslation('home')(Home)

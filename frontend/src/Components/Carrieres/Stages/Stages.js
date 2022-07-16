import { Col, Row } from 'antd'
import React from 'react'
import { FadeComponent } from '../../Shared/FadeComponent/FadeComponent'
import SectionContact from '../../Shared/SectionContact/SectionContact'
import {Helmet} from 'react-helmet'
import './Stages.css'
import { useContext } from 'react'
import { ContentContext } from '../../Shared/Context/ContentContext/ContentContext'
import {getSrcSet} from './../../Shared/getSrcSet/getSrcSet'
import delve from 'dlv'
import Markdown from '../../Shared/Markdown/Markdown'


const getImageSrcSet = (objet,string) => {
    if(objet){
        const attributes = delve(objet,string)

        const {url,width,formats} = attributes ? attributes : {url:null,width:null,formats:null};
        return {url,srcset:getSrcSet(url,width,{url:formats && formats.thumbnail ? formats.thumbnail.url : null,width:formats && formats.thumbnail ?formats.thumbnail.width : null})}
    } else{
        return {
            url:null,
            srcset:null
        }
    }
   }

const Stages = () => {


    const {banner,section,section_contact,bannerImage} = useContext(ContentContext)

    //450*295 pour les images


    /* srcset de l'image de  banniere */

    const banner_srcset = getImageSrcSet(bannerImage,'image.data.attributes')

    /*
        info sur l'image de la section 1 
    */

    const section1_info_image = getImageSrcSet(section ? section[0] : null,'image.data.attributes')

    /*
        info sur l'image de la section 2
    */

        const section2_info_image = getImageSrcSet(section ? section[1] : null,'image.data.attributes')

    
    /*
        info sur l'image de la section 1 
    */

        const section3_info_image = getImageSrcSet(section ? section[2] : null,'image.data.attributes')


    return (

        <div className="atoopro-alternances">

            <Helmet>
                <title>Stages et Alternaces | Atoopro</title>
                <meta name="description" content="Contenu de la page de stages et alternances" />
            </Helmet>

            {
                /* Bannière */
            }

            <div className="banner">
                <Row gutter={[15, 30]} justify='space-between' align='center' className="banner-section">
                    <Col xs={24} md={12} lg={12} xxl={14} className='banner-section-content'>
                        <FadeComponent left>
                            <h1 className='banner-section-title'>
                                {delve(banner,"title")}
                            </h1>
                        </FadeComponent>
                        <FadeComponent bottom delay={500}>
                                <Markdown>
                                    {
                                        delve(banner,"description")
                                    }
                                </Markdown>
                        </FadeComponent>
                    </Col>
                    <Col xs={24} sm={18} md={12} lg={8} className='banner-section-image'>
                        <img alt={delve(bannerImage,"alt")} srcSet={delve(banner_srcset,"srcset")} src={process.env.STRAPI_APP_URL+banner_srcset.url} height={280}/>
                    </Col>
                </Row>
            </div>

            {
                /* section 1 */
            }
            
            <section className="atoopro-def">
                <Row justify='center'>
                    <Col xs={24} sm={22} md={12} className='atoopro-def-image'>
                        <FadeComponent left>
                            <img src={process.env.STRAPI_APP_URL+section1_info_image.url} width='100%' srcSet={section1_info_image.srcset} style={{ borderRadius: 10 }} alt={section && section[0] ? section[0].image_alt : null} />
                        </FadeComponent>
                    </Col>
                    <Col xs={24} sm={22} md={12} className='atoopro-def-content'>
                        <FadeComponent top delay={500}>
                            <h2>{delve(section,"0.title")}</h2>
                        </FadeComponent>
                        <FadeComponent right>
                                <Markdown>
                                {delve(section,"0.description")}
                                </Markdown>
                        </FadeComponent>
                    </Col>
                </Row>
            </section>

            {
                /* Mission (section 2) */
            }

            <section className="atoopro-mission">
                <Row justify='center'>
                    <Col xs={24} sm={22} md={12} className='atoopro-mission-content'>
                        <FadeComponent bottom>
                            <h2>{delve(section,"1.title")}</h2>
                        </FadeComponent>
                        <FadeComponent top delay={500}>
                            <Markdown>
                            {delve(section,"1.description")}
                            </Markdown>
                        </FadeComponent>
                    </Col>
                    <Col xs={24} sm={22} md={12} className='atoopro-mission-image'>
                        <FadeComponent right>
                            <img src={process.env.STRAPI_APP_URL+section2_info_image.url} srcSet={section2_info_image.srcset} style={{ borderRadius: 10 }} width='100%' alt={section && section[1] ? section[1].image_alt : null} />
                        </FadeComponent>
                    </Col>

                </Row>
            </section>

            {
                /* Section de contact */
            }

            <SectionContact title={delve(section_contact,"title")} link={delve(section_contact,"button_url")} option={'cv'}>
                        {
                            delve(section_contact,"description")
                        }
            </SectionContact>

            {
                /* section 3*/
            }
            
            <section className="atoopro-def">
                <Row justify='center'>
                    <Col xs={24} sm={22} md={12} className='atoopro-def-image'>
                        <FadeComponent left>
                            <img src={process.env.STRAPI_APP_URL+section3_info_image.url} srcSet={section3_info_image.srcset} style={{ borderRadius: 10 }} width='100%' alt={section && section[2] ? section[2].image_alt : null} />
                        </FadeComponent>
                    </Col>
                    <Col xs={24} sm={22} md={12} className='atoopro-def-content'>
                        <FadeComponent top delay={500}>
                            <h2>{delve(section,"2.title")}</h2>
                        </FadeComponent>
                        <FadeComponent right>
                            <Markdown>
                                {delve(section,"2.title")}
                            </Markdown>
                        </FadeComponent>
                    </Col>
                </Row>
            </section>
        </div>

    )
}

export default Stages
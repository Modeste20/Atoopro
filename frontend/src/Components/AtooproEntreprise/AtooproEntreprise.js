import React,{useContext} from 'react'
import StepHistory from './StepHistory/StepHistory'
import './AtooproEntreprise.css'
import { Card, Col, Row } from 'antd'
import SectionContact from '../Shared/SectionContact/SectionContact'
import Engagement from './Engagement/Engagement'
import { FadeComponent } from './../Shared/FadeComponent/FadeComponent'
import {Helmet} from 'react-helmet'
import { ContentContext } from '../Shared/Context/ContentContext/ContentContext';
import Markdown from '../Shared/Markdown/Markdown'
import delve from 'dlv'
import { getSrcSet } from '../Shared/getSrcSet/getSrcSet'


const AtooproEntreprise = () => {
  const pageData = useContext(ContentContext);

  console.log('page',pageData)

  const {banner,banner_image,Section,Content} = pageData;

  const banner_url = delve(banner_image,'image.data.attributes.url')

  // Infos de l'image (src et srcset) de la section  definition


  const section_definition_image_url = delve(Section,'0.image.data.attributes.url')
  const section_definition_image_width = delve(Section,'0.image.data.attributes.width')
  const section_definition_image_thumbnail_url = delve(Section,'0.image.data.attributes.formats.thumbnail.url')
  const section_definition_image_thumbnail_width = delve(Section,'0.image.data.attributes.formats.thumbnail.width')




  const section_definition_image_srcset = getSrcSet(section_definition_image_url , section_definition_image_width,{
    url:section_definition_image_thumbnail_url,
    width:section_definition_image_thumbnail_width
  })

    // Infos de l'image (src et srcset) de la section  mission


    const section_mission_image_url = delve(Section,'1.image.data.attributes.url')
    const section_mission_image_width = delve(Section,'1.image.data.attributes.width')
    const section_mission_image_thumbnail_url = delve(Section,'1.image.data.attributes.formats.thumbnail.url')
    const section_mission_image_thumbnail_width = delve(Section,'1.image.data.attributes.formats.thumbnail.width')
  
  
  
  
    const section_mission_image_srcset = getSrcSet(section_mission_image_url , section_mission_image_width,{
      url:section_mission_image_thumbnail_url,
      width:section_mission_image_thumbnail_width
    })



  return (

    <div className="atoopro-entreprise">

      <Helmet>
        <title>En savoir plus sur l'entreprise | Atoopro</title>
        <meta name="description" content="Des informations utiles sur l'entreprise Atoopro" />
      </Helmet>

      {
        /*bannière*/
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
              <p className='banner-section-content'>
                <Markdown>
                  {
                    delve(banner,"description")
                  }
                </Markdown>
              </p>
            </FadeComponent>
          </Col>

          <Col xs={24} sm={18} md={12} lg={8} className='banner-section-image'>
            <img alt={banner_image ? banner_image.alt : null} src={banner_url ? process.env.STRAPI_APP_URL+banner_url : null} height={280} />
          </Col>

        </Row>

      </div>

      {
    
        /* Définition de Atoopro 450*295 pour les images */
      }

      <section className="atoopro-def">
        <Row justify='center'>
          <Col xs={24} sm={22} md={12} className='atoopro-def-image'>
            <FadeComponent left>
              <img src={process.env.STRAPI_APP_URL+section_definition_image_url} srcSet={section_definition_image_srcset} alt={delve(Section,"0.image_alt")} style={{ borderRadius: 10 }} width='100%' />
            </FadeComponent>
          </Col>
          <Col xs={24} sm={22} md={12} className='atoopro-def-content'>
            <FadeComponent top delay={500}>
              <h2>{delve(Section,"0.title")}</h2>
            </FadeComponent>
            <FadeComponent right>
              <Markdown>
                  {
                    delve(Section,"0.description")
                  }
                </Markdown>
            </FadeComponent>
          </Col>
        </Row>
      </section>

      {
        /* Mission de Atoopro */
      }

      <section className="atoopro-mission">
        <Row justify='center'>
          <Col xs={24} sm={22} md={12} className='atoopro-mission-content'>
            <FadeComponent bottom>
              <h2>{delve(Section,"1.title" )}</h2>
            </FadeComponent>
            <FadeComponent top delay={500}>
              <Markdown>
                {delve(Section,"1.description")}
              </Markdown>

            </FadeComponent>
          </Col>
          <Col xs={24} sm={22} md={12} className='atoopro-mission-image'>
            <FadeComponent right>
              <img src={process.env.STRAPI_APP_URL+section_mission_image_url} width={'100%'} srcSet={section_mission_image_srcset} alt={delve(Section,"1.image_alt")} style={{ borderRadius: 10 }} />
            </FadeComponent>
          </Col>

        </Row>
      </section>

      {/*
        Les engagements
       */}

      <section className='atoopro-engagement'>
        <FadeComponent bottom>
          <h2>{delve(Content,"0.title")}</h2>
        </FadeComponent>
        <Engagement data={delve(Content,"0.card_engagement")} />
      </section>

      {/*
          Section de contact
       */}

      <SectionContact title={delve(Content,"1.title")} link={delve(Content,"1.button_url")}>
          {
            delve(Content,"1.description")
          }
      </SectionContact>

       {/* L'histoire de Atoopro */}

      <section id='history-atoopro' className='history-atoopro'>
        <FadeComponent bottom>
          <h2 style={{ margin: '45px 0' }}>{delve(Content,"2.title")}</h2>
        </FadeComponent>
        <div className="history">
          <StepHistory data={delve(Content,"2.step")} />
        </div>
      </section>
    </div>
  )
}

export default AtooproEntreprise
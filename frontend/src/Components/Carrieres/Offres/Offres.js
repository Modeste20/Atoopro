import { Col, Row } from 'antd'
import React from 'react'
import { FadeComponent } from '../../Shared/FadeComponent/FadeComponent'
import './Offres.css'
import JoinCard from './Join/JoinCard'
import { Helmet } from 'react-helmet'
import MetiersCard from './OffresCard'
import { useContext } from 'react'
import { ContentContext } from '../../Shared/Context/ContentContext/ContentContext'
import { ThemeContext } from '../../Shared/Context/ThemeContext/ThemeContext'
import delve from 'dlv'
import Markdown from '../../Shared/Markdown/Markdown'

const Offres = () => {

    const { banner, joinUs, offres } = useContext(ContentContext)

    //Get Current Theme

    const {theme} = useContext(ThemeContext)


    const card_join = delve(joinUs,'card_join')

    return (
        <div className="atoopro-jobs">
            <Helmet>
                <title>Nos métiers | Atoopro</title>
                <meta name="description" content="Contenu de la page des métiers" />
            </Helmet>
            {/*
                Bannière
            */}

            <Col xs={24} sm={20} md={16} className='banner-jobs'>
                <FadeComponent top>
                    <h1>{delve(banner,"title")}</h1>
                </FadeComponent>
                <FadeComponent bottom delay={200}>
                        <Markdown>
                            {delve(banner,"description")}
                        </Markdown>
                </FadeComponent>
            </Col>

            {/*
                Jobs
            */}

            <section className='all-jobs'>

                <Row justify='space-between' gutter={[20, 50]}>
                    {
                        offres && offres.map(offre => <MetiersCard title={offre.title} content={offre.description} key={offre.id} />)
                    }
                </Row>

            </section>

            {/*
                Pourquoi nous rejoindre
            */}

            <section className='reasons-join'>
                <h2>{delve(joinUs,"title")}</h2>
                <Row justify='space-between' className='reasons'>
                    {
                        card_join ? card_join.map(({id,title,description,icon_alt,icon,icon_dark}) => {

                            // Afficher différents icon ( blanc sur le thème sombre , noir sur le thème clair ) suivanr le thème !

                            const light_url = delve(icon,'data.attributes.url')
                            const dark_url = delve(icon_dark,'data.attributes.url')

                            console.log('dark',icon_dark)

                            //image 20*20


                            return (
                                <JoinCard icon={<img src={process.env.STRAPI_APP_URL+(theme === 'light' ? light_url : dark_url)} alt={icon_alt} width={20} height={20} />} key={id} title={title}>
                                    <Markdown>
                                        {description}
                                    </Markdown>
                                </JoinCard>
                            )

                        }) : null
                    }
                </Row>
            </section>

        </div>
    )
}

export default Offres
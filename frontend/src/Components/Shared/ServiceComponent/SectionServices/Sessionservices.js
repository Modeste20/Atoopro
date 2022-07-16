import { Button, Col, Row } from 'antd'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { ThemeContext } from '../../Context/ThemeContext/ThemeContext'
import { FadeComponent } from '../../FadeComponent/FadeComponent'
import delve from 'dlv'
import Markdown from '../../Markdown/Markdown'
import {LangContext} from './../../../Shared/Context/LangContext/LangContext'

const SessionServices = () => {

    const { theme } = useContext(ThemeContext)
    const { pathname } = useLocation()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const {lang}= useContext(LangContext)


    useEffect(async () => {

        const res = await fetch(process.env.STRAPI_APP_URL+'/api/services'+(lang === "en" ? '?locale=en' : ''));
        const response = await res.json()

        setLoading(false)

        console.log('response', response)

        if (response.data) {
            const objet = response.data.map(elmt => {
                return {
                    className: delve(elmt, 'attributes.className'),
                    id: delve(elmt, 'id'),
                    title: delve(elmt, 'attributes.title'),
                    description: delve(elmt, 'attributes.description'),
                    link: delve(elmt, 'attributes.link'),
                    button_text: delve(elmt, 'attributes.button_text'),
                    image_alt: delve(elmt, 'attributes.image_alt'),
                    image: delve(elmt, 'attributes.image.data.attributes.url')
                }
            })

            console.log('objet', objet)
            setData(() => objet.filter(c => ![c.link, c.link + '/'].includes(pathname)))
        } else {
            setData([])
        }
    }, [lang])

    console.log('d',data)

    return (
        <section className='other-services'>
            {
                data.length ? data.map((c,i) => {
                        return (
                            <Row justify='space-around' className={'service '+(c.className) + (i%2 !== 0 ? ' right ' : '')} style={{ margin: '80px 0 100px 0' }} align='center'>
                                <Col xs={22} sm={18} md={8} className='service-image'>
                                    <FadeComponent top distance='30px'>
                                        <img src={c.image ? process.env.STRAPI_APP_URL+c.image : null} alt={c.image_alt} width={'100%'} height={250} />
                                    </FadeComponent>
                                </Col>

                                <Col xs={24} sm={18} md={10} className='service-content' style={{ marginTop: 45 }}>
                                    <FadeComponent left>
                                        <h2>{c.title}</h2>
                                    </FadeComponent>
                                    <FadeComponent bottom>
                                        <Markdown>
                                            {
                                                c.description
                                            }
                                        </Markdown>
                                    </FadeComponent>
                                    <FadeComponent top>
                                        <Link to={c.link} className={'btn-link-primary'} style={{ fontWeight: 600, height: 45, marginTop: 8, border: '2px solid ' + (theme === 'light' ? '#25A8E0' : '#1a52bb'), color: (theme === 'light' ? '#25A8E0' : '#1a52bb'), background: 'transparent' }}>En savoir plus sur l'hébergement</Link>
                                    </FadeComponent>
                                </Col>
                            </Row>
                        )
                }) : null
            }
        </section>

    )
}

export default SessionServices
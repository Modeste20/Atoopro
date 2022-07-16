import {Carousel} from 'antd'
import React from 'react'
import { useRef } from 'react';
import * as FaIcons from 'react-icons/fa'
import delve from "dlv"
import './Partenaires.css'

const Partenaires = ({data}) => {

    // Ref pour comander les botons next et prev du caroussel

    const slider = useRef()

    const getUrl_images = (index,image_alt=false) => {

        return delve(data,index.toString()+".image.data.attributes."+(image_alt ? "image_alt" : "url"))

    }


    return (
        <div className='caroussel'>
            <div className="chevron prev" onClick={() => slider.current.prev()}>
                <FaIcons.FaArrowLeft />
            </div>

            {/* Composants carousel antd */}

            <Carousel dots={false} autoplay ref={ref => {
                console.log(ref)
                slider.current = ref
            }}>
                <div>
                    <div className='images'>
                        <div>
                            <img src={process.env.STRAPI_APP_URL+getUrl_images(0)} alt={getUrl_images(0,true)} width={'160px'} />
                        </div>
                        <div>
                            <img src={process.env.STRAPI_APP_URL+getUrl_images(1)} alt={getUrl_images(1,true)} width={'160px'} />
                        </div>
                    </div>
                </div>

                <div>
                    <div className='images'>
                        <div>
                            <img src={process.env.STRAPI_APP_URL+getUrl_images(2)} alt={getUrl_images(2,true)} width={'160px'} />
                        </div>
                        <div>
                            <img src={process.env.STRAPI_APP_URL+getUrl_images(3)} alt={getUrl_images(3,true)} width={'160px'} />
                        </div>
                    </div>
                </div>

                <div>
                    <div className='images'>
                        <div>
                            <img src={process.env.STRAPI_APP_URL+getUrl_images(4)} alt={getUrl_images(4,true)} width={'160px'} />
                        </div>

                        <div>
                            <img src={process.env.STRAPI_APP_URL+getUrl_images(5)} alt={getUrl_images(5,true)} width={'160px'} />
                        </div>
                    </div>
                </div>

            </Carousel>

            <div className="chevron next" onClick={() => slider.current.next()}>
                <FaIcons.FaArrowRight />
            </div>

        </div>

    )
}

export default Partenaires

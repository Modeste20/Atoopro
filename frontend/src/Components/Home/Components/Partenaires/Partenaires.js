import {Carousel} from 'antd'
import React from 'react'
import { useRef } from 'react';
import * as FaIcons from 'react-icons/fa'
import Google from './../../../../File/images/Google.png'
import Microsoft from './../../../../File/images/Microsoft.png'
import Netgate from './../../../../File/images/Netgate.png'
import Veeam from './../../../../File/images/Veeam.png'
import Vmware from './../../../../File/images/Vmware.png'
import './Partenaires.css'

const Partenaires = () => {

    // Ref pour comander les botons next et prev du caroussel

    const slider = useRef()


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
                            <img src={Google} alt='' width={'160px'} />
                        </div>
                        <div>
                            <img src={Netgate} alt='' width={'160px'} />
                        </div>
                    </div>
                </div>

                <div>
                    <div className='images'>
                        <div>
                            <img src={Microsoft} alt='' width={'160px'} />
                        </div>
                        <div>
                            <img src={Veeam} alt='' width={'160px'} />
                        </div>
                    </div>
                </div>

                <div>
                    <div className='images'>
                        <div>
                            <img src={Veeam} alt='' width={'160px'} />
                        </div>

                        <div>
                            <img src={Vmware} alt='' width={'160px'} />
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

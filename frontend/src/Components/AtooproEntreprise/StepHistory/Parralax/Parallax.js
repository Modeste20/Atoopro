import { useParallax } from "react-scroll-parallax";
import React, { useEffect, useState } from 'react'
import { Divider } from "antd";

const Parallax = ({children}) => {

    const [changeMode, setChangeMode] = useState(false)

    useEffect(() => {

        console.log('ch',changeMode)
    
            if (window.innerWidth < 850) {
                setChangeMode(true)
            } else{
                setChangeMode(false)
            }
    
            window.addEventListener('resize', () => {
                if (window.innerWidth < 850) {
                    setChangeMode(true)
                } else{
                    setChangeMode(false)
                }
            })
        },[])

    const parallax =useParallax({
        scale: [0.83, 1.1]
    });

    return <div ref={parallax.ref} className='parallax-effect'>
        {children}
    </div>  
}

export default Parallax
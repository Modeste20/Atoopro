import { Radio } from 'antd';
import React, { useContext, useState } from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import { FaHeart, FaKey, FaPlane } from 'react-icons/fa';
import { ThemeContext } from '../../../Shared/Context/ThemeContext/ThemeContext';
import './Recpatcha.css'




const Recpatcha = ({ elmt, setValue }) => {

    const { theme } = useContext(ThemeContext)


    console.log('theme', theme)

    return (
        <div className="recaptcha">
            {/*<ReCAPTCHA
                sitekey='AIzaSyCBooTzoZlsFvb9U9zy_ofAFB96vNbcCEg'
                theme={theme === 'dark' ? 'dark' : 'light'}
            />*/}
            <p>
                Veuillez prouver que vous êtes un humain en sélectionnant : <b>' {elmt} '</b>
            </p>
            <Radio.Group size="large" name='recaptcha' className='recaptcha-radio-group' onChange={(e) => setValue(e.target.value)}>
                <RadioButton value={'heart'}>
                    <FaHeart style={{ fontSize: 18 }} />
                </RadioButton>

                <RadioButton value={'airplane'}>
                    <FaPlane style={{ fontSize: 18 }} />
                </RadioButton>

                <RadioButton value={'key'}>
                    <FaKey style={{ fontSize: 18 }} />
                </RadioButton>
            </Radio.Group>
        </div>

    )
}


const RadioButton = ({value,children}) => {


    return (
        <Radio.Button className='radio-button' style={{ marginRight: 12, background: 'transparent', display: 'inline-flex', paddingTop: 10, boxShadow: 'none', justifyContent: 'center', alignItems: 'center' }} value={value}>
            {children}
        </Radio.Button>
    )
}

export default Recpatcha
import { Radio } from 'antd';
import React, { useContext, useMemo} from 'react'
import { FaHeart, FaKey, FaPlane } from 'react-icons/fa';
import { LangContext } from '../../../Shared/Context/LangContext/LangContext';
import { ThemeContext } from '../../../Shared/Context/ThemeContext/ThemeContext';
import './Recpatcha.css'




const Recpatcha = ({ elmt, value, onChange , error_recpatcha }) => {

    const { theme } = useContext(ThemeContext)

    const {lang} = useContext(LangContext)

    console.log('theme', theme)

    const label = useMemo(() => {
        if(lang ==='en'){
            return (
                <span>
                    English Veuillez prouver que vous êtes un humain en sélectionnant
                </span> 
            )
        } else{
            return (
                <span>
                    Veuillez prouver que vous êtes un humain en sélectionnant
                </span> 
            )
        }
    },[lang])

    return (
        <div className="recaptcha">
            <p>
                {label} : <b>' {elmt} '</b>
            </p>
            <Radio.Group size="large" name='recaptcha' className='recaptcha-radio-group' onChange={onChange}>

                <RadioButton value={'key'} checked={value === 'key'}>
                    <FaKey style={{ fontSize: 18 }} />
                </RadioButton>


                <RadioButton value={'airplane'} checked={value === 'airplane'}>
                    <FaPlane style={{ fontSize: 18 }} />
                </RadioButton>

                <RadioButton value={'heart'} checked={value === 'heart'}>
                    <FaHeart style={{ fontSize: 18 }} />
                </RadioButton>

            </Radio.Group>
            <div className="ant-form-item-explain-error">
                {
                    error_recpatcha
                }
            </div>
        </div>

    )
}


const RadioButton = ({ value, checked, children }) => {


    return (
        <Radio.Button checked={checked} className='radio-button' style={{ marginRight: 12, background: 'transparent', display: 'inline-flex', paddingTop: 10, boxShadow: 'none', justifyContent: 'center', alignItems: 'center' }} value={value}>
            {children}
        </Radio.Button>
    )
}

export default Recpatcha
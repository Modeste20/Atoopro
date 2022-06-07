import { Collapse } from 'antd'
import React, { useContext } from 'react'
import './Accordeon.css'
import * as FaIcons from 'react-icons/fa'
import { SpaceContext } from 'antd/lib/space'
import { FadeComponent } from '../../../Shared/FadeComponent/FadeComponent'
import { ThemeContext } from '../../../Shared/Context/ThemeContext/ThemeContext'
import data from './Accordeon.data'

const Accordeon = () => {

    const {theme} = useContext(ThemeContext)

    const { Panel } = Collapse

    const text = `
        A dog is a type of domesticated animal.
        Known for its loyalty and faithfulness,
        it can be found as a welcome guest in many households across the world.
        A dog is a type of domesticated animal.
        Known for its loyalty and faithfulness,
        it can be found as a welcome guest in many households across the world.
    `;

    return (
        <Collapse ghost expandIcon={(b) => b.isActive ? <FadeComponent  left><div className={'icn '+(theme==='light' ?'':'icn-dark' )}><FaIcons.FaMinus  /></div></FadeComponent> : <FadeComponent  left ><div className={'icn '+(theme==='light' ?'':'icn-dark' )}><FaIcons.FaPlus /></div></FadeComponent>}>
            {
                data.map(({id,header,content}) => (
                    <Panel header={<FadeComponent top delay={id} distance={'8px'}>{header}</FadeComponent>} key={id}>
                        <p className='accordeon-content'>{content}</p>
                    </Panel>
                ))
            }
        </Collapse>
    )
}

export default Accordeon

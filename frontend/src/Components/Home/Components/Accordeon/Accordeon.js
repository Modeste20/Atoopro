import { Collapse } from 'antd'
import React, { useContext } from 'react'
import './Accordeon.css'
import * as FaIcons from 'react-icons/fa'
import { SpaceContext } from 'antd/lib/space'
import { FadeComponent } from '../../../Shared/FadeComponent/FadeComponent'
import { ThemeContext } from '../../../Shared/Context/ThemeContext/ThemeContext'

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
            <Panel header={<FadeComponent top delay={600} distance={'8px'}>This is panel header 1</FadeComponent>} key="1">
                <p>{text}</p>
            </Panel>
            <Panel header={<FadeComponent top delay={700} distance={'8px'}>This is panel header 1</FadeComponent>} key="2">
                <p>{text}</p>
            </Panel>
            <Panel header={<FadeComponent top delay={800} distance={'8px'}>This is panel header 1</FadeComponent>} key="3">
                <p>{text}</p>
            </Panel>

            <Panel header={<FadeComponent top delay={900} distance={'8px'}>This is panel header 1</FadeComponent>} key="4">
                <p>{text}</p>
            </Panel>
        </Collapse>
    )
}

export default Accordeon

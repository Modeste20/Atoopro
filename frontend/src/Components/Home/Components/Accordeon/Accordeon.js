import { Collapse } from 'antd'
import React, { useContext } from 'react'
import './Accordeon.css'
import * as FaIcons from 'react-icons/fa'
import { FadeComponent } from '../../../Shared/FadeComponent/FadeComponent'
import { ThemeContext } from '../../../Shared/Context/ThemeContext/ThemeContext'
import ReactMarkdown from 'react-markdown'
import Markdown from '../../../Shared/Markdown/Markdown'


const Accordeon = ({data}) => {

    const {theme} = useContext(ThemeContext)

    const { Panel } = Collapse

    return (

        <Collapse ghost expandIcon={(b) => b.isActive ? <FadeComponent  left><div className={'icn '+(theme==='light' ?'':'icn-dark' )}><FaIcons.FaMinus /></div></FadeComponent> : <FadeComponent  left ><div className={'icn '+(theme==='light' ?'':'icn-dark' )}><FaIcons.FaPlus /></div></FadeComponent>}>
            {
                data ? data.map(({id,question,answer}) => (
                    <Panel header={<FadeComponent top delay={500+parseInt(id,10)*100} distance={'8px'}>{question}</FadeComponent>} key={id}>
                            <Markdown>
                                {answer}
                            </Markdown>
                    </Panel>
                )) : null
            }
        </Collapse>

    )
}

export default Accordeon

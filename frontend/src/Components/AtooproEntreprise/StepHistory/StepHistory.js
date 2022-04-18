import React, { useContext, useEffect, useState } from 'react'
import './StepHistory.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './StepHistory.css'
import { ThemeContext } from '../../Shared/Context/ThemeContext/ThemeContext';
import Parallax from './Parralax/Parallax';
import VerticalElement from './VerticalElement/VerticalElement';

const StepHistory = () => {


    const { theme } = useContext(ThemeContext)


    return (

        <VerticalTimeline className={theme === 'light' ? 'timeline-light' : 'timeline-dark'} lineColor={theme === 'light' ? '#25A8E0' : '#1a52bb'}>
            <Parallax>
                <VerticalElement
                    visible={true}
                    iconClassName={'icn-timeline'}
                    className="vertical-timeline-element--work left"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h2 className="vertical-timeline-element-title">2022</h2>
                    <h3 className="vertical-timeline-element-subtitle">Miami Creative Direction</h3>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat recusandae a magni illum incidunt dolores provident iste! Sequi esse aperiam iusto dolorem repellat! Eligendi est vitae illum explicabo laudantium nostrum.
                    </p>
                </VerticalElement>

                <VerticalElement
                    visible={true}
                    iconClassName='icn-timeline'
                    className="vertical-timeline-element--work right"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h2 className="vertical-timeline-element-title">2022</h2>
                    <h3 className="vertical-timeline-element-subtitle">Miami Creative Direction</h3>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat recusandae a magni illum incidunt dolores provident iste! Sequi esse aperiam iusto dolorem repellat! Eligendi est vitae illum explicabo laudantium nostrum.
                    </p>
                </VerticalElement>

                <VerticalElement
                    visible={true}
                    iconClassName={'icn-timeline'}
                    className="vertical-timeline-element--work left"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h2 className="vertical-timeline-element-title">2022</h2>
                    <h3 className="vertical-timeline-element-subtitle">Miami Creative Direction</h3>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat recusandae a magni illum incidunt dolores provident iste! Sequi esse aperiam iusto dolorem repellat! Eligendi est vitae illum explicabo laudantium nostrum.
                    </p>
                </VerticalElement>

                <VerticalElement
                    visible={true}
                    iconClassName='icn-timeline'
                    className="vertical-timeline-element--work right"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h2 className="vertical-timeline-element-title">2022</h2>
                    <h3 className="vertical-timeline-element-subtitle">Miami Creative Direction</h3>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat recusandae a magni illum incidunt dolores provident iste! Sequi esse aperiam iusto dolorem repellat! Eligendi est vitae illum explicabo laudantium nostrum.
                    </p>
                </VerticalElement>
            </Parallax>
        </VerticalTimeline>
    )
}

export default StepHistory
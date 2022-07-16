import React, { useContext, useEffect, useState } from 'react'
import './StepHistory.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './StepHistory.css'
import { ThemeContext } from '../../Shared/Context/ThemeContext/ThemeContext';
import Parallax from './Parralax/Parallax';
import VerticalElement from './VerticalElement/VerticalElement';
import ReactMarkdown from 'react-markdown'
import Markdown from '../../Shared/Markdown/Markdown';

const StepHistory = ({ data }) => {


    const { theme } = useContext(ThemeContext)

    return (

        <VerticalTimeline className={theme === 'light' ? 'timeline-light' : 'timeline-dark'} lineColor={theme === 'light' ? '#25A8E0' : '#1a52bb'}>
            <Parallax>
                {
                    data ? data.map(({id, year, subtitle, content }, i) => <VerticalElement
                            visible={true}
                            iconClassName={'icn-timeline'}
                            className={"vertical-timeline-element--work " + (i % 2 === 0 ? " right " : " left ")}
                            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            key={id}
                        >
                            <h3 className="vertical-timeline-element-title">{year}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
                            <p>
                                <Markdown>
                                    {content}
                                </Markdown>
                            </p>
                        </VerticalElement>) : null
                }
            </Parallax>
        </VerticalTimeline>
    )
}

export default StepHistory
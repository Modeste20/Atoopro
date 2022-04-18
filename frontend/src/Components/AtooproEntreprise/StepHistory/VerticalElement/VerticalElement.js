import React from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import { useState } from 'react'

const VerticalElement = ({className,children,...rest}) => {
    const [active, setActive] = useState(true)
    return (
        <VisibilitySensor active={active}>
            {({ isVisible }) => {
                if(isVisible){
                    const elmtVisible = document.querySelectorAll('.atoopro-entreprise .vertical-timeline .vertical-timeline-element--work.active')
                    elmtVisible.forEach(c => c && c.classList.remove('active'))
                }
               return <VerticalTimelineElement
                {...rest}
                    className={className+(isVisible ? ' active ' : ' ')}
                >
                    {children}
                </VerticalTimelineElement>
            }}
        </VisibilitySensor>

    )
}

export default VerticalElement
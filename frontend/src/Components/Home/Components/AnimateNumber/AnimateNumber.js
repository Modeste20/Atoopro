import React, { useState } from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import CountUp from 'react-countup'

const AnimateNumber = ({end,duration=0.4,needSuffix=false,...rest}) => {
    const [active,setActive] = useState(true)
  return (
    <VisibilitySensor active={active} partialVisibility offset={{ bottom: 200 }}>
        {({ isVisible }) => (
          <span>
            {isVisible ? <CountUp end={end} duration={duration} suffix={needSuffix ? '+' : ''} onEnd={() => setActive(false)} {...rest} /> : <span>0</span>}
          </span>
        )}
      </VisibilitySensor>
  )
}

export default AnimateNumber
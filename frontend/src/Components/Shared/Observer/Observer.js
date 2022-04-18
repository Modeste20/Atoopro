import React from 'react'
import { InView, useInView } from 'react-intersection-observer'

const Observer = ({ children }) => {

    return (
        <InView>
            {
                data => <div ref={data.ref}>
                    {children}
                </div>
            }
        </InView>
    )
}

export default Observer
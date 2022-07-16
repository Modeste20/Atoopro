import React, { useContext } from 'react'
import ServiceComponent from '../../Shared/ServiceComponent/ServiceComponent'
import {ReactComponent as AssistanceSvg} from './../../../File/images/hebergement.svg'
import {Helmet} from 'react-helmet'
import { ContentContext } from '../../Shared/Context/ContentContext/ContentContext'

const Assistance = () => {

    const {banner,section_contact,description,className} = useContext(ContentContext)

    return (
        <ServiceComponent section_contact={section_contact} banniere={banner} image={<AssistanceSvg />} className={className} 
        content={description}
        >
            <Helmet>
                <title>Assistance | Atoopro</title>
                <meta name="description" content="Contenu de la page assistance" />
            </Helmet>
        </ServiceComponent>
    )
}

export default Assistance
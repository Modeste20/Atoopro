import React, { useContext } from 'react'
import ServiceComponent from '../../Shared/ServiceComponent/ServiceComponent'
import {ReactComponent as CommunicationSvg} from './../../../File/images/hebergement.svg'
import {Helmet} from 'react-helmet'
import { ContentContext } from '../../Shared/Context/ContentContext/ContentContext'


const CommunicationService = () => {
   
    const {banner,section_contact,description,className} = useContext(ContentContext)

    console.log(section_contact)

   
    return (
        <ServiceComponent section_contact={section_contact} banniere={banner} image={<CommunicationSvg />} className={className} 
        content={description}
        >
            <Helmet>
                <title>Communications unifiées | Atoopro</title>
                <meta name="description" content="Contenu de la page de communications unifiees" />
            </Helmet>
        </ServiceComponent>
    )

}

export default CommunicationService
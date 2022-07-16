import React, { useContext } from 'react'
import ServiceComponent from '../../Shared/ServiceComponent/ServiceComponent'
import {ReactComponent as DeveloppementSvg} from './../../../File/images/hebergement.svg'
import {Helmet} from 'react-helmet'
import { ContentContext } from '../../Shared/Context/ContentContext/ContentContext'


const DeveloppementService = () => {

    const {banner,section_contact,description,className} = useContext(ContentContext)

    return (
        <ServiceComponent section_contact={section_contact} banniere={banner} image={<DeveloppementSvg />} className={className} 
        content={description}
        >
            <Helmet>
                <title>Développement | Atoopro</title>
                <meta name="description" content="Contenu de la page de développement" />
            </Helmet>
        </ServiceComponent>
    )
}

export default DeveloppementService
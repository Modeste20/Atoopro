import React from 'react'
import ServiceComponent from '../../Shared/ServiceComponent/ServiceComponent'
import { ReactComponent as Hebergemente} from './../../../File/images/hebergement.svg'
import {Helmet} from 'react-helmet'
import { useContext } from 'react'
import {ContentContext} from './../../Shared/Context/ContentContext/ContentContext'


const Hebergement = () => {

    const {banner,section_contact,description,className} = useContext(ContentContext)

    console.log(section_contact)

   
    return (
        <ServiceComponent section_contact={section_contact} banniere={banner} image={<Hebergemente />} className={className} 
        content={description}
        >
            <Helmet>
                <title>Hébergement | Atoopro</title>
                <meta name="description" content="Contenu de la page hébergement" />
            </Helmet>
        </ServiceComponent>
    )

}

export default Hebergement
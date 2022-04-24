import React from 'react'
import ServiceComponent from '../../Shared/ServiceComponent/ServiceComponent'
import CommunicationSvg from './../../../File/images/hebergement.svg'
import {Helmet} from 'react-helmet'

const banniere = {
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sequi laudantium pariatur mollitia, blanditiis quasi necessitatibus nesciunt, velit nisi placeat hic quidem aut itaque! Voluptatem suscipit non laudantium inventore provident?",
    img:CommunicationSvg
}

const CommunicationService = () => {
    const content = (
        <>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sit quis fuga explicabo quod perferendis nostrum natus porro officiis quasi nesciunt laudantium esse a, aut reprehenderit atque nemo. Quam, repellat!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sit quis fuga explicabo quod perferendis nostrum natus porro officiis quasi nesciunt laudantium esse a, aut reprehenderit atque nemo. Quam, repellat!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sit quis fuga explicabo quod perferendis nostrum natus porro officiis quasi nesciunt laudantium esse a, aut reprehenderit atque nemo. Quam, repellat!
            </p>
        </>
    )
    return (
        <ServiceComponent banniere={banniere} title='Cummunications unifiées' className={'communications-unifiees'} 
        content={content}
        >
            <Helmet>
                <title>Communications unifiées | Atoopro</title>
                <meta name="description" content="Contenu de la page Communications unifiées" />
            </Helmet>
        </ServiceComponent>
    )
}

export default CommunicationService
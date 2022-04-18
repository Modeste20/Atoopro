import React from 'react'
import ServiceComponent from '../../Shared/ServiceComponent/ServiceComponent'
import Hebergemente from './../../../File/images/hebergement.svg'

const banniere = {
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sequi laudantium pariatur mollitia, blanditiis quasi necessitatibus nesciunt, velit nisi placeat hic quidem aut itaque! Voluptatem suscipit non laudantium inventore provident?",
    img:Hebergemente
}

const Hebergement = () => {
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
        <ServiceComponent banniere={banniere} title='Hébergement' className={'hebergement'} 
        content={content}
        >
        </ServiceComponent>
    )
}

export default Hebergement
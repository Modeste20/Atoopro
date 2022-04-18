import React from 'react'
import InfogerenceImage from './../../../../File/images/infogerence.png'
import SolutionImage from './../../../../File/images/solutions-applicatives.png'
import CloudImage from './../../../../File/images/cloud-computing.png'


//Infogérence

const InfogerenceContent = <p className='p'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt sunt, quos facere quaerat fugit perspiciatis voluptatem officia quas fugiat, facilis accusamus necessitatibus amet quam eligendi magnam minima provident odio consectetur?
        </p>


const  ServiceTable = [
    {
        className:'hebergement',
        image:InfogerenceImage,
        title:'Hébergement',
        children:InfogerenceContent,
        alt:"Service d'hébergement"
    },
    {
        className:'assistance',
        image:SolutionImage,
        title:'Assistance',
        children:InfogerenceContent,
        alt:"Assistance"
    },
    {
        className:'developpement',
        image:CloudImage,
        title:'Développement',
        children:InfogerenceContent,
        alt:"developpement"
    },
    {
        className:'communications-unifiees',
        image:InfogerenceImage,
        title:'Communications unifiées',
        children:InfogerenceContent,
        alt:"communications-unifiees"
    },
]


export default ServiceTable

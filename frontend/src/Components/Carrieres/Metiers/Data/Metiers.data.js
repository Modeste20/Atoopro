import React from 'react'
import {Metiers1Content} from '../Metiers1/Metiers1'
import Banner from './../../../../File/images/banner.jpg'

const MetiersData = [
    {
        image:Banner,
        key:1,
        className:'metiers1',
        title:"C'est mon premier métier ",
        content:Metiers1Content
    },
    {
        image:Banner,
        key:8,
        className:'metiers1',
        title:"C'est mon deuxième métier",
        content:Metiers1Content
    },
    {
        image:Banner,
        key:3,
        className:'metiers1',
        title:"C'est mon troisième métier",
        content:Metiers1Content
    },

]



/*[
{

    header:"Métiers 0",
    content:<Metiers1Content />,
    id:0
},
{
    header:"Métiers 1",
    content:<Metiers1Content />,
    id:1
},
{
    header:"Métiers 2",
    content:<Metiers1Content />,
    id:2
},
{
    header:"Métiers 3",
    content:<Metiers1Content />,
    id:3
},
{
    header:"Métiers 4",
    content:<Metiers1Content />,
    id:4
},
{
    header:"Métiers 5",
    content:<Metiers1Content />,
    id:5
}
]*/

export default MetiersData
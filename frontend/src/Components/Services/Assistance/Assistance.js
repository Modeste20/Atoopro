import React from 'react'
import ServiceComponent from '../../Shared/ServiceComponent/ServiceComponent'
import AssistanceSvg from './../../../File/images/hebergement.svg'

const banniere = {
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sequi laudantium pariatur mollitia, blanditiis quasi necessitatibus nesciunt, velit nisi placeat hic quidem aut itaque! Voluptatem suscipit non laudantium inventore provident?",
    img:AssistanceSvg
}

const Assistance = () => {
  return (
    <ServiceComponent banniere={banniere} title='Assistance' className={'assistance'} 
        content={<>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut voluptatum quisquam assumenda amet, aliquid odit! Nulla, sint dolore adipisci ex sapiente itaque nobis earum atque minima cupiditate rem obcaecati eos.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis nulla doloribus laudantium adipisci debitis atque reprehenderit deserunt sed quam suscipit minus totam sit minima quia reiciendis, ea quas aperiam ut.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <b>Ut voluptatum quisquam assumenda amet </b>, aliquid odit! Nulla, sint dolore adipisci ex sapiente itaque nobis earum atque minima cupiditate rem obcaecati eos.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis nulla doloribus laudantium adipisci debitis atque reprehenderit deserunt sed quam suscipit minus totam sit minima quia reiciendis, ea quas aperiam ut.
        </p>
        </>}
        >
        </ServiceComponent>
  )
}

export default Assistance
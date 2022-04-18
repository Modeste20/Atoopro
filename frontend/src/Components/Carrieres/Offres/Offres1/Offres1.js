import { Button } from 'antd'
import React from 'react'
import { Link, useHistory } from 'react-router-dom'

const Offres1Content = () => {
  return (
    <div className="offres1">
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque magni odit, corporis consequatur aspernatur nostrum ipsum aperiam dolore ratione assumenda quas perspiciatis, voluptate totam voluptas quidem quisquam voluptatibus dolores nulla!
        </p>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam inventore itaque quae error dignissimos fuga rem, quisquam sint, amet ullam aliquam magnam numquam pariatur ea ipsa quia! Nostrum, voluptatibus tempore!
        </p>
        <Link to='/' className='btn-link-primary'  style={{height:40,margin:'20px 0',borderRadius:3}}>Consulter L'offre</Link>
    </div>
  )
}

export default Offres1Content
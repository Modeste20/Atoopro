import { Menu } from 'antd';
import React from 'react'

const CountryCounter = ({countryArray,data}) => {

    const table = [];
        if(countryArray && Array.isArray(countryArray) && countryArray.length){
            countryArray.forEach(c => {
                if(c.text){
                    table.push({country:c.text,times:data.filter(d => d.country === c.text).length})
                }
            })
        }
  return (
    <div className="country_counter">
        <h2>Statistique des pays</h2>
        <div className="list">
            <Menu>
                {
                   table.map(c => <Menu.Item key={c.country}>{c.country} <b>x{c.times}</b></Menu.Item> )
                }
            </Menu>
        </div>
    </div>
  )
}

export default CountryCounter
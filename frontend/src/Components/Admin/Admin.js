import { Tabs } from 'antd';
import React, { useState } from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import { AdminContext } from '../Shared/Context/AdminContext/AdminContext';
import './Admin.css'
import { useEffect } from 'react';
import TableVisitor from './TableVisitor/TableVisitor';
import CountryCounter from './CountryCounter/CountryCounter';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const Admin = () => {


    const isAdmin = useContext(AdminContext);

    const [visitors,setVisitors] = useState([])
    const [countryArray,setCountryArray] = useState([])
    const [lastVisitors,setLastVisitors] = useState([])
    const [loading,setLoading] = useState(false)



    useEffect(async() => {
        console.log('admine',isAdmin)
        const token = sessionStorage.getItem('token');
        if(isAdmin && token){

            setLoading(true)
            
            const {data} = await axios.get('http://localhost:5000/visitor',{
                headers:{
                    token:token
                }
            })
            setLoading(false)
            console.log('da',data)
            if(data && data.visitors){
                setVisitors(data.visitors)
                setLastVisitors(data.last2DayVisitor)
                setCountryArray(data.countryArray)
            }
        }
    },[])


    console.log('country',countryArray)


    return (
        <div className="admin">
            <h2>
                Bienvenue sur votre compte Admin
            </h2>
            <Link onClick={(e) => {
                e.preventDefault();
                sessionStorage.removeItem('token');
                window.location.reload()
            }} className='btn-link-primary' to='/' style={{ marginTop: 25, height: 45, width: 150, borderRadius: 5 }}>Se déconnecter</Link>

            <div className="panel-admin">
                <Tabs defaultActiveKey="1" onChange={callback}>
                jjjjj
                    <TabPane tab={<h3>Visiteurs actuelles</h3>} key="1">
                        {
                          loading ? <h5>Loading ...</h5> : visitors.length ? <TableVisitor data={visitors} filters={countryArray} /> : <h5>Aucun visiteur pour le moment</h5>
                        }

                        {
                            countryArray.length && visitors.length && <CountryCounter data={visitors} countryArray={countryArray} />
                        }
                    </TabPane>
                    <TabPane tab={<h3>Visiteurs des deux derniers jours</h3>} key="2">
                        {
                            loading ? <h5>Loading ...</h5> : lastVisitors.length ?  <TableVisitor data={lastVisitors} filters={countryArray} /> :  <h5>Aucun visiteur pour les deux derniers jours</h5>
                        }

                        {
                            countryArray.length && lastVisitors.length && <CountryCounter data={lastVisitors} countryArray={countryArray} />
                        }
                    </TabPane>
                </Tabs>


            </div>
        </div>

    )
}

export default Admin
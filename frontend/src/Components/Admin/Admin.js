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
import {Helmet} from 'react-helmet'

const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
}

const Admin = () => {


    const isAdmin = useContext(AdminContext);

    const [visitors, setVisitors] = useState([])
    const [countryArray, setCountryArray] = useState([])
    const [lastVisitors, setLastVisitors] = useState([])
    const [loading, setLoading] = useState(false)

    const [canDeleteCVFolder, setCanDeleteCVFolder] = useState(false)

    const token = sessionStorage.getItem('token');


    useEffect(async () => {
        if (isAdmin && token) {

            const { data } = await axios.get('http://localhost:5000/'+'verify-cv', {
                headers: {
                    token: token
                }
            })
            if (data) {
                setCanDeleteCVFolder(true)
            }
        }
    })



    useEffect(async () => {
        console.log('admine', isAdmin)
        if (isAdmin && token) {

            setLoading(true)

            const { data } = await axios.get('http://localhost:5000/'+'visitor', {
                headers: {
                    token: token
                }
            })
            setLoading(false)
            console.log('da', data)
            if (data && data.visitors) {
                setVisitors(data.visitors)
                setLastVisitors(data.last2DayVisitor)
                setCountryArray(data.countryArray)
            }
        }
    }, [])


    console.log('country', countryArray)


    const deleteCVFolder = async (e) => {
        e.preventDefault();
        if (token && isAdmin) {
            const res = await fetch('http://localhost:5000/'+'cv', {
                method: 'delete',
                headers: {
                    token: token
                }
            })

            const data = await res.json();
            if (data) {
                window.scrollTo(0, 0)
            }
        }

    }


    return (
        <div className="admin">
            <Helmet>
                <title>Compte Administrateur | Atoopro</title>
                <meta name='robots' content='noindex,nofollow' />
                <meta name='googlebot' content='noindex,nofollow' />
            </Helmet>
            <h2>
                Bienvenue sur votre compte Admin
            </h2>
            <div className="panel-admin">
                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab={<h3>Visiteurs actuelles</h3>} key="1">
                        {
                            loading ? <h5>Loading ...</h5> : visitors.length ? <TableVisitor data={visitors} filters={countryArray} /> : <h5>Aucun visiteur pour le moment</h5>
                        }

                        {
                            (countryArray.length && visitors.length) ? <CountryCounter data={visitors} countryArray={countryArray} /> : null
                        }
                    </TabPane>
                    <TabPane tab={<h3>Visiteurs des deux derniers jours</h3>} key="2">
                        {
                            loading ? <h5>Loading ...</h5> : lastVisitors.length ? <TableVisitor data={lastVisitors} filters={countryArray} /> : <h5>Aucun visiteur pour les deux derniers jours</h5>
                        }

                        {
                            ( countryArray.length && lastVisitors.length ) ? <CountryCounter data={lastVisitors} countryArray={countryArray} /> : null
                        }
                    </TabPane>
                </Tabs>
            </div>

            <div className="actions" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>


                {canDeleteCVFolder && <div className="delete-cv-folder" style={{ margin: '15px 10px' }}>
                    <button onClick={deleteCVFolder} className='btn-link-primary' to='/' style={{ marginTop: 25, height: 45, width: 150, borderRadius: 5 }}>Supprimer les cv </button>
                </div>}

                <div className="log-out" style={{ margin: '15px 10px' }}>
                    <button onClick={(e) => {
                        e.preventDefault();
                        sessionStorage.removeItem('token');
                        window.location.reload()
                    }} className='btn-link-primary' to='/' style={{ marginTop: 25, height: 45, width: 150, borderRadius: 5 }}>Se déconnecter</button>

                </div>

            </div>
        </div>

    )
}

export default Admin
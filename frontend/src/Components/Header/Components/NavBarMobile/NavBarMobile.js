import { Button, Menu } from "antd";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { AtooproLinks, CarriereLinks, ServiceLinks } from "../NavBar/NavBar.data";
import './NavBarMobile.css'


const { SubMenu } = Menu

const NavBarMobile = ({setVisible}) => {

    const history = useHistory()

    const handleClick = e => {
        console.log('click ', e);
    };

    return (
        <>
        <Menu

            style={{ width: '100%' , marginTop:45}}
            mode="inline"
            className="menu-mobile"
        >
            <SubMenu  key="sub1" title={<h3>Notre société</h3>} style={{margin:'19px 0'}}>
                <AtooproLinks onClick={() => setVisible(false)} />
            </SubMenu>

            <SubMenu key="sub2" title={<h3>Nos services</h3>} style={{margin:'19px 0'}}>
                <ServiceLinks onClick={() => setVisible(false)} />
            </SubMenu>
            <SubMenu key="sub3" title={<h3>Carrières</h3>} style={{margin:'15px 0'}}>
                <CarriereLinks onClick={() => setVisible(false)} />
            </SubMenu>
        </Menu>
        <div className="nav-button" style={{margin:'45px auto',textAlign:'center'}}>
            <a href="/contactez-nous?option=devis" className="btn-link-primary" style={{ borderRadius: '40px', height: '40px' }}>Obtenir un devis</a>
        </div>
        </>
    )
}

export default NavBarMobile;

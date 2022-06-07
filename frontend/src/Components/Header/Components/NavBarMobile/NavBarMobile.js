import { Button, Menu } from "antd";
import React from "react";
import { AtooproLinks, CarriereLinks, ServiceLinks } from "../NavBar/NavBar.data";
import './NavBarMobile.css'


const { SubMenu } = Menu

const NavBarMobile = ({ t,setVisible, logout, deleteCVFolder, isAdmin , canDeleteCVFolder}) => {


    return (
        <>
            <Menu

                style={{ width: '100%', marginTop: 45 }}
                mode="inline"
                className="menu-mobile"
            >
                {
                    isAdmin && <SubMenu key="sub0" title={<h3>Votre Compte</h3>} style={{ margin: '19px 0' }}>
                        <Menu className="menu-admin">

                        {/* Supprimons les fichiers du dossier cv si ce répertoire contient des fichiers */}

                            {
                                canDeleteCVFolder && <Menu.Item key={'delete-cv-folder'} style={{marginBottom:12}} >
                                <Button className="button" type='link' onClick={deleteCVFolder}>Supprimer les cv</Button>
                            </Menu.Item>
                            }
                            

                            <Menu.Item key={'logout'} >
                                <Button type='link' className="button" onClick={logout}>Se déconnecter</Button>
                            </Menu.Item>


                        </Menu>
                    </SubMenu>
                }



                <SubMenu key="sub1" title={<h3>Notre société</h3>} style={{ margin: '19px 0' }}>
                    <AtooproLinks onClick={() => setVisible(false)} />
                </SubMenu>

                <SubMenu key="sub2" title={<h3>Nos services</h3>} style={{ margin: '19px 0' }}>
                    <ServiceLinks onClick={() => setVisible(false)} />
                </SubMenu>
                <SubMenu key="sub3" title={<h3>Carrières</h3>} style={{ margin: '15px 0' }}>
                    <CarriereLinks onClick={() => setVisible(false)} />
                </SubMenu>
            </Menu>
            {
                /* Supprimer le bouton *Obtenir un devis* si l'utilisateur est un administrateur  */
            }
            {
                !isAdmin && <div className="nav-button" style={{ margin: '45px auto', textAlign: 'center' }}>
                <a href="/contactez-nous?option=devis" className="btn-link-primary" style={{ borderRadius: '40px', height: '40px' }}>{t('button')}</a>
            </div>
            }
            
        </>
    )
}

export default NavBarMobile;

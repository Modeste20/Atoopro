import { Button } from 'antd'
import delve from 'dlv'
import React, { useContext } from 'react'
import { ThemeContext } from '../../../Shared/Context/ThemeContext/ThemeContext'
import Markdown from '../../../Shared/Markdown/Markdown'
import "./Modal.css"

const Modale = ({ setModal, modal_content, modal }) => {

    const { theme } = useContext(ThemeContext)

    const closeModal = (e, accept_cookie) => {
        setModal(false);
        const date = new Date(Date.now() + (1000 * 60 * 60 * 24 * 30 * 4)) // 4mois

        if (accept_cookie) {
            document.cookie = "cookie=okay;expires=" + date.toUTCString()
        } else {
            document.cookie = "cookie=no;expires=" + date.toUTCString()
        }
    }

    return (
        <div className={"modal " + (theme === 'dark' ? " modal-dark " : " ") + (modal ? "modal-visible" : "")}>
            {/*<div className="modal-close" onClick={closeModal}>
            <FaTimes />
        </div>*/}
            <div className="modal-content">

                <h3>
                    {
                        delve(modal_content, "title")
                    }
                </h3>
                <Markdown>
                    {
                        delve(modal_content, "description")
                    }
                </Markdown>

                {
                    navigator.cookieEnabled ? null : <Markdown>
                        {
                            delve(modal_content, "cookie_disabled_message")
                        }
                    </Markdown>
                }

            </div>

            <div className="modal-button">

                <div>
                    <Button type='primary' style={{ height: 40 }} onClick={(e) => closeModal(e, true)}>
                        {
                            delve(modal_content, "allow_cookie")
                        }
                    </Button>
                </div>

                <div>
                    {/* Modifier la structure du contenu sur strapi */}

                    <Button ghost type='primary' style={{ height: 40 }} onClick={(e) => closeModal(e, false)}>
                        {
                            delve(modal_content, "refuse_cookie")
                        }
                    </Button>
                </div>





            </div>

        </div>
    )
}

export default Modale
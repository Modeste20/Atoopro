import { Alert, Button, Checkbox, Col, Form, Input, Radio, Row, Select } from 'antd';
import React, { memo, useMemo } from 'react';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FadeComponent } from '../../../Shared/FadeComponent/FadeComponent';
import Recpatcha from '../GoogleRecpatcha/recpatcha';
import { ThemeContext } from './../../../Shared/Context/ThemeContext/ThemeContext'
import queryString from 'query-string'
import { withTranslation } from 'react-i18next';
import delve from 'dlv'
import './FormContact.css'


//Les différentes erreures possibles dans le formulaire de contact à utiliser si la traduction n'a pas pu être faite

const errorDefault = {
    form: 'Veuillez bien remplir le formulaire de contact',
    numero: 'Numero de téléphone invalide',
    pdf: 'Veuillez télécharger un fichier pdf',
    'size-file': 'La taille maximale de votre document pdf doit être inférieure 10Mo',
    error: " Une erreur s'est produite , veuillez réessayer ultérieurement "
}

/* Données du recpatcha */

const recaptchaTable = (lang) => {
    return (
        [{
            key: 'key',
            label: lang === "en" ? "A key" : 'Une clé'
        },
        {
            key: 'airplane',
            label: lang === "en" ? "A airplane" :'Un avion'
        },
        {
            key: 'heart',
            label: lang === "en" ? 'a heart' : 'Un coeur'
        },
        ]
    )
} 

/* Composant formulaire de contact */

const FormContact = ({ t , lang , placeholder:{radio,placeholder,selection} , err}) => {

    console.log("selection",selection)

    /* get Recpatha data for recpatchaTable above */

    const recaptchaData = recaptchaTable(lang)
    const [recpatchaError,setRecpatchaError] = useState(null)


    //Changer le radio du recpatcha

    const changeRecpatchaRadio = (e) => {
        setValue(e.target.value)
        if (e.target.value === recaptchaData[key]['key']) {
            setRecpatchaError(false)
        } else{
            setRecpatchaError(true)
        }
    }

    //Actualiser la clé de recpatcha après 20sec lorsque le visiteur a bien choisi le recpatcha ( recpatchaError === false )


    useEffect(() => {
        if (recpatchaError === false) {
            setTimeout(() => {
                setKey(() => Math.round(Math.random() * 2))
            }, 20000)
        }
    }, [recpatchaError])

    // States 

    //Valeur du champ radio choisi pour le recaptcha
    const [value, setValue] = useState('')

    //La clé pour changer si nécessaire l'élément à choisir par l'utilisateur au niveau du recptacha
    const [key, setKey] = useState(Math.round(Math.random()*2))

    //valeur du checkbox du formulaire
    const [checked, setChecked] = useState(false)

    //Valeur du select : objet du message de l'utilisateur
    const [selectValue, setSelectValue] = useState('')


    //Gestion du status radio
    const [statut, setStatut] = useState('entreprise')

    //Loading pour l'envoi du mail

    const [loading, setLoading] = useState(false)

    //Etat pour les erreures lors de la requête asynchrone de l'envoi des infos sur le serveur
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(false)


    //form

    const [form] = Form.useForm()



    //On change pour le checkbox

    const changeCheckbox = (e) => {
        setChecked(e.target.checked)
    }


    //Une clé aléatoire lorsque le composant est monté : pour le recaptcha

    useEffect(() => {
        setKey(() => Math.round(Math.random() * 2))
        return () => setKey(() => Math.round(Math.random() * 2))
    }, [])


    //Soumission du formulaire 
    const onFinish = async (values) => {

        //Vérifions si le recpatcha est correct

        if(!value || value !== recaptchaData[key]['key']){
            setRecpatchaError(true)
            return ;
        }
        setRecpatchaError(null)

        setSuccess(false)
        delete values.check;
        delete values.recpatcha;

        //Si l'utilisateur est en recherche d'emploi pas besoin d'entrer le nom de société
        //Si l'utilisateur a une entreprise pas besoin de choisir un cv

        if (values.status === undefined) {
            values.status = 'entreprise'
            setStatut('entreprise')
        } else{
            setStatut(values.status)
        }
        console.log('values', values)
        if (values.status !== 'emploi') {
            //Supprimer la valeur du champ file lorsque l'utilisateur ne cherche pas un emploi
            delete values.file
        } else {
            //Supprimer la valeur du champ societe lorsque l'utilisateur cherche pas un emploi
            delete values.societe
        }

        //Lancer le chargement
        setLoading(true)

        
        try {
            //Envoi de la requête sur le serveur

            delete values.status
            
            const res = await fetch(process.env.STRAPI_APP_URL + `/api/contact-message`, {
                method: "POST",
                body: JSON.stringify(values),
                headers:{
                    "Content-Type":"application/json"
                }
            });
            const data = await res.json()

            setLoading(false)
            console.log(data)
            if(data.data.id){
                //Utilisation de formdata parcequ'il y a possibilité d'envoi de fichier sur le serveur
                const formElement = document.querySelector('.atoopro-contact form.contact-form')
                const formdata = new FormData(formElement)
        /*for (const i in values) {
            formdata.append(i, values[i])
        }*/
        formdata.append('files',values['files'])
        formdata.append('field','cv')
        formdata.append('ref',values['api::contact-message.contact-message'])
        formdata.append('refId',data.data.id)

        const res = await fetch(process.env.STRAPI_APP_URL + `/api/upload`, {
            method: "POST",
            body: formdata
        });
        const datae = await res.json()

        console.log(formdata,datae)

            }
            {/*if (data.error) {
                //S'il y a une erreure on retourne l'erreur dans l'état des erreurs
                setStatut(values.status)
                window.scrollTo(0, 0)
                setError(data.error)
            } else {
                //Si tout s'est bien passé lors de l'envoi du message
                window.scrollTo(0, 0)
                setSuccess(true)
                const elmt = document.querySelector('.recaptcha .ant-radio-group .ant-radio-button-wrapper-checked')
                if (elmt) {
                    elmt.classList.remove('ant-radio-button-wrapper-checked')
                }

                //Réinitialiser les informations du formulaire
                setValue('')
                setChecked(false)
                setSelectValue('option1')
                form.setFieldsValue({
                    name: '',
                    status: 'entreprise',
                    societe: '',
                    email: '',
                    tel: '',
                    message: '',
                    objet: 'option1',
                    file: '',
                });
            }*/}
        } catch (error) {
            console.log(error, error.message)
            setLoading(false)
            window.scrollTo(0, 0)
            setKey(() => Math.round(Math.random() * 2))
            setError('error')
        }

    };

    const onFinishFailed = (errorInfo) => {
        console.log('recaptcha',value)
        if(!value || value !== recaptchaData[key]['key']){
            setRecpatchaError(true)
        } else{
            setRecpatchaError(false)
        }
        console.log('Failed:', errorInfo);
    };

    //thème courant

    const { theme } = useContext(ThemeContext)

    //dynamic select value lorsqu'on a options=devis

    const { search } = useLocation()


    useEffect(() => {
        if (queryString.parse(search).option === 'devis') {
            setSelectValue('devis')
        } else {
            if (queryString.parse(search).option === 'cv') {
                setSelectValue('cv')
            }
        }
    }, [search])

    console.log('devis', selectValue)

    const objet = useMemo(() => {
        if (queryString.parse(search).option === 'devis') {
            return 'devis'
        } else {
            if (queryString.parse(search).option === 'cv') {
                return 'cv'
            } else {
                return 'option1'
            }
        }
    }, [search])

    {/* Check Label Component  */}

    const Check_Label_Component = useMemo(() => {

        if(lang === 'en'){
            return (
                <span>
                    I read and accepte <Link to='/' className='link'>la politique de confidentialité</Link>
                </span>
            )
        } else {
            return (
                <span>
                    J'ai lu et j'accepte <Link to='/' className='link'>la politique de confidentialité</Link> de ce site
                </span>
            )
        }

    },[lang])

    return (
        <Form
            name="contact-form"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 24 }}
            initialValues={{ objet }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="on"
            encType="multipart/form-data"
            className='contact-form'
            form={form}
            id={(theme === 'light' ? 'form-contact-light' : 'form-contact-dark')}
            style={{ marginTop: 35 }}
        >
            {
                /* Message d'erreur et de succès lors de l'envoi du mail */
            }
            {
                !success && error && <Alert style={{ marginBottom: "10px !important" }} message={t('error.' + error, errorDefault[error])} type="error" />
            }
            {
                success && <Alert style={{ marginBottom: "10px !important" }} message={t('success.message')} type="success" />
            }
            <FadeComponent right distance='10px'>
                <Row justify='space-between' style={{ margin: error || success ? '25px 0' : '12px 0' }}>
                    <Col>

                    {/* Status du visiteur , recherche d'emploi ou a une entreprise */}

                        <Form.Item
                            name='status'
                            initialValue={'entreprise'}
                            rules={[({ }) => ({
                                validator(_, value) {
                                    console.log('tel', value)

                                    setStatut(value)

                                    if (value === 'entreprise' && form.getFieldValue('objet') === 'cv') {
                                        form.setFieldsValue({ objet: 'option1' })
                                        setSelectValue('option1')
                                    }

                                    if (value && !['emploi', 'entreprise'].includes(value)) {
                                        return Promise.reject(delve(err,"required.status"))
                                    } else {
                                        return Promise.resolve()
                                    }
                                }
                            })]}
                        >
                            <Radio.Group defaultValue={'entreprise'}>
                                <Radio value='entreprise'>{delve(radio,"entreprise")}</Radio>
                                <Radio style={{ margin: '15px 0 0 0' }} value='emploi'>{delve(radio,"emploi")}</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>

                    {/* Nom de l'utilisateur */}

                    <Col xs={24} sm={12} lg={24} xl={12} style={{ padding: '0 5px' }}>
                        <Form.Item
                            name="name"
                            rules={[({ }) => ({
                                validator(_, value) {
                                    console.log('name', form.getFieldValue('status'))
                                    if (!value) {
                                        return Promise.reject(delve(err,"required.name"))
                                    } else {
                                        if (value.toString().match(/^[0-9]/)) {
                                            return Promise.reject(delve(err,"other_errors.name_begin_with_letter"))
                                        } else {
                                            return Promise.resolve()
                                        }
                                    }
                                }
                            })]}
                        >
                            <Input placeholder={delve(placeholder,"name")} />
                        </Form.Item>
                    </Col>

                    {/* Societe si le visiteur travaille dans une entreprise */}

                    {
                        (statut === 'entreprise') && <Col xs={24} sm={12} lg={24} xl={12} style={{ padding: '0 5px' }}>
                            <Form.Item
                                name="societe"
                                rules={[{ required: true, message:delve(err,"required.societe")}]}
                            >
                                <Input placeholder={delve(placeholder,"societe")} />
                            </Form.Item>
                        </Col>
                    }

                </Row>


{
    /* Email et téléphone champ */
}
                <Row justify='space-between' style={{ margin: '12px 0' }}>


                    <Col xs={24} sm={12} lg={24} xl={12} style={{ padding: '0 5px' }}>
                        <Form.Item
                            name="email"
                            rules={[{ type: 'email', message: delve(err,"other_errors.valid_email")}, { required: true, message: delve(err,"required.email") }]}
                        >
                            <Input type='email' placeholder={delve(placeholder,"email")} />
                        </Form.Item>
                    </Col>


                    <Col xs={24} sm={12} lg={24} xl={12} style={{ padding: '0 5px' }}>
                        <Form.Item
                            name="tel"
                            rules={[({ }) => ({
                                validator(_, value) {
                                    console.log('tel', value)
                                    if (!value) {
                                        return Promise.reject(delve(err,"required.tel"))
                                    } else {
                                        if (!value.match(/^\+[0-9]{1,4}[0-9]{6,13}$/)) {
                                            return Promise.reject(delve(err,"required.tel"))
                                        } else {
                                            if (isNaN(value.replace('+', '').replace(' ', ''))) {
                                                return Promise.reject(delve(err,"other_errors.valid_tel"))
                                            }
                                            return Promise.resolve()
                                        }
                                    }
                                }
                            })]}
                        >
                            <Input type='tel' placeholder={delve(placeholder,"tel")} />
                        </Form.Item>
                    </Col>
                </Row>

                {
                    /* Objet du message et téléchargement de cv s'il s'agit d'un visiteur en quête d'emploi */
                }
                <Row style={{ margin: '12px 0' }}>



                    <Col xs={24} sm={selectValue === 'cv' ? 12 : 24} lg={24} xl={selectValue === 'cv' ? 12 : 24} style={{ padding: '0 5px' }} >
                        <Form.Item name={'objet'} rules={[{ required: true, message: delve(err,"required.objet")}]}>
                            <Select value={selectValue} onChange={(value) => setSelectValue(value)} className='select-objet'>
                                {
                                    selection ? selection.map(({value,label}) => {
                                        if(value === 'cv'){
                                            return (statut === 'emploi' ? <Select.Option key={value} value={value}>{label}</Select.Option> : null)
                                        } else{
                                            return <Select.Option key={value} value={value}>{label}</Select.Option>
                                        }
                                    }) : null
                                }
                            </Select>
                        </Form.Item>
                    </Col>
                    {
                        selectValue === 'cv' && statut === 'emploi' && <Col xs={24} sm={12} lg={24} xl={12} style={{ padding: '0 5px' }} >
                            <Form.Item name={'files'} rules={[({ }) => ({
                                validator(_, value) {
                                    console.log('tel', value)
                                    if (!value) {
                                        return Promise.reject(delve(err,required.file))
                                    } else {
                                        if (!value.trim().endsWith('.pdf')) {
                                            return Promise.reject(delve(err,"other_errors.file_pdf"))
                                        } else {
                                            return Promise.resolve()
                                        }
                                    }
                                }
                            })]}>
                                <Input type={'file'} name='file' accept='application/pdf' />
                            </Form.Item>
                        </Col>
                    }
                </Row>

{
    /* Textarea et button de soumission du formulaire */
}
                <Row style={{ margin: '12px 0' }}>
                    <Col xs={24} sm={24} lg={24} xl={24} style={{ padding: '0 5px' }} >
                        <Form.Item name={'message'} rules={[{ required: true, message:delve(err,"required.message")}]}>
                            <Input.TextArea placeholder={delve(placeholder,"message")} style={{ height: 150 }} />
                        </Form.Item>
                    </Col>
                </Row>

            </FadeComponent>


            <FadeComponent bottom>
                <Form.Item
                    name={'check'}
                    style={{ color: 'inherit !important' }}
                    className='checkbox'
                    initialValue={false}
                    rules={[{
                        validator: () => {
                            if (!checked) return Promise.reject(delve(err,"required.check"))
                            return Promise.resolve()
                        }
                    }]}
                >
                    <Checkbox checked={checked} onChange={e => changeCheckbox(e)}>{Check_Label_Component}</Checkbox>
                </Form.Item>
            </FadeComponent>

            {/* Gestion du recpatcha */}

            <FadeComponent right>
                <Form.Item
                    style={{ marginTop: 8 }}
                    name={'recpatcha'}
                >
                    <Recpatcha onChange={changeRecpatchaRadio} value={value} elmt={recaptchaData[key]['label']} error_recpatcha={recpatchaError && delve(err,"required.recaptcha")} />
                </Form.Item>
            </FadeComponent>

            <FadeComponent left delay={200}>
                <Form.Item wrapperCol={{ span: 10 }}>
                    <Button type="primary" htmlType="submit" style={{ margin: '15px 0', width: 130, height: 40, pointerEvents: loading ? 'none' : '' }}>
                        {
                            loading ? delve(placeholder,"submit_button_loading") : delve(placeholder,"submit_button_text")
                        }
                    </Button>
                </Form.Item>
            </FadeComponent>

        </Form>
    )
};

export default withTranslation('contact')(FormContact);

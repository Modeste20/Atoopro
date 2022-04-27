import { Alert, Button, Checkbox, Col, Form, Input, Radio, Row, Select } from 'antd';
import React, { useCallback, useMemo } from 'react';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FadeComponent } from '../../../Shared/FadeComponent/FadeComponent';
import Recpatcha from '../GoogleRecpatcha/recpatcha';
import { ThemeContext } from './../../../Shared/Context/ThemeContext/ThemeContext'
import queryString from 'query-string'
import validator from 'validator'
import './FormContact.css'

const recaptchaData = [{
    key: 'key',
    label: 'Une clé'
},
{
    key: 'airplane',
    label: 'Un avion'
},
{
    key: 'heart',
    label: 'Un coeur'
},
]

const FormContact = ({props}) => {


    const [value, setValue] = useState('')
    const [key, setKey] = useState(null)
    const [checked, setChecked] = useState(false)
    const [selectValue, setSelectValue] = useState('')

    //Gestion du status radio
    const [statut,setStatut] = useState('entreprise')

    //Loading

    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)
    const [success,setSuccess] = useState(false)


    //form

    const [form] = Form.useForm()




    const changeCheckbox = (e) => {
        setChecked(e.target.checked)
    }


    useEffect(() => {
        setKey(() => Math.round(Math.random() * 2))
        return () => setKey(null)
    }, [])


    const onFinish = async (values) => {
        setSuccess(false)
        delete values.check;
        delete values.recpatcha;
        if(values.status === undefined){
            values.status = 'entreprise'
        }
        console.log('values',values)
        if(values.status !== 'emploi'){
            //Supprimer la valeur du champ file lorsque l'utilisateur ne cherche pas un emploi
            delete values.file
        }else{
            //Supprimer la valeur du champ societe lorsque l'utilisateur cherche pas un emploi
            delete values.societe
        }
        setLoading(true)
        const formElement = document.querySelector('.atoopro-contact form.contact-form')
        console.log('Success:', values);
        const formdata =new FormData(formElement)
        for (const i in values){
            formdata.append(i,values[i])
        }
        console.log(formdata)
        try {
            const res = await fetch('http://localhost:5000/'+`contact`, {
                method: "POST",
                body: formdata
            });
            const data = await res.json()
            setLoading(false)
            console.log('data',data)
            if(data.error){
                window.scrollTo(0,0)
                setError(data.error)
            } else{
                window.scrollTo(0,0)
                setSuccess(true)
                const elmt = document.querySelector('.recaptcha .ant-radio-group .ant-radio-button-wrapper-checked')
                if(elmt){
                    elmt.classList.remove('ant-radio-button-wrapper-checked')
                }
                setKey(() => Math.round(Math.random() * 2))
                setValue('')
                setChecked(false)
                setSelectValue('demo1')
                form.setFieldsValue({
                    name:'',
                    societe:'',
                    email:'',
                    tel:'',
                    message:'',
                    objet:'demo1',
                    file:'',
                  });
            }
        } catch(error){
            console.log(error,error.message)
            setLoading(false)
            window.scrollTo(0,0)
            setKey(() => Math.round(Math.random() * 2))
            setError(" Une erreur s'est produite , veuillez réessayer ultérieurement ")
        }
        
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const { theme } = useContext(ThemeContext)

    //dynamic select value

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
                return 'demo1'
            }
        }
    }, [search])

    return (
        <Form
            name="contact-form"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 24 }}
            initialValues={{ objet }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="on"
            enctype="multipart/form-data"
            className='contact-form'
            form={form}
            id={(theme === 'light' ? 'form-contact-light' : 'form-contact-dark')}
            style={{ marginTop: 35 }}
        >
            {
              !success &&  error && <Alert style={{marginBottom:"10px !important"}} message={error} type="error" />
            }
            {
                success && <Alert style={{marginBottom:"10px !important"}} message={"Votre message a été envoyé avec succès"} type="success" />
            }
            <FadeComponent right distance='10px'>
                <Row justify='space-between' style={{ margin: error || success ? '25px 0' : '12px 0' }}>
                <Col>
                    <Form.Item
                        name='status'
                        rules={[({ }) => ({
                                validator(_, value) {
                                    console.log('tel', value)

                                    setStatut(value)

                                    if(value === 'entreprise' && form.getFieldValue('objet') === 'cv'){
                                        form.setFieldsValue({objet:'demo1'})
                                        setSelectValue('demo1')
                                    }
                                    
                                        if(value && !['emploi','entreprise'].includes(value)){
                                            return Promise.reject("Veuillez choisir l'un des statuts proposés")
                                        } else{
                                            return Promise.resolve()
                                        }
                                }
                            })]}
                    >
                        <Radio.Group defaultValue={'entreprise'}>
                            <Radio value='entreprise'>Avez-vous une entreprise ?</Radio>
                            <Radio style={{margin:'15px 0 0 0'}} value='emploi'>Recherchez-vous un emploi ?</Radio>
                        </Radio.Group>
                    </Form.Item>
                </Col>
                    <Col xs={24} sm={12} lg={24} xl={12} style={{ padding: '0 5px' }}>
                        <Form.Item
                            name="name"
                            rules={[({ }) => ({
                                validator(_, value) {
                                    console.log('name', form.getFieldValue('status'))
                                    if (!value) {
                                        return Promise.reject('Veuillez entrer votre nom')
                                    } else {
                                        if(value.toString().match(/^[0-9]/)){
                                            return Promise.reject(' Votre nom doit commencer par une lettre ')
                                        } else{
                                            return Promise.resolve()
                                        }
                                    }
                                }
                            })]}
                        >
                            <Input placeholder='Votre nom' />
                        </Form.Item>
                    </Col>
                    {
                        statut === 'entreprise' && <Col xs={24} sm={12} lg={24} xl={12} style={{ padding: '0 5px' }}>
                        <Form.Item
                            name="societe"
                            rules={[{ required: true, message: 'Veuillez entrer votre nom de société !' }]}
                        >
                            <Input placeholder='Votre société' />
                        </Form.Item>
                    </Col>
                    }
                    
                </Row>

                <Row justify='space-between' style={{ margin: '12px 0' }}>
                    <Col xs={24} sm={12} lg={24} xl={12} style={{ padding: '0 5px' }}>
                        <Form.Item
                            name="email"
                            rules={[{ type: 'email', message: 'Veuillez entrer un email correct' }, { required: true, message: 'Veuillez entrer votre email' }]}
                        >
                            <Input type='email' placeholder='Votre email' />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} lg={24} xl={12} style={{ padding: '0 5px' }}>
                        <Form.Item
                            name="tel"
                            rules={[({ }) => ({
                                validator(_, value) {
                                    console.log('tel', value)
                                    if (!value) {
                                        return Promise.reject('Veuillez entrer votre numero de téléphone')
                                    } else {
                                        if(!validator.isMobilePhone(value)){
                                            return Promise.reject('Numero de téléphone invalide')
                                        } else{
                                            return Promise.resolve()
                                        }
                                    }
                                }
                            })]}
                        >
                            <Input type='tel' placeholder='Tel (+XXXXXXXXX)' />
                        </Form.Item>
                    </Col>
                </Row>
                <Row style={{ margin: '12px 0' }}>
                    <Col xs={24} sm={selectValue === 'cv' ? 12 : 24} lg={24} xl={selectValue === 'cv' ? 12 : 24} style={{ padding: '0 5px' }} >
                        <Form.Item name={'objet'} rules={[{ required: true, message: "Quel est l'objet de votre message ?" }]}>
                            <Select placeholder='Veuillez sélectionner une option' value={selectValue} onChange={(value) => setSelectValue(value)} className='select-objet'>
                                <Select.Option value="demo1">Demo</Select.Option>
                                <Select.Option value="devis">Obtenez un devis</Select.Option>
                                {
                                    statut === 'emploi' ? <Select.Option value="cv">Déposez votre CV</Select.Option> : null
                                }
                                <Select.Option value="demo">Demo 345</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    {
                        selectValue === 'cv' && statut === 'emploi' && <Col xs={24} sm={12} lg={24} xl={12} style={{ padding: '0 5px' }} >
                            <Form.Item name={'file'} rules={[({ }) => ({
                                validator(_, value) {
                                    console.log('tel', value)
                                    if (!value) {
                                        return Promise.reject(' Veuillez télécharger un document pdf ')
                                    } else {
                                        if(!value.trim().endsWith('.pdf')){
                                            return Promise.reject(' Veuillez télécharger un document pdf ')
                                        } else{
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

                <Row style={{ margin: '12px 0' }}>
                    <Col xs={24} sm={24} lg={24} xl={24} style={{ padding: '0 5px' }} >
                        <Form.Item name={'message'} rules={[{ required: true, message: "Veuillez entrer votre message !" }]}>
                            <Input.TextArea placeholder='Entrez votre message' style={{ height: 150 }} />
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
                            if (!checked) return Promise.reject(' Veuillez accepter notre politique ')
                            return Promise.resolve()
                        }
                    }]}
                >
                    <Checkbox checked={checked} onChange={e => changeCheckbox(e)}>J'ai lu et j'accepte <Link to='/' className='link'>la politique de confidentialité</Link> de ce site</Checkbox>
                </Form.Item>
            </FadeComponent>

            <FadeComponent right>
                <Form.Item
                    style={{ marginTop: 8 }}
                    name={'recpatcha'}
                    rules={[
                        ({ }) => ({
                            validator(_) {
                                console.log(value)
                                if (!value) {
                                    setKey(() => Math.round(Math.random() * 2))
                                    return Promise.reject('Recpatha error')
                                } else {
                                    if (value !== recaptchaData[key]['key']) {
                                        setKey(() => Math.round(Math.random() * 2))
                                        return Promise.reject('Recpatha error')
                                    } else {
                                        setKey(() => Math.round(Math.random() * 2))
                                        return Promise.resolve()
                                    }
                                }
                            }
                        })
                    ]}
                >
                    <Recpatcha setValue={setValue} value={value} elmt={key ? recaptchaData[key]['label'] : recaptchaData[Math.round(Math.random() * 2)]['label']} />
                </Form.Item>
            </FadeComponent>

            <FadeComponent left delay={200}>
                <Form.Item wrapperCol={{ span: 10 }}>
                    <Button type="primary" htmlType="submit" style={{ margin: '15px 0', width: 130, height: 40 , pointerEvents:loading ? 'none' : '' }}>
                    {
                        loading ? 'Loading ...' : 'Envoyer'
                    }
                    </Button>
                </Form.Item>
            </FadeComponent>

        </Form>
    )
};

export default FormContact;

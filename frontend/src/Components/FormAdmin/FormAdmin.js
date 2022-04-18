import React,{useState} from 'react'
import { Form, Input, Button, Checkbox , Alert } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'antd/lib/form/Form';

const inscriptionFetch = async (values,setError,setLoading,form) => {

    try {
        const res = await fetch('http://localhost:5000/users',{
            method:'post',
            body:JSON.stringify(values),
            headers:{
                "Content-Type":"application/json"
            }
        })

        const data = await res.json()

        setLoading(false)

        console.log(data)

        if(data.error){
            window.scrollTo(0,0)
            if(data.error === 'form'){
                setError('Assurez-vous de bien remplir le formulaire')
            } else{
                if(data.error === 'hash'){
                    setError(" Une erreure s'est produite ")
                } else{
                    if(data.error === 'user-exist'){
                        setError("L'adresse email saisi correspond déjà à un compte utilisateur")
                    }
                }
            }
        } else{
            window.scrollTo(0,0)
            if(data.data){
                setError(null)
                form.setFieldsValue({
                    username:'',
                    mail:'',
                    password:'',
                    'repeat-password':''
                })
            }
        }
    } catch(err){
        window.scrollTo(0,0)
        setLoading(false)
        setError("Une erreure s'est produite , veuillez réessayer ultérieurement")
    }
}


const ConnexionFetch = async (values,setError,setLoading)=>{

    try {
        const res = await fetch('http://localhost:5000/users/login',{
            method:'post',
            body:JSON.stringify(values),
            headers:{
                "Content-Type":"application/json"
            }
        })
        const data = await res.json()
        setLoading(false)
        console.log('data',data)
        if(data && data.error){
            if(data.error === 'form'){
                window.scrollTo(0,0)
                setError("Veuillez entrer l'email et le mot de passe de votre compte administrateur")
            }else{
                if(data.error === 'no-account'){
                    window.scrollTo(0,0)
                    setError("L'email ou le mot de passe entré ne correspond à aucun compte admin")
                }
            }
        } else{
            if(data && data.token){
                sessionStorage.setItem('token',data.token);
                window.location.reload()
            }
        }

    } catch(error){
        window.scrollTo(0,0)
        setLoading(false)
        console.log(error)
        setError("Une erreur s'est produite , réessayer ultérieurement")
    }
}

const FormAdmin = ({ inscription }) => {

    const [form] = useForm()

    const [error,setError] = useState('')
    const [loading,setLoading] = useState(false)


    const onFinish = async (values) => {
        console.log('Success:', values);
        delete values['repeat-password']
        //setLoading(true)
        setError('')

        if(inscription){
            inscriptionFetch(values,setError,setLoading,form)
        } else{
            ConnexionFetch(values,setError,setLoading)
        }
        
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            name="form"
            form={form}
            initialValues={{
                username: '',
                password: ''
            }}
            onFinish={onFinish}
            id='form'
            onFinishFailed={onFinishFailed}
        >
        {
            error === null && <Alert style={{marginBottom:35}} message='Compte administrateur créé' type='success' />
        }

        {
            error && <Alert style={{marginBottom:35}} message={error} type='error' />
        }

            {
                inscription && <Form.Item
                    label="Votre nom d'utilisateur : "
                    name="username"
                    style={{ marginBottom: 35 }}
                    className='field field-username'
                    rules={[({ }) => ({
                        validator(_, value) {
                            console.log('tel', value)
                            if (!value) {
                                return Promise.reject("Veuillez entrer votre nom d'utilisateur")
                            } else {
                                if (!value.match(/^[A-Z,a-z]+.*$/)) {
                                    return Promise.reject("Le nom d'utilisateur doit commencer par une lettre")
                                }
                                else {

                                    if (value.length <= 4) {
                                        return Promise.reject("Le nom d'utilisateur doit comporter plus de 4caractères")
                                    }
                                    return Promise.resolve()
                                }
                            }
                        }
                    })]}
                >
                    <Input />
                </Form.Item>
            }

            <Form.Item
                label="Votre email : "
                name="mail"
                style={{ marginBottom: 35 }}
                className='field field-mail'
                rules={inscription ? [
                    {
                        required: true,
                        message: 'Veuillez entrer votre email',
                    },
                    {
                        type: 'email',
                        message: 'Veuilez entrer un email valide'
                    }
                ] : [{
                        required: true,
                        message: 'Veuillez entrer votre email',
                    },]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Votre mot de passe : "
                name="password"
                className='field field-password'
                style={{ marginBottom: 20 }}
                rules={inscription ? [({ }) => ({
                    validator(_, value) {
                        if (!value) {
                            return Promise.reject(' Veuillez entrer votre mot de passe')
                        } else {
                            if (!value.match(/[A-Z]{1}.*[A-Z]{1}/)) {
                                return Promise.reject(" Votre mot de passe doit comporter au moins 2 lettres majuscules ")
                            } else {
                                if (!value.match(/[0-9]{1}.*[0-9]{1}.*[0-9]{1}/)) {
                                    return Promise.reject(" Votre mot de passe doit comporter au moins 3 chiffres ")
                                }
                                else {
                                    if (value.length < 9) {
                                        return Promise.reject(' Votre mot de passe doit comporter au minimum 10 caractères')
                                    }
                                    return Promise.resolve()
                                }
                            }
                        }
                    }
                })] : [{
                    required:true,
                    message:'Veuillez entre votre mot de passe'
                }]}
            >
                <Input.Password />
            </Form.Item>

            {
                inscription && 
                <Form.Item
                label="Répéter votre mot de passe : "
                name="repeat-password"
                className='field field-repeat-password'
                style={{ marginBottom: 20 }}
                rules={[({ }) => ({
                    validator(_, value) {
                        console.log('pass',form.getFieldValue('password'))
                        if(value !== form.getFieldValue('password')){
                            return Promise.reject('Mot de passe imcompatible')
                        } else{
                            return Promise.resolve()
                        }
                    }
                })]}
            >
                <Input.Password />
            </Form.Item>
            }

            <Form.Item
                wrapperCol={{
                    xs: 10,
                    md: 24,
                }}
                style={{ marginBottom: 0 }}
            >
                <Button style={{pointerEvents:loading?'none' : ''}} type="primary" htmlType="submit" className='submit'>
                    {loading ? 'Loading...' : 'Submit'}
                </Button>
            </Form.Item>
            {
                !inscription && <p>
                Vous n'avez pas encore de compte administrateur ,<Link to='/'> Inscrivez-vous ! </Link>
            </p>
            }
            
        </Form>
    );
};

export default FormAdmin
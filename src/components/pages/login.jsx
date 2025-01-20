import React from 'react'
import Head from '../views/global/Head'
import Foot from '../views/global/Foot'
import css from '../../styles/form.css'
import InputComponent from '../comps/input'

const {FormContainer} = css

const Login = () => {
    return (
        <React.Fragment>
            <Head></Head>
            <FormContainer>
                <InputComponent placeholder={"Введите Ваш логин"}/>
                <InputComponent placeholder={"Введите Ваш пароль"}/>
                <InputComponent placeholder={"Введите ну хоть что-нибудь пилядь!"}/>
            </FormContainer>
            <Foot></Foot>
        </React.Fragment>
    )
}

export default Login


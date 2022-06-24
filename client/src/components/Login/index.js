import React, { useState } from 'react'
import { 
    Container,
    FormWrap,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormButton,
    Msg
} from './LoginElements'
import TextField from '@mui/material/TextField';
import axios from 'axios';

function Login() {
    const [usernameL, setUsernameL] = useState('')
    const [passwordL, setPasswordL] = useState('')
    const [LoginStatus, setLoginStatus] = useState('')

    const login = () => {
        axios.post('http://localhost:3001/login',{username: usernameL, password: passwordL}).then((response) => {

            if (response.data.message) {
               setLoginStatus(response.data.message)
            }
            else {
                setLoginStatus('Zalogowano pomyślnie')
            }

        });
      }

  return (
    <>
    <Container>
        <FormWrap>
            <FormContent>
                <Form action="#">
                    <FormH1>Zaloguj się</FormH1>
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <TextField onChange={(e)=> {setUsernameL(e.target.value);}} variant="outlined" required />
                    <FormLabel htmlFor='for'>Hasło</FormLabel>
                    <TextField onChange={(e)=> {setPasswordL(e.target.value);}} variant="outlined" type='password' />
                    <FormButton type='submit' onClick={login}>Zaloguj się</FormButton> 
                    <Msg>{LoginStatus}</Msg>
                </Form>
            </FormContent>
        </FormWrap>
    </Container>
    </>
  )
}

export default Login
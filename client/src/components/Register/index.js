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
} from './RegisterElements'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import axios from 'axios';

function Register() {
  const [usernameR, setUsernameR] = useState('')
  const [passwordR, setPasswordR] = useState('')
  const [RegStatus, setRegStatus] = useState('')

  const register = () => {
    axios.post('http://localhost:3001/register',{username: usernameR, password: passwordR}).then((response) => {

      if (response.data.message) {
        setRegStatus(response.data.message)
     }
     else {
         setRegStatus('Konto zostało utworzone')
     }

 });
}

  return (
    <>
    <Container>
        <FormWrap>
            <FormContent>
                <Form action="#">
                    <FormH1>Załóż konto</FormH1>
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <TextField 
                      onChange={(e)=> {setUsernameR(e.target.value);}} 
                      variant="outlined" 
                      required />
                    <FormLabel htmlFor='for'>Hasło</FormLabel>
                    <TextField 
                      onChange={(e)=> {setPasswordR(e.target.value);}} 
                      variant="outlined" 
                      type='password' />
                    <FormLabel>Płeć</FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="none"
                      required
                      name="radio-buttons-group">
                      <FormControlLabel value="female" disabled control={<Radio />} label="Kobieta" />
                      <FormControlLabel value="male" disabled control={<Radio />} label="Mężczyzna" />
                    </RadioGroup>
                    <FormButton type='submit' onClick={register}>Zarejestruj się</FormButton> 
                    <Msg>{RegStatus}</Msg>
                </Form>
            </FormContent>
        </FormWrap>
    </Container>
    </>
  )
}

export default Register
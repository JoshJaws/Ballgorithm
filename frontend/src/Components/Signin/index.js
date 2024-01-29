import React from 'react'
import { Container, Form, FormContent, FormH1, FormButton, Text, FormInput, FormLabel, FormWrap, Icon, Text2 } from './SigninElements'

const SignIn = () => {
    return (
        <>
        <Container>
            <FormWrap>
                <Icon to="/">Ball play</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Sign in to your account</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type='password' required />
                        <Text2 to='/account-recovery'>Forgot Password?</Text2>
                        <FormButton type='submit'>Continue</FormButton>
                        <Text to='/signup'>New User? Sign up</Text>
                    </Form>
                </FormContent>
            </FormWrap>            
        </Container>
        </>
    );
};

export default SignIn;
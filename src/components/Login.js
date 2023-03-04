import {Container,VStack,HStack,Text,Button,Heading,Input} from "@chakra-ui/react"
import React from 'react'
import {Link} from "react-router-dom"

const Login = () => {
  return (
    <Container  maxW={"container.xl"} h={"100vh"}  p={"16"}>
    <form >
        <VStack alignItems={"stretch"} spacing={"8"} w={['full','96']} m={"auto"} my={"16"}>
            <Heading>Welcome Back</Heading>

            <Input placeholder={"Email"} type={"email"} focusBorderColor={"purple"} required/>

            <Input placeholder={"Password"} type={"password"} focusBorderColor={"purple"} required/>

            <Button variant={"link"} alignSelf={"flex-end"}>
                <Link to={"/forgetpassword"} >Forget Password</Link>
            </Button>

            <Button colorScheme={"purple"} type={"submit"}>LogIn</Button>

            <Text textAlign={"right"}>New User?{' '}
            <Button variant={"link"}   colorScheme={"purple"}>
                <Link to={"/signup"} >SignUp </Link>
            </Button></Text>

        </VStack>
    </form>
    </Container>
  )
}

export default Login
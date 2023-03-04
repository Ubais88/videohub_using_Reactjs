import {Container,VStack,HStack,Text,Button,Heading,Input, Avatar} from "@chakra-ui/react"
import React from 'react'
import {Link} from "react-router-dom"

const Signup = () => {
  return (
    <Container  maxW={"container.xl"} h={"100vh"} paddingTop={"0"}>
    <form >
    
        <VStack alignItems={"stretch"} spacing={"8"} w={['full','96']} m={"auto"} my={"16"}>

            <Heading alignSelf={'center'}>VIDEO HUB</Heading>
            <Avatar alignSelf={'center'} boxSize={'32'}/>

            <Input placeholder={"Name"} type={"text"} focusBorderColor={"purple"} required/>

            <Input placeholder={"Email"} type={"email"} focusBorderColor={"purple"} required/>

            <Input placeholder={"Password"} type={"password"} focusBorderColor={"purple"} required/>

            <Button colorScheme={"purple"} type={"submit"}>SignUp</Button>

            <Text textAlign={"right"}>Already Signup?{' '}
            <Button variant={"link"}   colorScheme={"purple"}>
                <Link to={"/login"} >Login </Link>
            </Button></Text>

        </VStack>
    </form>
    </Container>
  )
}

export default Signup
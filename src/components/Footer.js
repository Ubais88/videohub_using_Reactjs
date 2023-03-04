import React from 'react'
import {Box,Stack,Input,VStack,Heading,HStack,Button,Text} from "@chakra-ui/react"
import {AiOutlineSend} from "react-icons/ai"

const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} minH={"40"} p="16" color={"white"}>
        <Stack direction={["column","row"]}>
        <VStack alignItems={"stretch"} w={"full"} px="4">
                <Heading size="md" textTransform={"uppercase"} textAlign={["center","left"]} >
                    subscribe to Get Updates
                </Heading>

        <HStack borderBottom={"2px solid white"} py ={"2"}>

            <Input placeholder='Enter Email Here...' border={"none"}
                borderRadius={"none"}
                outline={"none"}
                focusBorderColor={"none"}
            />

            <Button p="0" colorScheme={"purple"} variant={"ghost"} borderRadius={"0 20px 20px 0"} >

                <AiOutlineSend size={20}/>

            </Button>
        </HStack>
        </VStack>

        <VStack w={"full"} borderLeft={["none","1px solid white"]}
        borderRight={["none","1px solid white"]} >
        <Heading size="md" textTransform={"uppercase"} textAlign={"center"}>video hub

        </Heading>
        <Text>All Rights Reeived</Text>

        </VStack>

        <VStack w={"full"}>
        <Heading size={"md"} textTransform={"uppercase"}>
            Social Media
        </Heading>
        <Button varient={"link"} color={"whiteAlpha"}>
            <a target={"blank"} href="www.youtube.com">Youtube</a>
        </Button>

        <Button varient={"link"} color={"whiteAlpha"}>
            <a target={"blank"} href="https://instagram.co/i__am__ub">Instagram</a>
        </Button>

        <Button varient={"link"} color={"whiteAlpha"}>
            <a target={"blank"} href="https://github.com/Ubais2143">GitHub</a>
        </Button>
            
        </VStack>

        </Stack>
    </Box>
  )
}

export default Footer
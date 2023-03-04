import React from 'react'
import {Box, Container, Heading, Image, Stack, Text} from "@chakra-ui/react"
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img4 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img1 from "../assets/4.jpg";
import img5 from "../assets/5.png";

const headingOptions = {
    pos:"absolute",
    left:"50%",
    top:"50%",
    transform:"translate(-50%, -50%)",
    textTransform:"uppercase",
    padding:"4",
    size:"4xl"
}

const Home = () => {
  return (
    <>
        <Box>
                <MyCarousel />

                <Container minH={"100vh"} p="16" maxW= {'container.xl'}>
                    <Heading textTransform={"unset"} py="2" w ={"fit-content"} borderBottom={"2px solid"} m="auto"
                    >Services</Heading>

                    <Stack h={"full"} p={"4"} alignItems={"center"} direction={['column','row']}>
                        <Image src={img5} h={['40','400']} filter={"hue-rotate(-130deg)"}/>

                        <Text letterSpacing={"widest"}
                        lineHeight={"190%"}
                        p={["4","16"]} textAlign={"center"}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti natus aspernatur odio voluptate, accusamus earum rerum iste a voluptates doloremque quod voluptatem officia architecto reprehenderit. Dolorem tenetur illum excepturi doloribus delectus sit esse ab, culpa, nisi voluptatum reprehenderit aliquam perspiciatis quibusdam veniam architecto quam. Error, qui atque maxime aliquid vitae quis repellendus dolore earum debitis exercitationem quos provident sapiente vel ducimus maiores excepturi, delectus obcaecati repellat! Iste quo unde cum iusto. Natus, ad ut vero velit nesciunt deserunt, veritatis hic voluptatum nemo voluptatibus sapiente nam rerum. Quos architecto, deleniti quam facere cupiditate accusantium nobis sint voluptatibus quidem non quae iste voluptatum obcaecati. Necessitatibus, atque nesciunt iusto assumenda tenetur veniam sed dolorem! Cupiditate voluptatibus, qui voluptate officiis quisquam consectetur culpa ex voluptatum sequi. Molestias totam rem nam, exercitationem animi dolorem harum molestiae, ipsam quas, veniam nostrum adipisci ratione quam incidunt repellendus placeat deleniti similique reprehenderit error possimus ipsum! Eaque rerum placeat repellendus eligendi architecto explicabo cupiditate a adipisci nihil, nobis consectetur eos voluptatum autem maxime dignissimos modi, repellat voluptas voluptates ipsa error blanditiis aperiam vitae! Corrupti laudantium qui cupiditate, voluptate impedit dolore mollitia debitis, aliquam asperiores pariatur a totam magnam eos nesciunt at tempore? Fuga, aspernatur. Culpa voluptatum commodi voluptate harum.
                        </Text>
                    </Stack>
                </Container>
        </Box>
    </>
  )
}

const MyCarousel = () => (
    <Carousel autoplay
    infiniteLoop
    interval= {1000} 
    showStatus={false}
    showThumbs={false}
    showArrows={false}
    >

    <Box w="full" h={"100vh"}>
        <Image src={img1} h='full' w={"full"} objectFit={"cover"} />
        <Heading bgColor={"blackAlpha.700"} color={"white"} {...headingOptions}>
            Watch The Future
        </Heading>
    </Box>

    <Box w="full" h={"100vh"}>
        <Image src={img2} h='full' w={"full"} objectFit={"cover"}/>
        <Heading bgColor={"whiteAlpha.700"} color={"black"} {...headingOptions}>
            Future Is Gaming
        </Heading>
    </Box>

    <Box w="full" h={"100vh"}>
        <Image src={img3} h='full' w={"full"} objectFit={"cover"}/>
        <Heading bgColor={"whiteAlpha.700"} color={"black"} {...headingOptions}>
            Gaming on Console
        </Heading>
    </Box>

    <Box w="full" h={"100vh"}>
        <Image src={img4} h='full' w={"full"} objectFit={"cover"}/>
        <Heading bgColor={"whiteAlpha.700"} color={"black"} {...headingOptions}>
            Night life is cool
        </Heading>
    </Box>

    </Carousel>
)

export default Home
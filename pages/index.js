import NextLink from 'next/link'
import { Container, Heading, Flex, Stack, Button } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container maxW={"1200px"}>
      <Flex h={"80vh"} alignItems={"center"} justifyContent={"center"}>
        <Stack spacing={4} align={"center"}>
          <Heading>Rarity_Marketplace</Heading>
          <Button
            as={NextLink} href='/buy'
          >Shop NFTs</Button>
        </Stack>
      </Flex>
    </Container>
  );
}

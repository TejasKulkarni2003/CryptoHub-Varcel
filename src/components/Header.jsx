import React from 'react'
import {Link} from 'react-router-dom'
import { Button, HStack } from '@chakra-ui/react';

const Header = () => {
  return (
    <>
        <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"} justifyContent={'space-evenly'} style={{backgroundImage: "linear-gradient(#03030366,#195b5a)"}}>
            <Button variant={"unstyled"} color={"white"} borderBottom={"2px solid"}>
                <Link to="/">Home</Link>
            </Button>
            <Button variant={"unstyled"} color={"white"} borderBottom={"2px solid"}>
                <Link to="/exchanges">Exchanges</Link>
            </Button>
            <Button variant={"unstyled"} color={"white"} borderBottom={"2px solid"}>
                <Link to="/coins">Coins</Link>
            </Button>
        </HStack>
    </>
  )
}

export default Header
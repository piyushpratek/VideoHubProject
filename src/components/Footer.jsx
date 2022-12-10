import React from 'react';

import {
  Box,
  Stack,
  VStack,
  Heading,
  HStack,
  Button,
  Input,
  Text,
} from '@chakra-ui/react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
          <Heading
            size="md"
            textTransform={'uppercase'}
            textAlign={['center', 'left']}
          >
            Subscribe To Get New Updates
          </Heading>
          <HStack borderBottom={'2px solid white'} py="2">
            <Input
              placeholder="Enter Email Here..."
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor="none"
            />
            <Button
              p={'0'}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size="20" />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textTransform={'uppercase'} textAlign={'center'}>
            VIDEO HUB
          </Heading>
          <Text>@All Rights Reserved</Text>
        </VStack>

        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading size={'md'} textTransform={'uppercase'}>
            Social Media
          </Heading>
          <Button variant={'link'} colorScheme={'purple'}>
            <a
              target={'blank'}
              href="https://www.youtube.com/@piyushprateek5076"
            >
              Youtube
            </a>
          </Button>
          <Button variant={'link'} colorScheme={'purple'}>
            <a target={'blank'} href="https://www.instagram.com/">
              Instagram
            </a>
          </Button>
          <Button variant={'link'} colorScheme={'purple'}>
            <a
              target={'blank'}
              href="https://www.linkedin.com/in/piyush-prateek-9a922912b"
            >
              Linkedin
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;

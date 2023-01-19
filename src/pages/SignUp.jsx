import {
  Box,
  Button,
  Center,
  FormControl,
  Input,
  Text,
  useToast,
  VStack,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { register } from '../redux/auth/auth.actions'
import { useEffect } from 'react'

const initState = {
  email: '',
  password: '',
}

function SignUp() {
  const dispatch = useDispatch()
  const [input, setInput] = useState(initState)
  const toast = useToast()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.email === '' || input.password === '') {
      return toast({
        title: 'Input Error',
        description: 'Please fill all input fields',
        duration: 4000,
        isClosable: true,
        status: 'warning',
        position: 'top',
      })
    }
    dispatch(register(input))
    navigate('/')
  }

  return (
    <Center w={'full'} h="100vh">
      <VStack
        onSubmit={handleSubmit}
        as={'form'}
        w={'500px'}
        h="400px"
        padding={'20px'}
        boxShadow={'2xl'}
        alignItems={'center'}
        spacing={'20px'}
      >
        <Text w={'full'} textAlign="center">
          Signup
        </Text>
        <FormControl>
          <Input
            value={input.email}
            onChange={({ target: { value } }) =>
              setInput({ ...input, email: value })
            }
            placeholder="email"
          />
        </FormControl>
        <FormControl>
          <Input
            value={input.password}
            onChange={({ target: { value } }) =>
              setInput({ ...input, password: value })
            }
            type={'password'}
            placeholder="password"
          />
        </FormControl>
        <Button type="submit">Signup </Button>
        <Text>
          click to{' '}
          <Box as="span" textDecor={'underline'} cursor="pointer">
            <Link to={'/login'}>Login</Link>
          </Box>
        </Text>
      </VStack>
    </Center>
  )
}

export default SignUp

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
import { login } from '../redux/auth/auth.actions'
import { useEffect } from 'react'

const initState = {
  email: '',
  password: '',
}

const Login = () => {
  const dispatch = useDispatch()
  const [input, setInput] = useState(initState)
  const toast = useToast()
  const { loading, error, token } = useSelector((s) => s.auth)
  const navigate = useNavigate()

  useEffect(() => {
    if (!loading && token) {
      toast({
        title: 'Register Info',
        description: 'Register success',
        duration: 4000,
        isClosable: true,
        status: 'success',
        position: 'top',
      })
      navigate('/bugtracker')
    }
    if (error) {
      toast({
        title: 'Register error',
        description: 'Registeration failed!',
        duration: 4000,
        isClosable: true,
        status: 'error',
        position: 'top',
      })
    }
  }, [loading, error, token])

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
    dispatch(login(input))
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
          Login
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
        <Button type="submit">Login </Button>
        <Text>
          click to{' '}
          <Box as="span" textDecor={'underline'} cursor="pointer">
            <Link to={'/login'}>Signup</Link>
          </Box>
        </Text>
      </VStack>
    </Center>
  )
}

export default Login

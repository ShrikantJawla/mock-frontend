import { Button, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Bug from './Bug'
import { Droppable } from 'react-beautiful-dnd'
import { useDispatch } from 'react-redux'
import { addBug } from '../redux/bug/bug.actions'
import { useSelector } from 'react-redux'

const BugDiv = ({ coloumnId, status }) => {
  const dispatch = useDispatch()
  const { bugs } = useSelector((s) => s.bugs)
  return (
    <Droppable droppableId={coloumnId}>
      {(provided) => (
        <VStack
          ref={provided.innerRef}
          {...provided.droppableProps}
          w="24%"
          h={'500px'}
          boxShadow="xl"
          border={'1px solid black'}
        >
          <HStack w={'full'}>
            <Button onClick={() => dispatch(addBug({ status }))} h="40px">
              Add Bug
            </Button>
          </HStack>
          <Text
            w={'full'}
            h="30px"
            bg={'red'}
            fontWeight="bold"
            color="white"
            display={'flex'}
            justifyContent="center"
            alignItems={'center'}
          ></Text>
          {bugs.map((bug, ind) => (
            <Bug />
          ))}
          {/* {provided.placeholder} */}
        </VStack>
      )}
    </Droppable>
  )
}

export default BugDiv

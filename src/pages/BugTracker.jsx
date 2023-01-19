import { HStack, VStack } from '@chakra-ui/react'
import React from 'react'
import BugDiv from '../components/BugDiv'
import { DragDropContext } from 'react-beautiful-dnd'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllBug } from '../redux/bug/bug.actions'

const BugTracker = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllBug())
  }, [])
  const handleDragEnd = () => {}
  return (
    <VStack w={'full'} h="100vh">
      <HStack
        w={'95%'}
        h="fit-content"
        m="auto"
        boxShadow={'xl'}
        justify={'center'}
        alignItems="center"
      >
        {/* 1th div */}
        <DragDropContext onDragEnd={handleDragEnd}>
          <BugDiv coloumnId={1} status={'critical'} />
        </DragDropContext>
        {/* 2th div */}
        <DragDropContext>
          <BugDiv coloumnId={2} status={'major'} />
        </DragDropContext>
        {/* 3th div */}
        <DragDropContext>
          <BugDiv coloumnId={3} status={'medium'} />
        </DragDropContext>
        {/* 4th div */}
        <DragDropContext>
          <BugDiv coloumnId={4} status={'low'} />
        </DragDropContext>
      </HStack>
    </VStack>
  )
}

export default BugTracker

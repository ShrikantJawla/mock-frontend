import { Text } from '@chakra-ui/react'
import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

const Bug = ({ ind, id }) => {
  return (
    <Draggable draggableId={id} index={ind}>
      {(provided) => (
        <Text
          {...provided.draggableProps}
          ref={provided.innerRef}
          w={'90%'}
          h={'60px'}
          bg={'red'}
          rounded={'2xl'}
          fontWeight="bold"
          color="white"
          display={'flex'}
          justifyContent="center"
          alignItems={'center'}
        >
          I am a bug
        </Text>
      )}
    </Draggable>
  )
}

export default Bug

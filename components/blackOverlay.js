import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Center,
  useColorModeValue
} from '@chakra-ui/react'
import { useEffect } from 'react'

function blackOverlay({ open, close, children }) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const closeModal = () => {
    close()
    onClose()
  }

  useEffect(() => {
    open ? onOpen() : closeModal()
  })
  return (
    <>
      <Modal isOpen={isOpen} closeOnOverlayClick={false} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent
          maxWidth="none"
          my={0}
          bg="transparent"
          boxShadow="none"
          pt={2}
        >
          <ModalCloseButton
            top={14}
            outline={useColorModeValue(
              '2px solid #ffffff',
              '2px solid #8c8c8c'
            )}
            color={useColorModeValue('whiteAlpha.900', '#8c8c8c')}
          />
          <ModalBody
            mx={{ base: 0, md: 10 }}
            mt={{ base: 0, md: 3 }}
            pt={{ base: 10, md: 10 }}
          >
            <Center>{children}</Center>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
export default blackOverlay

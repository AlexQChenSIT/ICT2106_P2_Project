import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, ModalCloseButton, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function ModalButton(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button onClick={onOpen} ml={2} colorScheme="whatsapp">{props.title}</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{props.title}</ModalHeader>
                    
                    <ModalCloseButton />
                    <ModalBody>
                        {props.text}
                        
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='solid' colorScheme="orange"><Link to="/troubleshooters">Troubleshoot</Link></Button>
                        
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
export default ModalButton;

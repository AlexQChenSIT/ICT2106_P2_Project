import React from 'react'
import {
    Select,
    Button,
    Flex,
    Container,
} from '@chakra-ui/react'
import {
    DownloadIcon,
} from '@chakra-ui/icons'

function EfficiencyTable() {
    return (
        <>
            <Container>
                <Flex>
                    <Select placeholder='Select Device'>
                        <option value='option1'>Device 1</option>
                        <option value='option2'>Device 2</option>
                        <option value='option3'>Device 3</option>
                    </Select>
                    <Button ml={10} px={12} py={5}>
                        <DownloadIcon mr={4} />Download</Button>
                </Flex>
            </Container>
        </>
    )
}

export default EfficiencyTable
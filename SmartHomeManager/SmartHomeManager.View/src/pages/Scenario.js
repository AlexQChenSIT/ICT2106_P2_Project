import {
	Heading,
	Box,
	Menu,
	MenuItem,
	MenuButton,
	Divider,
	MenuList,
	Button,
	Input,
	useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import JsonToTable from "components/Automation/JsonToTable";
import ModalButton from "components/Automation/ModalButton";
import axios from "axios";

export default function Scenarios() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [ allRules, setAllRules] = useState([])
	useEffect(()=>{
		async function getAllRules(){
			const response = await axios(
				`https://localhost:7140/api/Rules/GetAllRules`
			)
			const details = await response.data
			console.log(details);
			setAllRules(details)
			return
		}
		getAllRules().then(()=>{
			console.log("all rules")
		})
		.catch((error)=>{
			console.log(error);
		})
	},[])
	return (
		<Box padding="16">
			<Heading alignContent="center">Profile : Wen Jun</Heading>
			<Input placeholder="Voice Control" display="inline-block" />

			<Box h="60px">
				<Menu isLazy>
					<MenuButton
						margin = "2"
						as={Button}
						variant="solid"
						backgroundColor="gray.300"
						color="black"
					>
						{" "}
						Default
					</MenuButton>
					<MenuList>
						{/* MenuItems are not rendered unless Menu is open */}
						<MenuItem>Default</MenuItem>
						<MenuItem>Romantic</MenuItem>
						<MenuItem>Chinese New Year</MenuItem>
						<MenuItem>Add More (+) </MenuItem>
					</MenuList>
				</Menu>
			</Box>
			<JsonToTable ruleData = {allRules}/>
			<Box padding="3" display="flex">
				<Box width="50%" display="flex" justifyContent="flex-start">
					<Button ml={2} colorScheme="whatsapp">
						Add Scenario
					</Button>
					<Button ml={2} colorScheme="whatsapp">
						<Link to="/scenario/create/time-rule">Add Rule</Link>
					</Button>
				</Box>
				<Box width="50%" display="flex" justifyContent="flex-start">
					<Button ml={2} colorScheme="whatsapp">
						Export Scenario
					</Button>
					<ModalButton
						title="Import File"
						text="Room.json"
						action="Upload"
					/>
					<ModalButton
						title="Simulate Clash"
						text="This rule will clash with another rule to turn on device at 1500."
						action="override"
					/>
					<ModalButton
						title="Simulate Troubleshooting"
						text="You fan seems to be unable to oscilate, please check if something is blocking it."
						action="Try again"
					/>
				</Box>
			</Box>
		</Box>
	);
}

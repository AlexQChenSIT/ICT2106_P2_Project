import React from 'react'
import {
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Box,
    Center,
    Container,
    Text,
    Heading,
    Button,
} from '@chakra-ui/react';
import CarbonChart from './CarbonChart';
import UsageBar from './UsageBar';
import Report from './Report';
import { EfficiencyBar } from './EfficiencyBar';


function AnalyticsTab() {
    return (
        <Tabs isFitted variant='enclosed'>
            <TabList mb='1em'>
                <Tab>Carbon Footprint</Tab>
                <Tab>Energy Usage</Tab>
                <Tab>Energy Efficiency</Tab>
                <Tab>Report</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <CarbonChart />
                </TabPanel>
                <TabPanel>
                    <UsageBar />
                </TabPanel>
                <TabPanel>
                    <EfficiencyBar />
                </TabPanel>
                <TabPanel>
                    <Report />
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}

export default AnalyticsTab
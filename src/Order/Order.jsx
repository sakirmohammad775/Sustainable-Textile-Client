import React, { useState } from 'react';
import orderCoverImg from "../assets/1_W34LpsdOb7TbOyKctoSm6w.jpg"
import Cover from '../Shared/Cover/Cover';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'

const Order = () => {
    const [tabIndex,setTabIndex]=useState(0)
    return (
        <div className='pt-20'>
            <Cover img={orderCoverImg} title="Polyester"></Cover>
            {/* tabs */}
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Cotton</Tab>
                    <Tab>Polyester</Tab>
                </TabList>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;
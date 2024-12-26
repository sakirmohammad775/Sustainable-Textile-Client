import React, { useId, useState } from 'react';
import orderCoverImg from "../assets/1_W34LpsdOb7TbOyKctoSm6w.jpg"
import Cover from '../Shared/Cover/Cover';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'
import useItem from '../Hooks/useItem';
import OrderTab from './OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    const categories=['cotton','polyester','nylon','denim']
    const {category}=useParams()
    const initialIndex=categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [item] = useItem()

  
    const cotton = item.filter(item => item.category === "Cotton")
    const polyester = item.filter(item => item.category === "Polyester")
    const nylon = item.filter(item => item.category === "Nylon")
    const denim = item.filter(item => item.category === "Denim")
    return (
        <div className='pt-20'>
            <Helmet>
                <title>Sustainable | Order</title>
            </Helmet>
            <Cover img={orderCoverImg} title="Polyester"></Cover>
            {/* tabs */}
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Cotton</Tab>
                    <Tab>Polyester</Tab>
                    <Tab>Nylon</Tab>
                    <Tab>Denim</Tab>
                </TabList>
                <TabPanel><OrderTab items={cotton}>
                </OrderTab> </TabPanel>
                <TabPanel><OrderTab items={polyester}>
                </OrderTab> </TabPanel>
                <TabPanel><OrderTab items={nylon}>
                </OrderTab> </TabPanel>
                <TabPanel><OrderTab items={denim}>
                </OrderTab> </TabPanel>

            </Tabs>
        </div>
    );
};

export default Order;
import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Component/SectionTitle/SectionTitle';
import Item from '../../Shared/Item/Item';

const PopularItem = () => {
    const [item, setItem] = useState([])
    useEffect(() => { // 
        fetch('item.json') // fetch data from json file
            .then(res => res.json()) // convert data to json
            .then(data => {
                const popularItem = data.filter(item => item.category === 'Popular') // filter data
                setItem(popularItem)
            }) // log data to console
    }, [])
    return (
        <section>
            <SectionTitle heading="From Our Brand" subHeading="Popular">

            </SectionTitle>
            <div className="grid grid-cols-2">
                {
                    item.map(item => <Item key={item.id}
                        item={item}>

                    </Item>)
                }
            </div>
        </section>
    );
};

export default PopularItem;
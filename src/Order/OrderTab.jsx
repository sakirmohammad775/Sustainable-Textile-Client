import React from 'react';
import ItemCard from '../Component/ItemCard/ItemCard';

const OrderTab = ({items}) => {
    return (
        <>
            <div className='grid md:grid-cols-3 gap-10'>

                {
                    items.map(item => <ItemCard key={item.id} item={item}></ItemCard>)
                }
            </div>
        </>
    );
};

export default OrderTab;
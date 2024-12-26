import React from 'react';
import Item from '../../Shared/Item/Item';
import Cover from '../../Shared/Cover/Cover';

const ProductsCategory = ({ items, title, coverImg }) => {
    return (
        <>
            <div className='pt-8'>
           {title && <Cover img={coverImg} title="Our Products"></Cover>}
                <div className="grid grid-cols-2 gap-10">
                    {
                        items.map(item => <Item key={item.id}
                            item={item}>

                        </Item>)
                    }
                </div>
            </div>
        </>
    );
};

export default ProductsCategory;
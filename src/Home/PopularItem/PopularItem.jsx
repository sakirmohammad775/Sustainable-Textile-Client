
import SectionTitle from '../../Component/SectionTitle/SectionTitle';
import Item from '../../Shared/Item/Item';
import useItem from '../../Hooks/useItem';

const PopularItem = () => {
    const [item]=useItem()
    const popular=item.filter(item=>item.category==="Popular")
    
    // const [item, setItem] = useState([])
    // useEffect(() => { // 
    //     fetch('item.json') // fetch data from json file
    //         .then(res => res.json()) // convert data to json
    //         .then(data => {
    //             const popularItem = data.filter(item => item.category === 'Popular') // filter data
    //             setItem(popularItem)
    //         }) // log data to console
    // }, [])
    return (
        <section>
            <SectionTitle heading="From Our Brand" subHeading="Popular">

            </SectionTitle>
            <div className="grid grid-cols-2 gap-10">
                {
                    popular.map(item => <Item key={item.id}
                        item={item}>

                    </Item>)
                }
            </div>

        </section>
    );
};

export default PopularItem;
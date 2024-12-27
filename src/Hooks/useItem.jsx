import { useEffect, useState } from "react"

//for more cleaner code // cuustom hook used
const useItem=()=>{
 const [item, setItem] = useState([])
 const [loading,setLoading]=useState(true) //   loading state
    useEffect(() => { // 
        fetch('http://localhost:5000/item') // fetch data from json file
            .then(res => res.json()) // convert data to json
            .then(data => {
            
                setItem(data)
                setLoading(false)
            }) // log data to console
    }, [])
    return [item,loading]
}
export default  useItem
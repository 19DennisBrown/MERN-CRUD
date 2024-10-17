import axios from "axios";
import { useEffect, useState } from "react";


const useFetch = (url) => {

  const [apiData, setApiData] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  
  useEffect(() => {
    const fetchData = async()=>{
      setIsLoading( !isLoading )
      try {
        const response = await axios.get(url)
        const res = await response?.data
        setApiData(res)
      } catch (err) {
        setError(err)
        setIsLoading(false)
      }
    }

    fetchData()
  }, [url])
  

  return { error, apiData, isLoading };
}
 
export default useFetch;
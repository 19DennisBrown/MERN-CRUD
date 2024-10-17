import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";


const useFetch = ( url ) => {

  const [isLoading, setIsLoading] = useState(false)
  const [serverError, setServerError] = useState(null)
  const [apiData, setApiData] = useState([])

  useEffect( ()=>{
    setIsLoading(true)
    const fetchData = async()=>{
      try {
        const response = await axios.get(url)
        const res  = await response?.data
        setApiData(res)
        // console.log(JSON.stringify(res))
        setIsLoading(false)
      } catch (err) {
        setServerError(err)
        setIsLoading(false)
      }
    }

    fetchData()
  }, [url])

  return { isLoading, serverError, apiData  };
}
 
export default useFetch;
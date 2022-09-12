import LoadingIndicator from "./LoadingIndicator";
import {useState, useEffect} from "react";
import CountriesCard from "./CountriesCard"
import Pagination from "./Pagination"
function Countries() { 

  const [done,setDone]=useState(true)
  const [page,setPage] = useState(1)
  const [data,setData] = useState([]);
  const [totalpage,setTotalPage] = useState(0)

  const HandleChange=(no)=>{
    setPage(page+no);
  }

  console.log(data)

  useEffect(()=>{
    getData();

  },[page])
  const getData=async()=>{
    let data1= await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?page=${page}&limit=10&orderBy=desc`)
    let res = await data1.json();
    setData(res.data);
    setTotalPage(res.totalPages)
    setDone(false);

  }



  if(done){
    return <LoadingIndicator />;
  }
  else{

    return (
      <div>
        <h1 data-testid="countries-header">Countries List</h1>
        <div data-testid="countries-container">
          {/* Countries Card */}
          <CountriesCard data={data}/>
        </div>
        <div>
          {/* Pagination */}
         <Pagination page={page} totalpage={totalpage} HandleChange={HandleChange}/>
        </div>
      </div>
    );
  }
  

 
}

export default Countries;

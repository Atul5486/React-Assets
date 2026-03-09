import React, { useEffect, useState } from 'react'
import './style.css'
import JobPosting from './JobPosting'
const Main = () => {
    const ITEMS_PER_PAGE=6;
    const API_ENDPOINTS="https://hacker-news.firebaseio.com/v0"
    const [items, setItems] = useState([]);
    const [itemIds,setItemIds]=useState(null)
    const [fetchingDetails,setFetchDetails]=useState(false);
    const [currentPage,setCurrentPage]=useState(0)

    const fetchItems=async(currPage)=>{
        setCurrentPage(currPage);
        setFetchDetails(true);

        let itemList=itemIds;
        if(itemIds===null){
            const response=await fetch(`${API_ENDPOINTS}/jobstories.json`);
            itemList=await response.json();
            setItemIds(itemList);
        }

        const itemIdsForPage=itemList.slice(
            currPage*ITEMS_PER_PAGE,
            currPage*ITEMS_PER_PAGE+ITEMS_PER_PAGE
        )

        const itemsForPage=await Promise.all(
            itemIdsForPage.map(itemId=>
                fetch(`${API_ENDPOINTS}/item/${itemId}.json`).then(res=>res.json())
            )
        )
        setItems([...items,...itemsForPage]);
        setFetchDetails(false);
    }

    useEffect(()=>{
        if(currentPage===0){
                fetchItems(currentPage);
            } 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  return (
    <div className='app'>
        <h1 className='title'>Hacker News Job Board</h1>
        {
           itemIds===null || items.length<1 ? (
                <p className='"loading'>Loading...</p>
            ):(
                <div>
                    <div className='items' role='list'>
                        {
                            items.map((item,index)=>{
                                return <JobPosting key={index} {...item}/>
                            })
                        }
                    </div>
                    <button className='custom-load-more-button'
                    onClick={()=>fetchItems(currentPage+1)}
                    disabled={fetchingDetails}
                        >
                       {fetchingDetails ? "Loading ":  "Load More Jobs"}
                    </button>
                </div>
            )
        }
    </div>
  )
}

export default Main
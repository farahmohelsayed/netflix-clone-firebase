import { useEffect, useState } from "react"
import axios from '../axios'
import requests from "../requests"
import styles from './Banner.module.css'

const Banner =()=>{
const [randomMovie, setRandomMovie]=useState([])
useEffect(()=>{
    async function FetchData(){
        const request = await axios.get(requests.fetchNetflixOriginals)
        console.log(request.data.results)
        setRandomMovie(request.data.results[Math.floor(Math.random()* request.data.results.length-1)])
    return request
    }
    FetchData()
},[])
console.log(randomMovie)
function truncate(str,n){
return str?.length>n?str.substring(0,n-1)+'...':str;
}

    return(
<header className={styles.banner} style={{backgroundImage:`url("https://image.tmdb.org/t/p/original/${randomMovie?.backdrop_path}")`, backgroundSize:"cover", backgroundPosition:'center'}}>
    <div className={styles.bannerContent}>
    {/* title */}
    <h1 className={styles.bannerTitle}>{randomMovie?.title || randomMovie?.name || randomMovie?.original_name}</h1>
    {/* 2 buttons */}
    <div className="bannerButtons">
        <button className={styles.bannerButton}>Play</button>
        <button className={styles.bannerButton}>My List</button>
    </div>
    <h1 className={styles.bannerDescription}>{truncate(randomMovie?.overview,150)}</h1>
    </div>
    <div className={styles.fadeBottom}/>
</header>
    )
}
export default Banner
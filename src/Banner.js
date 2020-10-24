import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import "./Banner.css"
import SearchComponent from './SearchComponent'
function Banner() {
    const [showSearch, setshowSearch] = useState(false)
    const history=useHistory();
    return (
        <div className="banner">
        <div className="banner__search">
        {showSearch && <SearchComponent/>}
            <Button variant="outlined" className="banner__searchButton" onClick={e=>setshowSearch(!showSearch)}>
                {showSearch?"Hide":"Search Dates"}
            </Button>
        </div>
            <div className="banner__info">
                <h1>Go Near</h1>
                <h4>Settle in somewhere new. Discover nearby stays to live, work, or just relax.</h4>
                <Button  variant="outlined" onClick={()=>history.push('./search')}>Explore nearby</Button>
            </div>
        </div>
    )
}

export default Banner

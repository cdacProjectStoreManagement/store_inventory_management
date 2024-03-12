import React from 'react'
import {Link} from 'react-router-dom'

function StoreNavbarWithSearch(props) {
  return (
    <div>
      <nav class="navbar bg-dark text-light">
        <div class="container-fluid">
            <h2>Store</h2>
            <center>
                <div style={{width:500}}>
                <input class="form-control me-2"  type="search" placeholder="Search" aria-label="Search" onChange={props.onChange}/>
                </div>
            </center>
             
            <ul class="nav justify-content-end">
            <li class="nav-item">
            <Link to='/store' class="nav-link active" aria-current="page" >View Store</Link>
            </li>
            <li class="nav-item">
            <Link to='/store/add' class="nav-link" aria-current="page" >Add Store</Link>
            </li>
            </ul>
        </div>
        </nav>
        <hr/>
    </div>
  )
}

export default StoreNavbarWithSearch

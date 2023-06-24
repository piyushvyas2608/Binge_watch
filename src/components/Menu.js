import React from 'react';
import '../components/login.css';
import { useGlobalContext } from './context';
 const Menu = () => {
    const {query , setQuery, isError} = useGlobalContext(); 
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-black">
            <div className="container-fluid">
                <a className="navbar-brand text-danger" href="#">BINGE-WATCH</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                </ul>
                <form action='#' onSubmit={(e)=> e.preventDefault()}  className="d-flex" role="search">
                    <input className="form-control me-2 border-danger" type="search" placeholder="Search Movie" aria-label="Search" value={query} onChange={(e)=> setQuery(e.target.value)}/>
                </form><br/>
                </div>
            </div>
        </nav>
        {/* <p className='text-danger text-center'>{isError.show && isError.msg}</p> */}
    </>
  )
}
export default Menu
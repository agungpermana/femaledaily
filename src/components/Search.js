import React from 'react';
// import { Link } from 'react-router-dom';

const Search = () => {
    return (
        <nav className ="white" >
                <ul className="left">
                    <li className="brand-logo" style={{color:"black"}}>Female Daily</li>
                </ul>
                <ul className="right">
                    <li><a className="waves-effect waves-light btn">Login / Sign Up</a></li>
                </ul>
                <form className="container">
                    <div className="input-field">
                        <input id="search" type="search" required />
                        <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                        <i className="material-icons">close</i>
                    </div>
                </form>
        </nav>  
    )
}

export default Search;
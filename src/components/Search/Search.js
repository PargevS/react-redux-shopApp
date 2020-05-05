import React, {useState} from 'react';
// *************************
import './Search.scss';

const Search = ({inputChangeHandler, onSubmit, defVal}) => {
    return (
        <div className="search-widget">
            <h3>Quick Shop</h3>
            <div className="input-group">
                <input
                    type="text"
                    className="search-input"
                    onChange={inputChangeHandler}
                    value={defVal}/>

                <button className="btn btn-info" onClick={onSubmit}>
                    Search
                </button>
            </div>
        </div>
    );
};

export default Search;

import React from 'react';
import "./App.css"
function Tweet({name,message}) {
    return(
        <div className='tweet'>
            <h1>{name}</h1>
            <h2>{message}</h2>
            <h3>This is no of likes I got </h3>
                    </div>
    );
}
export default Tweet;
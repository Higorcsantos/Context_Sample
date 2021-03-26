import React from 'react';

import Spinner from 'react-spinkit';

const loading = ({loading,message}) => {
    return loading ? (
        <div className='overlay-content'> 
            <div className='wrapper'> 
                <Spinner 
                    name='pline-spin-fade-loader' 
                    fadeIn='none' 
                    color='blue' 
                /> 
                <span className='message'> 
                    {message} 
                </span> 
            </div> 
        </div> 
    ) : null
}
export default loading
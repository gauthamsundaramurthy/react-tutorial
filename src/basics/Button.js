import React from 'react';

export default ({handler}) => {
    const handlerFn = () => {
        handler('Message from Child component')
    }
    return (
       <button onClick={handlerFn}> Update </button> 
    )
}

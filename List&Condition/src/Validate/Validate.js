import React from 'react';


const validate=(props)=>{

    let message="length is enough";

    if(props.name.length<5){
        message="length is short!"
    }
    return <p>
        {message}
    </p>
}
export default validate;
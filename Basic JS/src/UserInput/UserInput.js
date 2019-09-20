import React from 'react';

const input=(props)=>{
    const style={
        width: '40%',
        padding: '12px 20px',
        margin:' 8px 0',
        display: 'inline-block',
        border: '1px solid #ccc',
      }
    return <input type='text' style={style} onChange={props.changeName} value={props.name} />
}
export default input;
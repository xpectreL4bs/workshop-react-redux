import React from 'react';

export const Title = (props) =>{
  if (props.type==='is-1') {
    return <h1 className={`title ${props.type || ''} ${props.modifier || ''}`}>{props.content}</h1>;
  }
  if (props.type==='is-2') {
    return <h2 className={`title ${props.type || ''} ${props.modifier || ''}`}>{props.content}</h2>;
  }
  if (props.type==='is-3') {
    return <h3 className={`title ${props.type || ''} ${props.modifier || ''}`}>{props.content}</h3>;
  }
  if (props.type==='is-4') {
    return <h4 className={`title ${props.type || ''} ${props.modifier || ''}`}>{props.content}</h4>;
  }
  if (props.type==='is-5') {
    return <h5 className={`title ${props.type || ''} ${props.modifier || ''}`}>{props.content}</h5>;
  }
  if (props.type==='is-6') {
    return <h6 className={`title ${props.type || ''} ${props.modifier || ''}`}>{props.content}</h6>;
  }

  return <h6 className={`title ${props.type || ''} ${props.modifier || ''}`}>{props.content}</h6>;
  
};

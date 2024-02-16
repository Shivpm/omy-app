import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = () =>{
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleonchange = (event) =>{
    setText(event.target.value)
  }
  const [text, setText] = useState('Enter text here1');
  return (
    <div>
        <h1>{props.heading}</h1>
    
  <div className="mb-3"> 
    <textarea  className="form-control" value={text} onChange={handleonchange} id="myBox" row='8'></textarea>
    </div>
    <button className="btn btn-control" onClick={handleUpClick}>Convert to Uppercase </button>
    </div>
  )
}
 
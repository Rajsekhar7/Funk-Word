import React, {useState} from 'react'

export default function Textforms(props) {
  const [text, setText] = useState('Enter Text Here!');
  const handelClick=()=>{
    console.log('Clicked');
    let newText= text.toUpperCase();
    setText(newText);
  }
  const handelClick2=()=>{
    setText(text.toLowerCase());
  }
  const handelOnChange=(event)=>{
    console.log('Change');
    setText(event.target.value);
  }
  const blanc=()=>{
    setText('');
  }
  
  const handelCopy=()=>{
    navigator.clipboard.writeText(text);
  }

  const eSpace=()=>{
    let newText= text.split(/[  ]+/);
    setText(newText.join(" "));
  }

  return (
    <>
    
<div className="mb-3" style={{color: props.mode === 'dark'?'white':'black'}}>
  <h1 >Enter Text Here</h1>
  <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handelOnChange} style={{backgroundColor: props.mode==='dark'?'#212529':'white', color:props.mode==='dark'?'white':'black'}} value={text} rows="8"></textarea>
</div>
<button className="btn btn-success" onClick={handelClick}>To Uppercase</button>
<button className="btn btn-success mx-3" onClick={handelClick2}>To Lowercase</button>
<button className="btn btn-success " onClick={blanc}>Clear</button>
<button className="btn btn-success mx-3" onClick={handelCopy}>Copy Text</button>
<button className="btn btn-success " onClick={eSpace}>Clear Extra Spaces</button>
<div className="container my-2" style={{color: props.mode ==='dark'?'white':'black'}}>
  <h1>Text Summary</h1>
  <p>{text.split(" ").length} words, {text.length} letters</p>
  <p>{0.008 * text.split(" ").length} minutes to read</p>
</div>
    </>
  )
}

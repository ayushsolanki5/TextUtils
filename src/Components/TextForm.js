import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("UpperCase was Clicked" + text);
        let newText= text.toUpperCase();
        settext(newText);
    }
    const handleOnChange = (event)=>{
        // console.log("On Change");
        settext(event.target.value)
    }

    const handleLowClick = ()=>{
        // console.log("UpperCase was Clicked" + text);
        let newText= text.toLowerCase();
        settext(newText);
    }

    const Clear = ()=>{
     // console.log("On Change");
        let newText= '';
        settext(newText)
    }

    const CopyText = ()=>{
        var text = document.getElementById('mybox')
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpace = ()=>{
        let newText = text.split(/[ ]+/);
        settext(newText.join(" "))
    }

    

    const [text,settext] = useState('');
    return (<>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"/> 
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to UpperCase</button> 
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to lowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra space</button>
        <button className="btn btn-primary mx-1" onClick={CopyText}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={Clear}>Clear Text</button>
    </div> 
    <br />
    <br />
    <div className='container'>
        <h2>Your text summary</h2> 
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>In {0.008 * (text.split(" ").length)} minutes you and read the whole text.</p>
        <br/>
        <h2>Preview</h2>
        <p>{text}</p>

    </div>
    </>
  )
}

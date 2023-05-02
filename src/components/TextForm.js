import React, {useState} from "react";

let undoText= ""
export default function TextForm(props){
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked: "+ text);
        undoText = text;
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to Upper case', 'success')
    }

    const handleLowClick = ()=>{
        undoText = text;
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to Lower case', 'success')
    }

    const handleClearClick = ()=>{
        undoText = text;
        let newText = "";
        setText(newText);
        props.showAlert('Cleared text successfully', 'success')
    }

    const handleUndoClick = ()=>{
        setText(undoText);
        props.showAlert('Undo successfully', 'success')
    }

    const handleCopy = ()=>{
        // var copytext = document.getElementById('myBox');
        // copytext.select();
        // navigator.clipboard.writeText(copytext.value);
        // document.getSelection().removeAllRanges();
        navigator.clipboard.writeText(text);
        props.showAlert('Copied text successfully', 'success')
    }

    const handleExtraSpaces = () =>{
        undoText = text;
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        // document.getSelection().removeAllRanges();
        props.showAlert('Extra spaces removed successfully', 'success')
    }

    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value)
    }

    const [text, setText] = useState('');
    // text = "new text";   //Wrong way to change the state
    // setText("new text"); //Correct way to change the state

    return (
        <>
        <div style={{color: props.mode==='dark'?'white':'#08294e', marginTop:'50px'}}>
            <div className="container my-3">
                <h1 className="mb-4">{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'rgb(20 60 105)':'white', color: props.mode==='dark'?'white':'#08294e'}} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUndoClick}>Undo</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
            </div>

            <div className="container my-3">
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element) => element.length!==0).length} words and {text.length} characters are present in your text</p>
                <p>{0.008 * text.split(" ").filter((element) => element.length!==0).length} Minutes required to read your text</p>
                <h2>Preview</h2>
                <p>{text.length>0 ? text:'Nothing to preview'}</p>
            </div>
        </div>
        </>
    )
}
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
        var copytext = document.getElementById('myBox');
        copytext.select();
        navigator.clipboard.writeText(copytext.value);
        props.showAlert('Copied text successfully', 'success')
    }

    const handleExtraSpaces = () =>{
        undoText = text;
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
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
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#08294e':'white', color: props.mode==='dark'?'white':'#08294e'}} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
                <button className="btn btn-primary mx-1" onClick={handleUndoClick}>Undo</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>

            <div className="container my-3">
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters are present in your text</p>
                <p>{0.008 * text.split(" ").length} Minutes required to read your text</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </div>
        </>
    )
}
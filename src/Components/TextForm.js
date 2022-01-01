import React ,{useState} from 'react'

export default function TextForm(props){
    const handleUpClick=()=>{
        console.log("Uppercase was Clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Text was converted to Uppercase","Success:");
    }
    const handleDownClick=()=>{
      console.log("Lowercase was Clicked");
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert("Text was converted to Lowercase","Success:");
  }
    const handleOnChange=(event)=>{
       // console.log("Uppercase was Clicked");
        setText(event.target.value);
    }
   /* const showAlert=(event,type)=>
    {
          var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
          var wrapper = document.createElement('div')
          let message=text;
          wrapper.innerHTML = '<div class="alert alert-dark alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
          alertPlaceholder.append(wrapper)
          console.log("HI");
    }
    */
    const clearText=(event)=>
    {
      setText(" ");
      props.showAlert("Text Cleared","Success:");
    }
    const ChangeFont=(event)=>
    {
      var x=document.getElementById("myBox");
       console.log(x);
        x.style.fontFamily="Times New Roman";
        props.showAlert("Font was changed to Times new Roman","Success:");
       // setText(newText);
      
    }
    const HandleExtraSpaces=()=>{
      let newText=text.split(/[ ]+/);
      props.showAlert("Extra Space was Handled","Success:");
      setText(newText.join(" "));
    }
    const CopyText=(event)=>
    {
      var x=document.getElementById("myBox");
      x.select();
      navigator.clipboard.writeText(x.value);
      props.showAlert("Text was Succesfully copied to Clipboard","Success:");
    }
const [text,setText]=useState('Enter text here');
    return(
      <>
        <div  style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div class="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} rows="8"></textarea>
            </div>
          <button onClick={handleUpClick} className="btn btn-primary mx-2">
           Convert to Upper Case
          </button>
          <button onClick={handleDownClick} className="btn btn-primary mx-2">
           Convert to Lower Case
          </button>
        <button type="button" className="btn btn-primary mx-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Launch demo modal
        </button>
        
<button type="button" className="btn btn-primary mx-2 my-2" onClick={props.showAlert} id="liveAlertBtn">Show live alert</button>
<button type="button" className="btn btn-primary mx-2 my-2" onClick={clearText} id="liveAlertBtn">Clear Text</button>
<button type="button" className="btn btn-primary mx-2 my-2" onClick={ChangeFont} id="liveAlertBtn">Monospace</button>
<button type="button" className="btn btn-primary mx-2 my-2" onClick={CopyText} id="liveAlertBtn">Copy Text</button>
<button type="button" className="btn btn-primary mx-2 my-2" onClick={HandleExtraSpaces} id="liveAlertBtn">Handle Extra Spaces</button>
<div id="liveAlertPlaceholder"></div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
          <h1>Your Text Summary</h1>
          <p>{text.length>0?text.split(' ').length:0} words and {(text.length-text.split(' ').length)+1} characters</p>
        
          <p>{0.008 * text.split(" ").length} Minutes read</p>
          <h2>Preview</h2>
          <p>{text.length>0?text:"Enter Text in the text-box to preview it here"}</p>
        </div>
        
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                ...
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
        </div>
        </>
    )
}
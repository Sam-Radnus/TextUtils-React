import React ,{useState} from 'react'

export default function TextForm(props){
   
    const handleUpClick=()=>{
        ("Uppercase was Clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Text was converted to Uppercase","Success:");
    }
    const handleDownClick=()=>{
      ("Lowercase was Clicked");
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert("Text was converted to Lowercase","Success:");
  }
    const handleOnChange=(event)=>{
      
        setText(event.target.value);
    }
  
    const clearText=(event)=>
    {
      setText(" ");
      props.showAlert("Text Cleared","Success:");
    }
    const ChangeFont=(event)=>
    {
      var x=document.getElementById("myBox");
   
        x.style.fontFamily="Monospace";
        props.showAlert("Font was changed to Monospace","Success:");
       
      
    }
    const HandleExtraSpaces=()=>{
      let newText=text.split(/[ ]+/);
      props.showAlert("Extra Space was Handled","Success:");
      setText(newText.join(" "));
    }
    const CopyText=(event)=>
    {
    
      navigator.clipboard.writeText(text);
      props.showAlert("Text was Succesfully copied to Clipboard","Success:");
    }
    const ChangeFontBack=()=>{
      var x=document.getElementById("myBox");
   
      x.style.fontFamily="Times New Roman";
      props.showAlert("Font was changed to Times new Roman","Success:");
    }
    const LaunchModal=(event)=>{
      var modal=document.querySelectorAll('div.modal-body')[0];
      modal.innerHTML=text;
    }
const [text,setText]=useState('Enter text here');
    return(
      <>
        <div  style={{color: props.mode==='dark'?'white':'black'}}>
            <h1 className="mb-4">{props.heading}</h1>
            <div class="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" style={{backgroundColor:props.mode==='dark'?'#403f4c':'white',color:props.mode==='dark'?'white':'#403f4c'}} rows="8"></textarea>
            </div>
          <button disabled={text.length===0} onClick={handleUpClick} className="btn btn-primary mx-2  my-2">
           Convert to Upper Case
          </button>
          <button disabled={text.length===0} onClick={handleDownClick} className="btn btn-primary mx-2 my-2">
           Convert to Lower Case
          </button>
        <button type="button" disabled={text.length===0} className="btn btn-primary mx-2" data-bs-toggle="modal" onClick={LaunchModal} data-bs-target="#exampleModal">
          Launch demo modal
        </button>
        
<button disabled={text.length===0} type="button" className="btn btn-primary mx-2 my-2" onClick={ChangeFontBack} id="liveAlertBtn">Times New Roman</button>
<button disabled={text.length===0} type="button" className="btn btn-primary mx-2 my-2" onClick={clearText} id="liveAlertBtn">Clear Text</button>
<button disabled={text.length===0} type="button" className="btn btn-primary mx-2 my-2" onClick={ChangeFont} id="liveAlertBtn">Monospace</button>
<button disabled={text.length===0} type="button" className="btn btn-primary mx-2 my-2" onClick={CopyText} id="liveAlertBtn">Copy Text</button>
<button disabled={text.length===0} type="button" className="btn btn-primary mx-2 my-2" onClick={HandleExtraSpaces} id="liveAlertBtn">Handle Extra Spaces</button>
<div id="liveAlertPlaceholder"></div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
          <h1>Your Text Summary</h1>
          <p>{text.split(/\s+/).filter((element)=>{return element.length!=0}).length} words and {(text.length-text.split(' ').length)+1} characters</p>
        
          <p>{0.008 *text.split(" ").filter((element)=>{return element.length!=0}).length } Minutes read</p>
          <h2>Preview</h2>
          <p>{text.length>0?text:"Nothing to Preview"}</p>
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
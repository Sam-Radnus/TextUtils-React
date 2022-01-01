import React,{useState} from 'react'

export default function About() {
    const [myStyle,setMyStyle]= useState({
         color:'black',
        backgroundColor:'white'        
      
    })
    const [btntext,setbtntext]=useState("Dark");

    const toggleStyle=()=>{
        if(myStyle.color==='black')
        {
            setMyStyle({
                color:'white',
                backgroundColor:'black',
                border :'2px solid white'
            })
            setbtntext("Enable Light Mode")
        }
        else{
            setMyStyle({
                color:'black',
                backgroundColor:'white'
            })
            setbtntext("Enable Dark Mode");
        }
    }
    return (
        <div  style={myStyle} className="container">
 <div className="accordion"  id="accordionPanelsStayOpenExample">
  <div className="accordion-item"  style={myStyle} >
    <h2 className="accordion-header" style={myStyle} id="panelsStayOpen-headingOne">
      <button class="accordion-button" style={myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div className="accordion-body" style={myStyle} >
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item"  >
    <h2 className="accordion-header" style={myStyle} id="panelsStayOpen-headingTwo">
      <button className="accordion-button collapsed" type="button" style={myStyle}  data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div className="accordion-body" style={myStyle} >
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item"  style={myStyle}>
    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
      <button style={myStyle}  class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div className="accordion-body" style={myStyle} >
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <button type="button" onClick={toggleStyle} className="btn btn-dark">{btntext}</button>
</div>
        </div>
    )
}

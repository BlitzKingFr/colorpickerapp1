import React,{useState} from "react";
function ColorPicker(){

    const [color,setColor] = useState("#FFFFFF");

    function handleColorChange(event){
        setColor(event.target.value)
    }

    return(
        <div className="colorpickercontainer">
            <h1>Color Picker App</h1>
            <div className="colordisplay" style={{backgroundColor : color}}>
                <p>Selected Color : {color}</p>
            </div>
            <label>Select a color:</label>
            <input type="color" onChange={handleColorChange} value={color} />
        </div>
    );
}
export default ColorPicker
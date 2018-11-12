import React from 'react'
let c;


const HeadingWidget = ({preview,widget,updateWidget}) =>
<div>
    {console.log(widget)}

    <div hidden={preview} className="row">
    <div hidden={preview} className="col-sm-8">
    <h1>{widget.title}</h1>
</div>
</div>
<div>
    <div hidden={preview}className="form-group row">
        <label htmlFor="HeadingText" >Enter Text</label>
        <input id ="HeadingText" onChange={(event)=>
        {widget.text=event.target.value;
            updateWidget(widget);}}  type="text" placeholder="Heading Text" className="form-control"/>
    </div>
    <div hidden={preview}className="form-group row">
        <label for="HeadingSize">Select Size</label>
        <select id="HeadingSize" className="form-control"
                onChange={(event)=>
                {widget.size=parseInt(event.target.value);
                    updateWidget(widget);console.log((event.target.value))}}
                value={widget.size}>
            <option value="1">Heading 1</option>
            <option value="2">Heading 2</option>
            <option value="3">Heading 3</option>
            <option value="4">Heading 4</option>
            <option value="5">Heading 5</option>
            <option value="6">Heading 6</option>
        </select>
    </div>

    <div hidden={preview} onChange={(event)=>
    {widget.title=event.target.value;
        updateWidget(widget);}}className="form-group row">
        <label htmlFor="HeadingTitle">Widget Title</label>
        <input id ="HeadingTitle"type="text" placeholder="Widget Name" className="form-control"/>
    </div>
    <div>
        <h3 hidden={preview}>Preview</h3>
        {widget.size === 1 && <h1>{widget.text}</h1>}
        {widget.size === 2 && <h2>{widget.text}</h2>}
        {widget.size === 3 && <h3>{widget.text}</h3>}
        {widget.size === 4 && <h4>{widget.text}</h4>}
    </div>
</div>


</div>

export default HeadingWidget
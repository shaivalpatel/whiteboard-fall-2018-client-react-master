import React from 'react'

const ParagraphWidget = ({preview,widget, updateWidget}) => {

    return(
        <div>
            <h1 hidden={preview}>{widget.title}</h1>
            <div>
                <div hidden={preview} className="form-group row">
                    <label htmlFor="ParagraphText">Paragraph Text</label>
                    <textarea  id ="ParagraphText"onChange={(event)=>
                    {widget.text=event.target.value;
                        updateWidget(widget);}}type="text" placeholder="Paragraph Text" className="form-control"></textarea>
                </div>
                <div hidden={preview} className="form-group row">
                    <label htmlFor="ParagraphTitle">Widget Title</label>
                    <input id= "ParagraphTitle " onChange={(event)=>
                    {widget.title=event.target.value;
                        updateWidget(widget);}}type="text" placeholder="Widget Name" className="form-control"/>
                </div>
                <div>
                    <h3 hidden={preview}>Preview</h3>
                    {widget.text}
                </div>
            </div></div>

    )
}
export default ParagraphWidget


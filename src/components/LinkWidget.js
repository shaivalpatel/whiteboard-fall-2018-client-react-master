import React from 'react'

const LinkWidget = ({preview,widget, updateWidget}) => {

    return(
        <div>
            <h1 hidden={preview}>{widget.title}</h1>
            <div>
                <div hidden={preview}className="form-group row">
                    <label htmlFor="LinkURL">Link URL</label>
                    <input id="LinkURL" onChange= {(event)=>
                    {widget.link=event.target.value;
                        updateWidget(widget);}}type="url" placeholder="Link URL" className="form-control"/>
                </div>
                <div hidden={preview}className="form-group row">
                    <label htmlFor="LinkText">Link Text</label>
                    <input id="LinkText" onChange= {(event)=>
                    {widget.text=event.target.value;
                        updateWidget(widget);}}type="text" placeholder="Link Text" className="form-control"/>
                </div>

                <div id="LinkURL2" hidden={preview} className="form-group row">
                    <label htmlFor="LinkURL2">Link URL</label>
                    <input type="url" placeholder="https://www.youtube.com/" className="form-control"/>
                </div>
                <div hidden={preview} className="form-group row">
                    <label htmlFor="LinkTitle">Widget Title</label>
                    <input id="LinkTitle" onChange= {(event)=>
                    {widget.title=event.target.value;
                        updateWidget(widget);}} type="text" placeholder="Widget Name" className="form-control"/>
                </div>
                <div>
                    <h3 hidden={preview}>Preview</h3>
                    <a href={widget.link}>{widget.text}</a>
                </div>
            </div>
        </div>

    )
}
export default LinkWidget



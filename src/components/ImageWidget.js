import React from 'react'

const ImageWidget = ({preview,widget,updateWidget}) => {

    return(
        <div>
            <h1 hidden={preview}>{widget.title}</h1>

            <div>

                <div hidden={preview} className="form-group row">
                    <label htmlFor="ImageLInk">Image Link</label>
                    <input id="ImageLink" onChange= {(event)=>
                    {widget.link=event.target.value;
                        updateWidget(widget);}}type="text"
                           placeholder="https://techcrunch.com/wp-content/uploads/2018/03/gettyimages-705351545.jpg?w=730&crop=1"
                           className="form-control"/>
                </div>
                <div hidden={preview} className="form-group row">
                    <label htmlFor="ImageTitle">Widget Title</label>
                    <input id="ImageTitle" onChange= {(event)=>
                    {widget.title=event.target.value;
                        updateWidget(widget);}} type="text" placeholder="Widget Name" className="form-control"/>
                </div>
                <div>
                    <h3 hidden={preview}>Preview</h3>
                    <img src={widget.link}/>
                </div>
            </div>
        </div>

    )
}
export default ImageWidget


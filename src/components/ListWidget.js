import React from 'react'

const ListWidget = ({preview,widget, updateWidget}) => {

    return(
    <div>
        <h1 hidden={preview}>{widget.title}</h1>
        <div>
            <div hidden={preview} className="form-group row">
                <label htmlFor="ListText">List Text</label>
                                <textarea id="ListText" onChange={(event)=>
                                {widget.listitems=event.target.value;
                                    updateWidget(widget);console.log(widget.options.split('\n'))}} type="text"
                                          placeholder="Put
each item
in a new row " className="form-control"></textarea>
            </div>
            <div hidden={preview} className="form-group row">
                <label htmlFor="ListType">Type of List</label>
                <select  id ="ListType" onChange={(event)=>
                {widget.options=event.target.value;
                    updateWidget(widget);}}className="form-control">
                    <option value="ordered">Ordered List</option>
                    <option value="unordered">Unordered List</option>
                </select>
            </div>
            <div hidden={preview} className="form-group row">
                <label htmlFor="ListName">Widget Name</label>
                <input id ="ListName"onChange={(event)=>
                {widget.title=event.target.value;
                    updateWidget(widget);}}type="text" placeholder="Widget Name" className="form-control"/>
            </div>
            <div>
                <h3 hidden={preview}>Preview</h3>
                {widget.options==='unordered' && <ul>
                    {widget.listitems.split('\n').map((item,index)=><li>{item}</li>)}
                </ul>}


                    {widget.options==='ordered' && <ol>
                        {widget.listitems.split('\n').map((item,index)=><li>{item}</li>)}

                    </ol>}


            </div>
        </div>
    </div>

    )
}
export default ListWidget
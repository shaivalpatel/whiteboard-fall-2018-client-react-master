import React from 'react'
import { connect } from 'react-redux'
import WidgetList from '../components/WidgetList'


const stateToPropertyMapper = state => ({
    widgets: state.widgets,
    preview: state.preview
})




const dispatcherToPropertyMapper = dispatch => ({
    init: (widgets, topicId,preview) => {
        fetch(
            "http://localhost:8080/api/topic/" + topicId + "/widget", {
                credentials: 'include'
            })
            .then((response) => response.json())
            .then(widgets => dispatch({
                    type: 'INIT',
                    widgets: widgets,
                    topicId: topicId,
                    preview: preview
                })
            )
    }
   ,

        deleteWidget: (widget,topicId) => {
            fetch(
                "http://localhost:8080/api/topic/" + topicId + "/widget", {
                    credentials: 'include'
                })
                .then((response) => response.json())
                .then(widgets => dispatch({
                        type: 'DELETE_WIDGET',
                        widget: widget,
                        widgets:widgets,

                    })
                )
        },
    updateWidget: widget => dispatch({
        type: 'UPDATE_WIDGET',
        widget: widget
    }),
    createWidget: widget => dispatch({

        type: 'CREATE_WIDGET',
        widget: widget
    }),



    changePreview: () => dispatch({
        type:'CHANGE_PREVIEW'
    }),

    moveUp:(widget,index)=>dispatch({
        type: 'MOVE_UP',
        widget: widget,
        index:index
}),
    moveDown:(widget,index)=>dispatch({
        type: 'MOVE_DOWN',
        widget: widget,
        index:index
    }),

    findWidget: widget=>dispatch({
        type: 'FIND_WIDGET',
        widget: widget
    })
})


const WidgetListContainer = connect
(stateToPropertyMapper, dispatcherToPropertyMapper)(WidgetList)

export default WidgetListContainer

/*
const stateToPropertyMapper = state => ({
    widgets: state.widgets,
    preview: state.preview
})



const dispatcherToPropertyMapper = dispatch => ({
    init: (widgets, topic,preview) => dispatch({
        type: 'INIT',
        widgets: widgets,
        topic: topic,
        preview: preview
    }),
    deleteWidget: (widget) => dispatch({
        type: 'DELETE_WIDGET',
        widget: widget
    }),
    updateWidget: widget => dispatch({
        type: 'UPDATE_WIDGET',
        widget: widget
    }),
    createWidget: widget => dispatch({

        type: 'CREATE_WIDGET',
        widget: widget
    }),



    changePreview: () => dispatch({
        type:'CHANGE_PREVIEW'
    }),

    moveUp:(widget,index)=>dispatch({
        type: 'MOVE_UP',
        widget: widget,
        index:index
}),
    moveDown:(widget,index)=>dispatch({
        type: 'MOVE_DOWN',
        widget: widget,
        index:index
    }),

    findWidget: widget=>dispatch({
        type: 'FIND_WIDGET',
        widget: widget
    })
})


*/


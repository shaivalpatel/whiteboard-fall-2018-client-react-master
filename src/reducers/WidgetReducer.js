import WidgetService from '../services/WidgetService'

const widgetReducer = (state={widgets:[],preview:false}, action) =>
{
    switch (action.type) {

    case "INIT":

    return {
        widgets: action.widgets,
        preview:state.preview,
        topicId: action.topicId
    };
    case "FIND_ALL_WIDGETS_FOR_TOPIC":{
    return {
        widgets: WidgetService.findAllWidgetsForTopic(action.topicId),
        selectedTopic: action.topicId,
        preview:state.preview
    }
}

    case "FIND_ALL_WIDGETS":{
    return{
        widgets:WidgetService.findAllWidgetsForTopic(),
        preview:state.preview
    }
}

        case "CREATE_WIDGET":{

            console.log(state.widgets)
            WidgetService.createWidget(state.topicId,action.widget.id,action.widget).then(widgets=>{return{
                widgets:widgets,
                topicId:state.topicId,
                preview:state.preview

            }});

        }


case 'CHANGE_PREVIEW':{

    return {
        widgets:state.widgets,
        preview: !state.preview,
        selectedTopic:state.selectedTopic
    }}


case "MOVE_UP":{

    WidgetService.moveUp(state.selectedTopic, action.widget, action.index);
   return {
        widgets:WidgetService.findAllWidgetsForTopic(state.selectedTopic).slice(0),
       selectedTopic:state.selectedTopic,
       preview:state.preview
   }
}

case "MOVE_DOWN":{

    WidgetService.moveDown(state.selectedTopic, action.widget, action.index);
    return {
        widgets:WidgetService.findAllWidgetsForTopic(state.selectedTopic).slice(0),
        selectedTopic:state.selectedTopic,
        preview:state.preview
    }
}

case"FIND_WIDGET": {
    return {
        widgets:WidgetService.findWidget(action.widget.id),
        selectedTopic:state.selectedTopic,
        preview:state.preview
}
}

case "DELETE_WIDGET":
    WidgetService.deleteWidget(state.topicId, action.widget.id);
  WidgetService.findAllWidgetsForTopic(state.topicId).then(widgets=> {return {
    widgets: widgets,
    topicId: state.topicId,
    preview:state.preview
}});

case "UPDATE_WIDGET":
    WidgetService.updateWidget(state.topicId, action.widget.id,action.widget);
    WidgetService.findAllWidgetsForTopic(state.topicId).then(widgets=> {return {
        widgets: widgets,
        topicId: state.topicId,
        preview:state.preview
    }});

default:
    return state
}
}

export default widgetReducer


/*case "INIT":{
    console.log(action.topic)
    return {
        widgets: WidgetService.findAllWidgetsForTopic(action.topic),
        preview:state.preview,
        selectedTopic: action.topic
    };}
case "FIND_ALL_WIDGETS_FOR_TOPIC":{
    return {
        widgets: WidgetService.findAllWidgetsForTopic(action.topic),
        selectedTopic: action.topic,
        preview:state.preview
    }
}

case "FIND_ALL_WIDGETS":{
    return{
        widgets:WidgetService.findAllWidgetsForTopic(),
        preview:state.preview
    }
}

case "CREATE_WIDGET":{

    WidgetService.createWidget(state.selectedTopic,action.widget);
    return{
        widgets:WidgetService.findAllWidgetsForTopic(state.selectedTopic).slice(0),
        selectedTopic:state.selectedTopic,
        preview:state.preview

    }

}

case 'CHANGE_PREVIEW':{

    return {
        widgets:state.widgets,
        preview: !state.preview,
        selectedTopic:state.selectedTopic
    }}


case "MOVE_UP":{

    WidgetService.moveUp(state.selectedTopic, action.widget, action.index);
   return {
        widgets:WidgetService.findAllWidgetsForTopic(state.selectedTopic).slice(0),
       selectedTopic:state.selectedTopic,
       preview:state.preview
   }
}

case "MOVE_DOWN":{

    WidgetService.moveDown(state.selectedTopic, action.widget, action.index);
    return {
        widgets:WidgetService.findAllWidgetsForTopic(state.selectedTopic).slice(0),
        selectedTopic:state.selectedTopic,
        preview:state.preview
    }
}

case"FIND_WIDGET": {
    return {
        widgets:WidgetService.findWidget(action.widget.id),
        selectedTopic:state.selectedTopic,
        preview:state.preview
}
}

case "DELETE_WIDGET":
    WidgetService.deleteWidget(state.selectedTopic, action.widget);
    const newWidgets = WidgetService.findAllWidgetsForTopic(state.selectedTopic);
    return {
        widgets: newWidgets.slice(0),
        selectedTopic: state.selectedTopic,
        preview:state.preview
    };
case "UPDATE_WIDGET":
    WidgetService.updateWidget(state.selectedTopic, action.widget);
    return {
        widgets: WidgetService.findAllWidgetsForTopic(state.selectedTopic).slice(0),
        selectedTopic: state.selectedTopic,
        preview:state.preview

    };

default:
    return state
}
};*/



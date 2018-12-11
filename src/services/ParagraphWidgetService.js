const API_URL='http://ancient-reef-36944.herokuapp.com/api/topic/tid/widget/paragraph'

export default class WidgetService {
    static findAllWidgetsForTopic = (topicId) => {


        console.log("in find service react")
        return fetch(API_URL.replace('tid',topicId),{
            credentials:'include',
        }).then(response=>response.json())
    };

    static createWidget = (topicId, widgetId,widget) => {

        console.log(widget)
        console.log(topicId,widgetId)
        return fetch(API_URL.replace('tid',topicId)+"/"+widgetId,{
            credentials:'include',
            body:JSON.stringify(widget),
            headers:{'content-type':'application/json'},
            method:"POST"
        }).then(response=>response.json())
    };

    static deleteWidget = (topicId, widgetId,widget) => {

        console.log(widget)
        console.log(topicId,widgetId)
        return fetch(API_URL.replace('tid',topicId)+"/"+widgetId,{
            credentials:'include',
            body:JSON.stringify(widget),
            headers:{'content-type':'application/json'},
            method:"DELETE"
        }).then(response=>response.json())
    };

    static updateWidget = (topicId, widgetId,widget) => {

        console.log(widget)
        console.log(topicId,widgetId)
        return fetch(API_URL.replace('tid',topicId)+"/"+widgetId,{
            credentials:'include',
            body:JSON.stringify(widget),
            headers:{'content-type':'application/json'},
            method:"PUT"
        }).then(response=>response.json())
    };


    static findWidgetById = (topicId, widgetId,widget) => {

        console.log(widget)
        console.log(topicId,widgetId)
        return fetch(API_URL.replace('tid',topicId)+"/"+widgetId,{
            credentials:'include',
            body:JSON.stringify(widget),
            headers:{'content-type':'application/json'},
            method:"PUT"
        }).then(response=>response.json())
    };








}
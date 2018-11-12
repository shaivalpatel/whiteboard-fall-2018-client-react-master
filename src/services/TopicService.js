const API_URL='http://localhost:8080/api/course/cid/module/mid/lesson/lid/topic'


export default class LessonService{
    static findAllTopics=(courseId,moduleId,lessonId)=>{
        return fetch(API_URL.replace('cid',courseId).replace('mid',moduleId).replace('lid',lessonId),
            {
                credentials:'include',
            })
            .then(response=>response.json())
    }


    static findTopicById=(courseId,moduleId,lessonId,topicId)=>{
        fetch(API_URL.replace('cid',courseId).replace('mid',moduleId).replace('lid',lessonId)+"/"+topicId).then(response=>response.json())
    }

    static updateTopic =(courseId,moduleId,lessonId,topicId,topic)=>{
        return fetch(API_URL.replace('cid',courseId).replace('mid',moduleId).replace('lid',lessonId)+"/"+topicId,{
            body:JSON.stringify(topic),
            credentials:'include',
            headers:{'content-type':'application/json'},
            method:"PUT"
        }).then(response=>response.json())
    }
    static deleteTopic= (courseId,moduleId,lessonId,topicId)=>{
        return fetch(API_URL.replace('cid',courseId).replace('mid',moduleId).replace('lid',lessonId)+"/"+topicId,{
            credentials:'include',

            headers:{'content-type':'application/json'},
            method:"DELETE"
        }).then(response=>response.json())
    }

    static createTopic= (courseId,moduleId,lessonId,topic)=>{
        return fetch(API_URL.replace('cid',courseId).replace('mid',moduleId).replace('lid',lessonId),{
            credentials:'include',
            body:JSON.stringify(topic),
            headers:{'content-type':'application/json'},
            method:"POST"
        }).then(response=>response.json())

    }}
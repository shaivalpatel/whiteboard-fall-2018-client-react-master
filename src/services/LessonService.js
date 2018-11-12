const API_URL='http://localhost:8080/api/course/cid/module/mid/lesson'
const API_URL1='http://localhost:8080/api/module/mid/lesson'


export default class LessonService{
    static findAllLessons=(courseId,moduleId)=>{
        return fetch(API_URL.replace('cid',courseId).replace('mid',moduleId),{
            credentials:'include',
        })
            .then(response=>response.json())
    }


    static findLessonById=(userId,courseId,moduleId,lessonId)=>{
        fetch(API_URL.replace('uid',userId).replace('cid',courseId).replace('mid',moduleId)+lessonId).then(response=>response.json())
    }

    static updateLesson =(courseId,moduleId,lessonId,lesson)=>{
        return fetch(API_URL.replace('cid',courseId).replace('mid',moduleId)+"/"+lessonId,{
            credentials:'include',
            body:JSON.stringify(lesson),
            headers:{'content-type':'application/json'},
            method:"PUT"
        }).then(response=>response.json())
    }
    static deleteLesson= (courseId,moduleId,lessonId)=>{
        return fetch(API_URL.replace('cid',courseId).replace('mid',moduleId)+"/"+lessonId,{
            credentials:'include',
            headers:{'content-type':'application/json'},
            method:"DELETE"
        }).then(response=>response.json())
    }

    static createLesson= (courseId,moduleId,lesson)=>{
        return fetch(API_URL.replace('cid',courseId).replace('mid',moduleId),{
            credentials:'include',
            body:JSON.stringify(lesson),
            headers:{'content-type':'application/json'},
            method:"POST"
        }).then(response=>response.json())}}


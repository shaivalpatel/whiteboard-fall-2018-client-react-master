const API_URL='http://localhost:8080/api/course/cid/module'

export default class ModuleService{




   static  findAllModules (courseId){
       console.log(courseId)
        return fetch(API_URL.replace('cid',courseId),{
            credentials:'include'
            }
        ).then(response=> response.json());

    }

    static createModule(courseID,module){
       return fetch(API_URL.replace('cid',courseID),{
           credentials:'include',
           body:JSON.stringify(module),
           method:"POST",
           headers:{
               'Content-Type':'application/json'
           }
        }).then(response=>response.json())
    }


    static editModule(courseId,moduleId,module){
       return fetch(API_URL.replace('cid',courseId)+"/"+moduleId,{
           credentials:'include',
           body:JSON.stringify(module),
           method:'PUT',
           headers:{
               'Content-Type':'application/json'
           }
       }).then(response=>response.json())
    }

    static deleteModule(courseId,moduleId){
        return fetch(API_URL.replace('cid',courseId)+"/"+moduleId,{
            credentials:'include',
            body:JSON.stringify(module),
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            }
        }).then(response=>response.json())
    }

    static findModuleById(moduleId,courseId,userId){
        return fetch(API_URL.replace('cid',courseId).replace('uid',userId)+moduleId,{


        }).then(response=>response.json())
    }
}
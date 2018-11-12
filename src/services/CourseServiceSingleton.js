const API_URL='http://localhost:8080/api/user/'



export default class CourseServiceSingleton {

  /*  static updateWidget = (forTopic, forWidget) => {
        for(let c in courses) {
            for(let m in courses[c].modules) {
                for(let l in courses[c].modules[m].lessons) {
                    for(let t in courses[c].modules[m].lessons[l].topics) {
                        if(courses[c].modules[m].lessons[l].topics[t].id === forTopic.id) {
                            const widgetIndex = courses[c].modules[m].lessons[l].topics[t].widgets.findIndex(widget => widget.id === forWidget.id)
                            courses[c].modules[m].lessons[l].topics[t].widgets[widgetIndex] = forWidget;
                        }
                    }
                }
            }
        }
    }



    static findAllWidgetsForTopic = forTopic => {
        for(let c in courses) {
            for(let m in courses[c].modules) {
                for(let l in courses[c].modules[m].lessons) {
                    for(let t in courses[c].modules[m].lessons[l].topics) {
                        if(courses[c].modules[m].lessons[l].topics[t].id === forTopic.id) {
                            return courses[c].modules[m].lessons[l].topics[t].widgets
                        }
                    }
                }
            }
        }
    }

    static createWidget = (forTopic,forWidget) =>{
        for(let c in courses) {
            for(let m in courses[c].modules) {
                for(let l in courses[c].modules[m].lessons) {
                    for(let t in courses[c].modules[m].lessons[l].topics) {
                            if (courses[c].modules[m].lessons[l].topics[t].id ==forTopic.id){

                                 courses[c].modules[m].lessons[l].topics[t].widgets.push(forWidget);
                                console.log(courses)
                            }
                        }
                    }
                }
            }
        };

    static moveUp = (forTopic,forwidget,forindex)=>{
        for(let c in courses) {
            for(let m in courses[c].modules) {
                for(let l in courses[c].modules[m].lessons) {
                    for(let t in courses[c].modules[m].lessons[l].topics) {
                        if (courses[c].modules[m].lessons[l].topics[t].id ==forTopic.id){

                            if(forindex>0){

                            let temp =courses[c].modules[m].lessons[l].topics[t].widgets[forindex]
                            courses[c].modules[m].lessons[l].topics[t].widgets[forindex] = courses[c].modules[m].lessons[l].topics[t].widgets[forindex-1]
                            courses[c].modules[m].lessons[l].topics[t].widgets[forindex-1] = temp}
                        }
                    }
                }
            }
        }}

        static moveDown = (forTopic,forwidget,forindex)=>{
            for(let c in courses) {
                for(let m in courses[c].modules) {
                    for(let l in courses[c].modules[m].lessons) {
                        for(let t in courses[c].modules[m].lessons[l].topics) {
                            if (courses[c].modules[m].lessons[l].topics[t].id ==forTopic.id){

                                let temp =courses[c].modules[m].lessons[l].topics[t].widgets[forindex]
                                courses[c].modules[m].lessons[l].topics[t].widgets[forindex] = courses[c].modules[m].lessons[l].topics[t].widgets[forindex+1]
                                courses[c].modules[m].lessons[l].topics[t].widgets[forindex+1] = temp
                            }
                        }
                    }
                }
            }

    }


    static findWidget = (forID) => {
        for(let c in courses) {
            for(let m in courses[c].modules) {
                for(let l in courses[c].modules[m].lessons) {
                    for(let t in courses[c].modules[m].lessons[l].topics) {
                           for (let w in courses[c].modules[m].lessons[l].topics[t].widgets){
                               if (courses[c].modules[m].lessons[l].topics[t].widgets[w].id ==forID){
                                   return courses[c].modules[m].lessons[l].topics[t].widgets[w];
                               }
                        }
                    }
                }
            }
        }
    }*/

    static findAllCourses = (userId) =>{

        console.log("in find service react")
        return fetch(API_URL+userId+'/course',{
            credentials:'include',
        }).then(response=>response.json())
        };

    static createCourse = (course,userId) =>{
        return fetch(API_URL+userId+'/course',{
            body:JSON.stringify(course),
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            }}).then(response=>response.json())
        }

    static deleteCourse = (cid,userId) =>{
        console.log("hello")

        return fetch(API_URL+userId+'/course/'+cid,{
            method:'DELETE'
            }).then(response=>response.json())
    }

    static findCourseById(userId,courseId) {

      return fetch(API_URL+userId+'/course/'+courseId).then(response=>response.json())

    }


    static updateCourse(userId,course,courseId){
        return fetch(API_URL+userId+'/course/'+courseId,{
            body:JSON.stringify(course),
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            }
    }).then(response=>response.json())
    }
    /*
    static deleteModule = moduleToDelete => {
        courses = courses.map(course => {
            course.modules = course.modules.filter(
                module => module !== moduleToDelete
            )
            return course;
        })
    }
    static deleteWidget = (forTopic, forWidget) => {
        for(let c in courses) {
            for(let m in courses[c].modules) {
                for(let l in courses[c].modules[m].lessons) {
                    for(let t in courses[c].modules[m].lessons[l].topics) {
                        if(courses[c].modules[m].lessons[l].topics[t].id === forTopic.id) {
                            const widgetIndex = courses[c].modules[m].lessons[l].topics[t].widgets.findIndex(widget => widget.id === forWidget.id)
                            courses[c].modules[m].lessons[l].topics[t].widgets.splice(widgetIndex, 1)
                        }
                    }
                }
            }
        }
    }


    static deleteTopic = (lessonToDelete) =>
    {
        console.log(courses[0].modules);
        courses= courses.map( course=> { course.modules.map(
            module=>{
                module.lessons.map(lesson=>{
                    lesson.topics = lesson.topics.filter(topic=> topic != lessonToDelete)
                })
            }
        );
            return course;

        })
    };

    static deleteLesson = (lessonToDelete) =>
    {

        courses= courses.map( course=> { course.modules.map(
            module=>{
                module.lessons = module.lessons.filter (lesson => lesson != lessonToDelete)
            });
                return course;
            }
        )



    };


    static selectModule = (selectedModule, moduleTitle ) => {

        console.log("moduke")
        courses = courses.map(course => {
            course.modules = course.modules.filter(
                module => module !== selectedModule
            )
            return course;
        })
    }*/
}
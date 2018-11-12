import React from 'react'

const LessonTab = ({courseId,moduleId,lesson, selectLesson, selected,deleteLesson,getLessonName}) =>
    <li className="nav-item">
        <a onClick={() => selectLesson(lesson)}
           className={selected ? "nav-link active" : "nav-link"}>
            {lesson.title}
            <a onClick= {()=>getLessonName(lesson.id,lesson)}>
                <i className="fa fa-pencil"></i></a>
            <a onClick= {()=>deleteLesson(courseId,moduleId,lesson.id)}>
                <i className="fa fa-times"></i></a>
        </a>
    </li>

export default LessonTab
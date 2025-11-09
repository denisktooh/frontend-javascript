/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />

import SubjectNs = Subjects.Subject;
import TeacherNs = Subjects.Teacher;

export interface Teacher extends TeacherNs {
    experienceTeachingReact?: number;
}

export class React extends SubjectNs{
    teacher: Teacher;

    getRequirements(): string {
        return 'Here is the list of requirements for React';
    }

    getAvailableTeacher(): string {
        if (this.teacher === undefined 
            || this.teacher.experienceTeachingReact === undefined 
            || this.teacher.experienceTeachingReact < 1
        ) {
            return 'No available teacher';
        } else {
            return `Available Teacher: ${this.teacher.firstName}`;
        }
    }
}
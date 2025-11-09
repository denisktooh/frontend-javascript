/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />

import SubjectNs = Subjects.Subject;
import TeacherNs = Subjects.Teacher;

export interface Teacher extends TeacherNs {
    experienceTeachingJava?: number;
}

export class Java extends SubjectNs {
    teacher: Teacher;

    getRequirements(): string {
        return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher(): string {
        if (this.teacher === undefined 
            || this.teacher.experienceTeachingJava === undefined 
            || this.teacher.experienceTeachingJava < 1
        ) {
            return 'No available teacher';
        } else {
            return `Available Teacher: ${this.teacher.firstName}`;
        }
    }
}
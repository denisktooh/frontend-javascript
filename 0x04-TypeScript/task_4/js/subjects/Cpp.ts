/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />

import SubjectNs = Subjects.Subject;
import TeacherNs = Subjects.Teacher;

export interface Teacher extends TeacherNs {
        experienceTeachingC?: number;
}

export class Cpp extends SubjectNs {
    teacher: Teacher;

    getRequirements(): string {
        return 'Here is the list of requirements for Cpp';
    }

    getAvailableTeacher(): string {
        if (this.teacher === undefined 
            || this.teacher.experienceTeachingC === undefined 
            || this.teacher.experienceTeachingC < 1
        ) {
            return 'No available teacher';
        } else {
            return `Available Teacher: ${this.teacher.firstName}`;
        }
    }
}

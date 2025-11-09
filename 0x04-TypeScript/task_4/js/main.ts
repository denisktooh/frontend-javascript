import { Cpp, Teacher as Teacher} from './subjects/Cpp';
import { Java } from './subjects/Java';
import { React } from './subjects/React';

const cpp = new Cpp();
const cTeacher: Teacher = { firstName: 'John', lastName: 'Doe', experienceTeachingC: 10 };
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

const java = new Java();
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

const react = new React();
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

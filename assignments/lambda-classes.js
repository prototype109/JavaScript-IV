// CODE here for your Lambda Classes

// Person
// First we need a Person class. This will be our base-class
// Person receives name age location all as props
// Person receives speak as a method.
// This method logs out a phrase Hello my name is Fred, I am from Bedrock where name and location are the object's own props

class Person{
    constructor(props){
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
    }

    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

const someDude = new Person({
    name: 'Fred',
    age: 30,
    location: 'Bedrock'
});

someDude.speak();

// Instructor
// Now that we have a Person as our base class, we'll build our Instructor class.
// Instructor uses the same attributes that have been set up by Person
// Instructor has the following unique props:
// specialty what the Instructor is good at i.e. 'redux'
// favLanguage i.e. 'JavaScript, Python, Elm etc.'
// catchPhrase i.e. Don't forget the homies
// Instructor has the following methods:
// demo receives a subject string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
// grade receives a student object and a subject string as arguments and logs out '{student.name} receives a perfect score on {subject}'

class Instructor extends Person{
    constructor(props){
        super(props);
        this.specialty = props.specialty;
        this.favLanguage = props.favLanguage;
        this.catchPhrase = props.catchPhrase;
    }

    demo(subject){
        console.log(`Today we are learning about ${subject}`);
    }

    grade(student, subject){
        console.log(`${student.name} recieves a perfect score on ${subject}`);
    }
}

const profDeath = new Instructor({
    name: 'Freddy',
    location: 'Your dreams',
    specialty: 'redux',
    favLanguage: 'Javascript',
    catchPhrase: "Don't forget the homies"
});

profDeath.demo('Statistics');
profDeath.speak();

// Student
// Now we need some students!
// Student uses the same attributes that have been set up by Person
// Student has the following unique props:
// previousBackground i.e. what the Student used to do before Lambda School
// className i.e. CS132
// favSubjects. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// Student has the following methods:
// listsSubjects a method that logs out all of the student's favoriteSubjects one by one.
// PRAssignment a method that receives a subject as an argument and logs out that the student.name has submitted a PR for {subject}
// sprintChallenge similar to PRAssignment but logs out student.name has begun sprint challenge on {subject}

class Student extends Person{
    constructor(props){
        super(props);
        this.previosBackground = props.previosBackground;
        this.className = props.className;
        this.favSubjects = props.favSubjects;
    }

    listsSubjects(){
        console.log(`${this.name} favorite subject list:`)
        this.favSubjects.forEach(function(subject){
            console.log(`${subject},`)
        });
    }

    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

const Brandon = new Student({
    name: 'Brandon',
    location: 'Texas',
    previosBackground: 'Student at college',
    className: 'Web_pt7',
    favSubjects: ['Javascript IV', 'Javascript III', 'Javascript II', 'PreprocessingII']
});

Brandon.listsSubjects();
Brandon.PRAssignment('Javascript IV');
Brandon.sprintChallenge('Javascript Fundamentals');
profDeath.grade(Brandon, 'Javascript IV');

// Project Manager
// Now that we have instructors and students, we'd be nowhere without our PM's
// ProjectManagers are extensions of Instructors
// ProjectManagers have the following unique props:
// gradClassName: i.e. CS1
// favInstructor: i.e. Sean
// ProjectManagers have the following Methods:
// standUp a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
// debugsCode a method that takes in a student object and a subject and logs out {name} debugs {student.name}'s code on {subject}

class ProjectManager extends Instructor{
    constructor(props){
        super(props);
        this.gradClassName = props.gradClassName;
        this.favInstructor = props.favInstructor;
    }

    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }

    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

const Guillermo = new ProjectManager({
    name: 'Guillermo',
    gradClassName: 'CS1',
    favInstructor: 'Dan Levy'
});

Guillermo.standUp('webpt7_Guillermo');
Guillermo.debugsCode(Brandon, 'Javascript IV');
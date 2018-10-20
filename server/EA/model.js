class Running{
    constructor(){
        this.profile = [];
    }
    recordExercise(exercise, cProfile){
        this.profile[cProfile].recordedExercises.push(exercise);
    }
}

class Profile{
    constructor(name, idNumber){
        this.name = name;
        this.idNumber = idNumber; //users may have same name, id is used to separate similar users
        this.recordedExercises = [];
    }
}

module.exports = {
    Profile, Running
}
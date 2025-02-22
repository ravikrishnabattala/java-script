class person {
    eat() {
        console.log("Eat");
    }
}

class Engineer extends person{

    work(){
        eat();
        console.log("Solve problems, Build something");
    }
}

let engObj = new Engineer();
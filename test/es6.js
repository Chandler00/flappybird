/**
 *chandler
 */

class Animal {
    constructor(name = '无名字', age = 0) {
        this.name = name;
        this.age = age;

    }

    roar() {
        console.log(this.name, this.age);
    }
}

class Cat extends Animal {
    constructor(name, age) {
        super(name, age);

    }
    say(){
        super.roar();
        console.log('zilei say')

    }
}

const cat = new Cat('xiaomao', 2);
cat.say();

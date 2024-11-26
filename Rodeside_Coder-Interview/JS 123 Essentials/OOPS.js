function Person(name,age) {
    this.name = name || 'Geetesh';
    this.age = age || 23;
    this.displayName = function(){
        console.log(this.name)
    }
}

Person.name = 'Geetesh';
Person.displayName = function(){
    console.log(this.name)
}
var person1 = new Person('Geetesh');
    person1.displayName();
    Person.displayName()
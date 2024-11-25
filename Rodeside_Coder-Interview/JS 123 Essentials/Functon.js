// Q.1
function funM() {
    console.log('Main Function', this);
    (function first() {
        console.log('first Function', this);
        (function second() {
            console.log('second Fnction', this)
        })()
    })()
}
// console.log(funM())

// output will return all function -> Mainfun()-> firstfun() -> secondfun() 'reffering to window object'

//--------------------------------------------------------------------------------------------------------------

//Q.2
var obj = {
    message: "First Property",
    inner: !(function () {
        console.log(this.message)
    })()
}
console.log(obj.inner)

// output- iife function inside inner will return will result undefined and !undefined = true So outwill be: undefined true

//--------------------------------------------------------------------------------------------------------------

// Q.3
var obj1 = {
    message: 'Hello this is first property',
    innerMessage: function () {
        return this.message
    }
}
console.log(obj1.innerMessage())

// output- it is a normal fnction and returning this.message will return message - Hello this is first property
//--------------------------------------------------------------------------------------------------------------

// Q.4
var obj2 = {
    message: "Hello this is First Property of nested fun",
    innerMsg: function () {
        (function () {
            return this.message
        })()
    }
}
console.log(obj2.innerMsg())

/*output- IIFE of inside innerMsg will return because this inside iffe will refer to window object and global obj
  dont have message property */
//--------------------------------------------------------------------------------------------------------------

// Q.5 
let obj3 = {
    message: 'this is message',
    innerMsg: function () {
        var self = this;
        (function () {
            return console.log(self.message)
        })()
    }
}
console.log(obj3.innerMsg())
/* Code 1 (obj2): Inside the IIFE, this refers to the global object (window in browsers), not obj2, because the IIFE 
is invoked as a standalone function, not a method of obj2. As a result, this.message inside the IIFE is undefined. */
/* Code 2 (obj3): Inside the innerMsg function, this refers to obj3 (since it's a method of obj3), and we assign 
this to a variable self. In the IIFE, self refers to obj3, so self.message correctly accesses obj3.message,
 which is 'this is message'. */

//----------------------------------------------------------------------------------------------------------------

console.log(`Hello World from main.js! 
Change this message, and make sure it changes in the browser 
to verify that you're working in the right files.`);

// ES5
var aVar = 10;


// ES2015 => ES6
let anotherVar = "a let var";
const aConstant = "a constant";

function doSomething() {

}

const doSomethingElse = () => {

}

var aButton = document.querySelector("button");

aButton.addEventListener("click", function(evt) {
    // do something

    console.log("clicked A");

})

aButton.addEventListener("click", (evt) => {
    // do something

    console.log("clicked B");
    aButton.innerText = "Clicked";
})

function myCallback(evt) {
    // do something
    console.log("clicked C");

}
aButton.addEventListener("click", myCallback );

const SLIDES_PER_DECK = 4;

const myObject = {
    aVar: 10,
    something: 21,

    doSomething: function() {
        console.log("hi there", aVar, this.aVar)
    },

    start: () => {
        console.log("start hi there", this.aVar) 
    }

};

console.log("aVar", myObject.aVar);
console.log("did something", myObject.doSomething());
aButton.addEventListener("click", myObject.doSomething );

// IIFE = immediately invoked function expression
const myObject2 = (function() {

    const aVar = 10;
    let aVar2 = "b";

    function show() {
        console.log("me", this)
    }

    function startFunction() {
        console.log('starting...', aVar, aVar2, this.aVar2)
    };

    function updateVar(newValue) {
        aVar2 = newValue;
    }

    return {
        start: startFunction,
        update: updateVar,
        show: show,

        // aVar2: aVar2
    }
})();

class MyObject {

    aVar = "a";

    start() {
        console.log('starting...', aVar)
    }

}

class Slide {
    build() {

    }
}

class Carousel {

    slides = []
    makeSlides() {
        const slideArray = []
        for(let i=0; i<slideArray.length; i++) {
            const slide = new Slide();
            slides.push(slide)
        }
    }
}

class Car {
    setType(name) {
        this.name = name
    }

    drive() {
        console.log('driving my ' + this.name)
    }
}
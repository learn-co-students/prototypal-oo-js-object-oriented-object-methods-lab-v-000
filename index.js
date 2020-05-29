function BoardMember(name, homeState, training) {
  this.name = name;
  this.homeState = homeState;
  this.training = training;
}

const memberProto = BoardMember.prototype;

memberProto.veto = () => "No, I must disagree";
memberProto.approve = () => "You can do that!";
memberProto.doCharity = () => "I like to help people.";
memberProto.releasePressStatement = () => "You will see great things from Scuber.";

memberProto.sayHi = function() {
  return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`;
}

/* memberProto.sayHi = () => `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`;
 * This didn't work because of the execution contexts of arrow functions. 
 * They don't have their own 'this', so they use the lexical 'this' (that of the environment they're defined in).
 * In the case above, the 'this' of sayHi is the global/window Object, which has no name, homeState, or training properties.
 * To get the 'this' that I wanted (the BoardMember object that called the sayHi function), I needed to use a regular function expression.
 * I got away with the arrow function syntax in the other functions/methods, but only because they didn't use 'this'.
 * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
*/
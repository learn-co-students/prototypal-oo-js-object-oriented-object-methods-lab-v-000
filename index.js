function BoardMember(name, homeState, training){
  this.name = name;
  this.homeState = homeState;
  this.training = training
}

// Here is the archetypal Flatiron doctrine technique:
BoardMember.prototype.veto = function(){
  return 'No, I must disagree'
}

// Here is a shorthand alternative that also works, but it can't do string
// interpolation apparently, so the last function below cannot be formatted
// like this one:
BoardMember.prototype.approve = () => 'You can do that!';


BoardMember.prototype.doCharity = function(){
  return "I like to help people."
}

BoardMember.prototype.releasePressStatement = function(){
  return "You will see great things from Scuber."
}

BoardMember.prototype.sayHi = function(){
  return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
}

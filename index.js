//can create a BoardMember with a name, home state, and training
function BoardMember(name, homeState, training){
    this.name = name
    this.homeState = homeState
    this.training = training
}

//the Prototype as a Means for Reducing Inefficiency
//keeps an extra function from inside the function to lower bytes

//veto — returns No, I must disagree
BoardMember.prototype.veto = function(){
    return 'No, I must disagree'
}

//approve — returns You can do that!
BoardMember.prototype.approve = function(){
    return 'You can do that!'
}

//doCharity — returns I like to help people.
BoardMember.prototype.doCharity = function(){
    return "I like to help people."
}

//releasePressStatement — returns You will see great things from Scuber.
BoardMember.prototype.releasePressStatement = function() {
    return "You will see great things from Scuber."
}

//sayHi — returns "Hi, my name is <name>. I am from <homestate>, and I was trained in <training>.
BoardMember.prototype.sayHi = function(){
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
}



/* Do not implement your solution like the code we have included at the bottom.
 * That implementation uses too much space and misses the point of prototypes
 */

/* ANTI-PATTERN: DO NOT WRITE Prototypal JS classes like the following */
/*
NO: function BoardMember(name, homeState, training){
NO:   this.name = name
NO:   this.homeState = homeState
NO:   this.training = training
NO: 
NO:   this.veto = function(){
NO:     return 'No, I must disagree'
NO:   }
NO:   this.approve = function(){
NO:     return 'You can do that!'
NO:   }
NO: 
NO:   this.doCharity = function(){
NO:     return "I like to help people."
NO:   }
NO: 
NO:   this.releasePressStatement = function(){
NO:     return "You will see great things from Scuber."
NO:   }
NO: 
NO:   this.sayHi = function(){
NO:     return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
NO:   }
NO: }
*/

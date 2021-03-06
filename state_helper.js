'use strict';
module.change_code=1;
var Set = require("collections/set");

function State_manager(obj){
    this.currentState='start';
    this.savedRecipes=new Set();
    this.storedRecipes=null;
    this.step=null;
    this.multiplier=1;
    this.ingredients=null;
    this.local=false
    this.recipe_info=null;
    this.steps=null;
    this.query=null;
    this.recipes=null;
    for(var prop in obj)this[prop]=obj[prop];
}

State_manager.prototype.getPrompt=function(){
    return alexa[this.currentState].prompt
};

State_manager.prototype.getHelp=function(){
    return alexa[this.currentState].help
};

var alexa= {
    start: {
        prompt: "Hello Chef, I am here to help you cook. How can I be of service? If you want to know what I can do, say help.",
        help: "Simply say, find by keyword or find by ingredients. Say \"saved recipes\" to pick from a list of saved recipes. Say cancel or stop at any time to exit."
    },
    continue_state: {
        prompt: "I see that you have a saved session. Say \"continue\" to resume your last session or \"new session\" to start a new session.",
        help: "Say, continue, to resume your last session or, new session, to start a new session."
    },
    search: {
        prompt: "Would you like to search by keywords, ingredients?",
        help: "Simply say, search by keywords or search by ingredients."
    },
    keywords: {
        prompt: "OK, say a keyword you would like to search with.",
        help: "Simply say what keywords you would like to search with."
    },
    keywords1: {
        prompt: "say another keyword or say, begin search, if you would like me to begin searching",
        help: "simply say a keyword or ,begin search, if you want to start searching"
    },
    ingredients: {
        prompt: "Say an ingredient you would like to search with.",
        help: "Simply say an ingredient."
    },
    ingredients1: {
        prompt: "Say another ingredient or say , begin search, if you are ready to search.",
        help: "Say an ingredient or say , begin search, if you are ready to search."
    },
    search_choices: {
        prompt: "Here is what I found.",
        help: "Say the number corresponding to the recipe you would like to select."
    },
    steps_choice: {
        prompt: "Would you like me to read the steps step by step or all at once? " +
        "You may also say \"save recipe\" to save this recipe or say \"what are the ingredients\" for me to repeat the ingredients. " +
        "You may also say \"set multiplier to a number\" to multiply the servings for this recipe",
        help: "You can say, step by step, or all at once. You may also say, save recipe, to save this recipe"
    },
    step_by_step: {
        prompt: "Say next step to move on to the next step, previous step to go back, or repeat step to say the step again",
        help: "Say next step to move on to the next step, previous step to go back, or repeat step to say the step again"
    }
};
module.exports=State_manager;

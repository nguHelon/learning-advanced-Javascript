# Learning-advanced-JavaScript
* [calculator project](https://github.com/nguHelon/learning-advanced-Javascript/edit/master/READMe.md#calculator-project)

# Calculator project

...
## A fully functional calculator created with JavaScript programming language with HTML and CSS.
This is a simple calculator which I used to implement an important JavaScript design pattern knows as the REVEALING MODULE PATTERN, It is pretty basic but thanks to it I understood many JavaScript concepts like :

* Nested Functions
* SCOPE
* Lexical Scoping ( Lexical environments )
* The Execution context 
* IIFE ( Immediately Invoked Function Expression )
* Revealing Module Pattern
* and finally CLOSURES

## Revealing module pattern
This desing pattern covers many javascript rules in it like - closures, IIFE, Lexical Environment, execution context - Below is the RMP rule I used to create the functionality
![RPM](https://user-images.githubusercontent.com/112963092/202444318-40ca2516-1cc0-4c45-bd7a-cf2b35600724.png)
So traditionally, JavaScript does not have 'private' and 'public' specifiers, So we can use the RMP design pattern to create public and private methods. So Let me explain how it covers other topics.

### IIFE
Normally we could not have created 'mainFunctionality' with just an anonymous function, because on calling it we are going to create different instances of it and we going to pollute the global scope. so to prevent we use the IIFE. So that when JavaScript runs the file, when it sees the IIFE it will run automatically and the moment of definition so therefore the variables will run once and can only be change by any other methods in the IIFE's scope. 

### Scope
When JavaScript runs the IIFE it creates a scope, but you see that only the functions that were created in it can have access to it and change it. So this also covers the topic scope which shows the availability of a variable. SO that is why only getNumberOperations( ) method and the others can have access to the variables declared in it.

### Lexical Environment
The Lexical environment is where our code is physically written, In a JavaScript file there can be many lexical environments. From what I understand when we create a function we create a lexical environment.

### Closures
Closures here play a very important role. Intuitively speaking we know that when we run a functionality and its completed, any variable in it can not more be accessible. But when we run maybe mainFunctionality.add( ) method it still works even though the IIFE run already. Well, In JavaScript, we have closures, closures are a combination of a lexical environment and functions that are declared in it. So that means, the add( ) method references to it instance in the IIFE where the arrayNumbers and latesInputValue variables are, that is why add( ) can remember those variables since they formed a closure.

# task list project

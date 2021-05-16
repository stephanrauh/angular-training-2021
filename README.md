# angular-training-2021
Stephan is an Angular trainer! Here are sample solutions and live coding used in a real-world training.

## 0. Introduction to Angular

We'll create a little Angular project on stackblitz.com. That's a good starting point to show the key concepts of Angular, the folder structure, and maybe even the infrastructure files (such as package.json). 

Key takeaways:
- Angular is fun!
- Maybe there's a lot to learn, but it ain't bad, and it's much easier than they say.

## 1. Quick dive into TypeScript and the node.js ecosystem

Let's do something unexpected. This course need a server. The Express framework makes this very simple. Along the way, you'll learn a lot about TypeScript.

The language itself can be demonstrated in the TypeScript playground. The Express application is going to serve the lists of countries and continents provided by https://restcountries.eu/, so it's a good starting point to demonstrate
- JSON
- functional programming
- and - if time allows - even some REST principles.

Key takeaways:
- Writing a web server is a matter of five minutes if you're ready to use JavaScript!

- If time allows: How to deploy an Angular application to the web server?
  
- Quick introduction to TypeScript
  - Data types
  - if, for, while, and why should I use a triple `===`?
  - JSON objects
  - Classes, methods, attributes
  - Inheritance and class hierarchies (optional)
  - Private attributes with getters and setters
    - if Java developers are attending: don't waste time introducing getters and setters prematurely. `public` has been introduced for a reason.
  - Functional programming with TypeScript
  - Interfaces (especially if Java developers are attending)
  - Type inference
  - JavaScript's approach to truth and truthyness

- If time allows: TypeScript configuration
  - forbidding `any` and `undefined`
  - Union types 101: explaining `string | undefined` etc.

- Introduction to the node.js ecosystem
  - What are node.js, npm, tsc, and the `node_modules` folder?
  - How come TypeScript is a dependency of the project?
  - If time allows: introduction to semantic versioning and how to use npmjs.com

## 2. Components everywhere!

The key idea of Angular is writing components. We'll analyse the front page of the travelguide application to decide which components to write, and we're going to write them.

Key takeaways:
- It feels nature to decompose any web application into components.
- Components consist of HTML, CSS, and TypeScript.
- Angular takes the sting out of CSS by introducing lokal CSS. Whatever you've heard about dreadful CSS: forget about it. Just enjoy writing CSS!

# Introduction to TypeScript and the npm ecosystem

The language itself can be demonstrated in the TypeScript playground. The Express application is going to serve the lists of countries and continents provided by https://restcountries.eu/, so it's a good starting point to demonstrate
- JSON
- functional programming
- and - if time allows - even some REST principles.

Key takeaways:
- Writing a web server is a matter of five minutes if you're ready to use JavaScript!

- If time allows: How to deploy an Angular application to the web server?
  
- Quick introduction to TypeScript
  - Data types
  - Three kinds of string delimiters: "" vs. '' vs. ``
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
  - import and export

- If time allows: TypeScript configuration
  - forbidding `any` and `undefined`
  - Union types 101: explaining `string | undefined` etc.

- Introduction to the node.js ecosystem
  - What are node.js, npm, tsc, and the `node_modules` folder?
  - How come TypeScript is a dependency of the project?
  - If time allows: introduction to semantic versioning and how to use npmjs.com
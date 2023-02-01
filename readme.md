## PandaEvents

PandaEvents is a powerful lite weight JavaScript library for building event-driven applications, handling asynchronous operations, and customizing events and listeners in an elegant way. The library is specially designned for browser based applications although this is eqally powerful for Node.JS applications.

PandaEvents is a versatile and lightweight JavaScript library that simplifies the process of building event-driven applications. It provides a comprehensive set of tools for handling asynchronous operations, creating custom events and listeners, and managing complex event flows. This library is specially designed for browser-based applications, but it can also be used in Node.js environments to enhance the event management of your application. With its intuitive API, PandaEvents makes it easy to create and manage events, allowing developers to focus on building the core functionality of their applications. Whether you're working on a single-page web app or a complex web-based system, PandaEvents has the features you need to build robust and responsive event-driven applications.

#### Installation

PandaEvents can be installed easily as a package through **NPM** or **Yarn**, and also can be used in your web application through **CDN** (ESM is also available through CDN)

**NPM or Yarn**

npm install [package]

or

yarn add [package]

**CDN**

[[link]](https://)

(ESM)

[link](https://)

#### Getting started

Earlier, we studied how to install the library. Now, let's learn how to access the Event object or the core event emitter class in the PandaEvents library.

The PandaEvents library exports three items: the method **pandaEvents**, the class **PandaEvents**, and the default export "events" which holds both "pandaEvents" (function) and "PandaEvents" (class).

Let's see how we can use them programatically.

```
//Imporing the pandaEvents method
import {pandaEvents} from "[package]";

//Getting instance of the emitter through the pandaEvents() method
const e= pandaEvents();
```

Or

```
//Importing the PandaEvents class
import {PandaEvents} from "[package]";

//Creating instance
const e= new PandaEvents();
```

Or

```
//Imporing the default exported object which contains both the method and the class
import events from "[package]"

//we either call the method in the way written below
const e= evants.pandaEvents();

//or, we can create instance of the class
const e1= new evants.PandaEvents();
```

#### Let's understand what's the role of an Event listener and how the PandaEvents gets into the picture.

Let's first understand what an event listener does in a nutshell.

Have you ever clicked a button and noticed that something happens as a result? That's what happens when we use event listeners in web development. An event listener is like a special function that detects for something to happen, like a button click. When the button is clicked, the event listener knows to run a specific function that was defined beforehand. This process allows us to make our web pages interactive and responsive to what the user does.

Well, that's awesome. The browser gives us the capability to perform event-driven operations with DOM elements (i.e Buttons, Input boxes, Div, etc). But what about achieving the same thing without a DOM element? think of Node.JS where we don't have any DOM elements but still, we use it to make event-driven programs effectively, right? there is a built-in module available in Node.js called EventEmitter that allows to do such things and the PandaEvents is also created following the same concept to bring that awesomeness with or without Node.js. maybe in your browser.

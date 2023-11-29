# BaileysChores
 Scrimba boot  camp project, choreslist
#Scrimba boot camp exclusive solo project Module 3

This is a solution to the [Choreslist boot camp solo project from Scrimba](https://scrimba.com/scrim/co3004026ac4f5b88ce3a014f). Scrmimba is a fun and fast way of learning to code. The interactive courses and tutorials  challenges help improve coding skills by building realistic projects. Scrimba boot camp takes you from HTML basics through CSS to JavaScript, api's, React and more.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Build it from scratch
- COLOR PALETTE:
    - WHITE: #FEFEFE, BLACK: #000000, 
    - TEXT INPUT BACKGROUND: #EEEEEE
    - ADD BUTTON: #FFCC68
    - DELETE BUTTON: #FF9548
    - CHORE: #FBDF7C
- Can't add empty chore
- Make sure to use:
  - addEventListener()
  - innerHTML
  - Template strings
  - Google font: inter and Concert
  - localStorage (so local browser remembers list)
  - - **Bonus**: Stretch goals
        - Can't add existing chore
        - Click on individual chores to remove from list
        - Show a random GIF when all chores are completed 
            
- View the optimal layout for the interface depending on their device's screen size

### Screenshot

![](./images/Web%20capture_24-11-2023_185719_127.0.0.1.jpeg)

### Links

- Solution URL: (https://github.com/egpennington/baileysbark/tree/main)
- Live Site URL: (https://baileysbark.netlify.app/)

## My process
- From scratch just comparing look of Scrimba's screen.
- Looked at the project HTML, CSS, JS setup on Scrimba.
- Then built from scratch with own HTML, CSS and JS.

### Built with
- Semantic HTML5 markup
- CSS custom properties
- JavaScript
- Flexbox
- Mobile-first workflow

### What I learned
Relearned how to get items from a database.
And then to use createElement to appear in innerHTML.
Main challenges were with getting JS to work properly with database.

Enjoyed getting HTML to work with JS and database, first using place holders then working with innerHTML to code it. from dblclick to getting localStorage data was challenging.

```
```

JS was a good challenge to find the locationStorage data and use it using JSON.parse and JSON.stringify.

```js
btnDelEl.addEventListener("dblclick", function() {
    console.log("deleted item")
    localStorage.clear()
    todo = []
    choreList.innerHTML = ""
})

const todoFromLocalStorage = JSON.parse( localStorage.getItem("todo") )

if (todoFromLocalStorage) {
    todo = todoFromLocalStorage
    render(todo)
}
```

Help with writing markdown, check out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

### Continued development

Next development will to learn to use createElement instead of literals to make this app more dynamic.  And also to use Firebase for the data base so it can update on mulitple apps instantly,so users can share.

### Useful resources

- [Main resource 1](https://scrimba.com/scrim/cG8EnJHv) - This helped me set up the session. Then I took it and went from scratch.

- [AI](https://chat.openai.com/auth/login) - This helped in getting explainations on why something wasn't working.  It explained how i can change my literals into a createElement style that i will use next.

## Author

- Website - [Emmett Pennington](will be coming soon)
- Github - [egpennington](https://github.com/egpennington?tab=repositories)
- Twitter - [@emmettpenn23](https://www.twitter.com/emmettpenn23)

## Acknowledgments

Credit goes out to Scrimba boot camp for the great process of learning to code!
And the code reviews help advance my skills.


# Expense Tracker Application.

Application that helps users track their spending by allowing them to create a budget and input,categorize, edit and delete their expenses.

## Table of contents

  - [Overview](#overview)
  - [The project - Features](#the-project)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [If I had more time I would change this](#if-i-had-more-time-i-would-change-this)
  - [Continued development](#continued-development)
  - [Author](#author)

## Overview

### The project

Users should be able to:

- Define a budget.
- Add, edit and delete their expenses.
- Experience Form Validation (basic and data form validation) for both the budget and expenses input.
- Filter through their expenses according to categories.
- See a circular progress bar of their spent money.
- Have their budget and expenses saved on Local Storage for later review.
- Reset the app, thus deleting the budget and expenses.
- Check their total and available budget and the amount spent.
- View the optimal layout depending on their device's screen size.
- See hover states for interactive elements.

### Screenshot

![Screenshot of the project1](./src/img/expense-tracker-screenshot1.png)
![Screenshot of the project2](./src/img/expense-tracker-screenshot2.png)
![Screenshot of the project3](./src/img/expense-tracker-screenshot3.png)

### Links

- Live Site URL: [Expense Tracker App Live](https://expenses-tracker-jee.netlify.app/)

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- [Vite](https://vitejs.dev/) - React environment
- [React Circular Progressbar](https://www.npmjs.com/package/react-circular-progressbar) - For circular progress bar component
- [React Swipeable List](https://www.npmjs.com/package/react-swipeable-list) - For rendering the lists of expenses with swipeable features
- [CSS3](https://www.w3.org/Style/CSS/) - For style
- [Semantic HTML5 markup](https://www.w3.org/html/) - For the web structure
- Flexbox
- Mobile-first workflow

### What I learned

- This project made me really good at understanding Reac useState. On it, I have used state for the post validation of the budget (after inputing a valid budget, users can access another part of the website), also for filtering through the different expenses. For the modal window, I used state as a prompt for it to pop up and also to animate it by adding a CSS class when certain state is true. Lastly, I achieved the app reset by modifying the current state and consequently affecting the data storaged in Local Storage.
- I learned how to add external components from the NPM Registry and apply them in personal projects. They can really boost your website's UI and UX.
- This was one of the most difficult projects of the beginnings of my programming development and it helped me become much better pretty much at everything I already knew: React, JS, CSS and HTML.
- How I to add variables to Local Storage and fetched them correctly,
- 
### If I had more time I would change this

- If I had more time I could add a data base and server side to this app so that the budget and expenses get stored in a more reliable place. At the moment, I did not feel like building a fullstack project because my goal was mainly to improve my frotend skills.
- I would definitely use some different approach for the CSS, maybe Sass or Styled Components.

### Continued development

After this website I am going to continue to further my studies on React, trying to raise the complexity of the projects I undertake. Also, I want to explore more with RESTful APIS.

## Author

- Twitter - [@CokoEche](https://twitter.com/CokoEche)
- LinkedIn - [@jorgeecheverria-dev] (https://www.linkedin.com/in/jorgeecheverria-dev/)

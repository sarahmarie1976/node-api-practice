# Sprint Practice: State Management - Redux

## Description

In this challenge, you are to build a list of NBA players utilizing Redux as your state management. Build this challenge from the ground up using what you have learned about state management.

## Project Set Up

Follow these steps to set up your project:

- [ ] `fork & clone` this repository.
- [ ] `cd` into the forked copy of this repository.
- [ ] **RUN** `npm install` to retrieve all `server-side` the dependencies.
- [ ] **RUN** `npm start` to get your API up and running on `http://localhost:3333`. This is the **URL** you're going to need to use within your React app in order to make AJAX requests for data.
- [ ] After your API is up and running, you can open chrome and type in `http://localhost:3333/players`. You should see an array with one player in it returned to you. This is an array that your **API** will be using to store our player Data.
- [ ] **LOOK** at your `project` directory and notice it's just a plain ol' React App that we've built using `create-react-app`.
- [ ] **Open** `src/index.js` to make sure that your app is ready to roll with the proper middleware.
- [ ] **cd** into `project` and run `npm install` to retrieve the client side dependencies.
- [ ] **RUN** `npm start` to fire up your React application. There ought to be a pretty little message awaiting you welcoming you to the app. `Follow` the prompting.

**LOOK** at all the files you've been given for this project. One important file to note is `server.js`. This file contains an **API** that you are going to be interfacing with. Below is documentation on how to interact with the **API**.

## Minimum Viable Product

- [ ] Plan and implement how you are going to manage your state for your application
- [ ] You _must_ use either context or Redux as your state management system
- [ ] Once you have planned out your state management system, fetch data from the player server and display the data it returns
- [ ] Add a form to collect info for a new player, and make a POST request to the server to add a new player to your village

## API documentation

### GET '/players'

- [ ] Retrieve an array all the players in the player DB by writing a `GET` to the endpoint `/players`.
- [ ] Double check that your response from the server is an array of players.

```js
[
  {
    name: "Ricky Rubio",
    age: 29,
    height: "6′ 4″",
    id: 0
  }
];
```

### POST '/players'

- [ ] Design the functionality to add a player to the player DB you'll need all three fields. `name`, `age`, and `height`.

Example of the shape of data to be sent to the `POST` endpoint:

```js
  {
    name: "Ricky Rubio",
    age: 29,
    height: "6′ 4″",
    id: 0
  }
```

- [ ] Double check to make sure that a player is created correctly once your functionality is built out.

Initially Ricky will be in the array, but it takes more than one player to make a roster. Be sure to add a few players!

Example of object created in player DB:

```js
[
  {
    name: "Ricky Rubio",
    age: 29,
    height: "6′ 4″",
    id: 0
  },
  {
    name: "Stephen Curry",
    age: 32,
    height: "6′ 3″",
    id: 1
  }
];
```

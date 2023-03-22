const JokeController = require("../controllers/jokes.controller");

module.exports = app => {
    app.get("/api/jokes/", JokeController.getAllJokes);
    app.get("/api/jokes/:id", JokeController.findJokeById);
    app.get("/api/jokes/random/", JokeController.findJokeRandomly);
    app.post("/api/jokes/new", JokeController.createNewJoke);
    app.put("/api/jokes/update/:id", JokeController.updateJoke);
    app.delete("/api/jokes/delete/:id", JokeController.deleteJoke);
};
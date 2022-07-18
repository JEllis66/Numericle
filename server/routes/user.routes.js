const UserController = require("../controllers/user.controller")

module.exports = (app) => {
    app.get("/api/user", UserController.findAllUsers)
    app.post("/api/user", UserController.createUser)
    app.get("/api/user/:id", UserController.findOneUser)
    app.put("/api/user/:id", UserController.editUser)
    app.delete("/api/user/:id", UserController.deleteUser)
}
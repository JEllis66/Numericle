const NumericleController = require("../controllers/numericle.controller")

module.exports = (app) => {
    app.get("/api/numericle", NumericleController.findAllEquations)
    app.post("/api/numericle", NumericleController.createEquation)
    app.get("/api/numericle/:id", NumericleController.findEquation)
    app.put("/api/numericle/:id", NumericleController.editEquation)
    app.delete("/api/numericle/:id", NumericleController.deleteEquation)
    app.get("/api/numericle/today/:date", NumericleController.findTodaysEquation)
}
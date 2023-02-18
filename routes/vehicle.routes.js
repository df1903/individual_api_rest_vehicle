const controller = require("../controller/logic/vehicle.controller");

module.exports = (app) => {
    console.log("Loading routes of vehicle");
    app.get("/vehicle", (req, res, next) => {
        controller.getAll(req, res, next)
    });

    app.get("/vehicle/byplate/:plate", (req, res, next) => {
        console.log("getiing vehicle by plate");
        controller.getByPlate(req, res, next)
    });
    
    app.post("/vehicle", (req, res, next) => {
        controller.createVehicle(req, res, next)
    });

    app.put("/vehicle", (req, res, next) => {
        controller.updateVehicle(req, res, next)
    });

    app.delete("/vehicle", (req, res, next) => {
        controller.deleteVehicle(req, res, next)
    });

    
};
const controller = require("../controller/logic/owner.controller");

module.exports = (app) => {
    console.log("Loading routes of owner");
    app.get("/owner", (req, res, next) => {
        controller.getAll(req, res, next)
    });

    app.get("/owner/bydocument/:document", (req, res, next) => {
        console.log("getiing owner by document");
        controller.getByDocument(req, res, next)
    });
    
    app.post("/owner", (req, res, next) => {
        controller.createOwner(req, res, next)
    });

    app.put("/owner", (req, res, next) => {
        controller.updateOwner(req, res, next)
    });

    app.delete("/owner", (req, res, next) => {
        controller.deleteOwner(req, res, next)
    });

    
};
/** packages */
const express = require("express");
const config = require("config");
const bodyParser = require("body-parser")

/** app configuration */
const app = express();
const port = config.get("server-port");
const jsonParser = bodyParser.json(); 
const urlEncodedParser = bodyParser.urlencoded(
    {extended: true}
);
app.use(jsonParser);
app.use(urlEncodedParser)


const ipFn = require("./middleware/getIpAddress");
app.use("*",ipFn);

// Vehicle routes loading
const vehicleRoutes = require ("./routes/vehicle.routes");
vehicleRoutes(app);

// Owner routes loading
const ownerRoutes = require ("./routes/owner.routes");
ownerRoutes(app);

app.listen(port, () =>{
    console.log("Server is running...");
});
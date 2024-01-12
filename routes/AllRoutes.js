const routes = require("express").Router();

routes.use("/api/state",(require("../cotroller/CityController")));
routes.use ('/api/signup',(require("../cotroller/SignupController")));
routes.use("/api/auth",require("../cotroller/authController"))
routes.use("/api/user-profile",require("../cotroller/profileController"));
routes.use("/api/admin-auth",(require("../cotroller/AdminColtroller")));

module.exports=routes;
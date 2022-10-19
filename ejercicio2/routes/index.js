"use strict";

const express = require("express");

const api = express.Router();

/* Controllers */
const { userController } = require("../controllers");

/** BEGIN ROUTES **/

api.get("/users", userController.getUsers);
api.get("/users/:id", userController.getUsersById);
api.post("/users", userController.createUser);
api.put("/users/:id", userController.updateUser);
api.delete("/users/:id", userController.deleteUser);

/** END ROUTES **/

module.exports = api;

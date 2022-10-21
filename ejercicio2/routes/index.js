"use strict";

const express = require("express");

const api = express.Router();

/* Controllers */
const { userController } = require("../controllers");

/* Validators */
const { validateCreate } = require("../validators/index");

/** BEGIN ROUTES **/

api.get("/users", userController.getUsers);
api.get("/users/filter", userController.filterUsers);
api.get("/users/:id", userController.getUsersById);
api.post("/users", validateCreate, userController.createUser);
api.put("/users/:id", userController.updateUser);
api.delete("/users/:id", userController.deleteUser);

/** END ROUTES **/

module.exports = api;

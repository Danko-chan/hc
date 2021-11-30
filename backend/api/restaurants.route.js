import express from "express"

import UserssCtrl from "./Users.controller.js"

const router = express.Router()




router
  .route("/users")
  .post(UserssCtrl.apiPostUsers)


export default router
const { Router } = require("express")
const multer = require("multer")

const UsersController = require("../controller/UsersController")
const UserAvatarController = require("../controller/UserAvatarController")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")
const uploadConfig = require("../config/upload")


const userRoutes = Router()
const upload = multer(uploadConfig.MULTER)

const usersController =  new UsersController()
const userAvatarController = new UserAvatarController()

userRoutes.post("/", usersController.create)
userRoutes.put("/", ensureAuthenticated, usersController.update)
userRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), userAvatarController.update)

module.exports = userRoutes
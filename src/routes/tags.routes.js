const { Router } = require("express")
const TagsController = require("../controllers/TagsController")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const tagsRoutes = Router()

const tagsController = new TagsController()

//EXPRESS HELP US MAKE HTTP REQUEST
tagsRoutes.get("/", ensureAuthenticated, tagsController.index)

module.exports = tagsRoutes

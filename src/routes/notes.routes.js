const { Router } = require("express")
const NotesController = require("../controllers/NotesController")

const notesRoutes = Router()

const notesController = new NotesController()

//EXPRESS HELP US MAKE HTTP REQUEST
notesRoutes.post("/:user_id", notesController.create)
notesRoutes.get("/", notesController.index)
notesRoutes.get("/:id", notesController.show)
notesRoutes.delete("/:id", notesController.delete)

module.exports = notesRoutes

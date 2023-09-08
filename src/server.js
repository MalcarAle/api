require("express-async-errors")
require("dotenv/config")

const migrationsRun = require("./database/sqlite/migrations")
const AppError = require("./utils/AppError")

const cors = require("cors")
const express = require("express")
const routes = require("./routes")
const uploadConfig = require("./configs/upload")

migrationsRun()

//APP = API
const app = express()
app.use(cors())
app.use(express.json())

//BUSCANDO A IMAGEM NO BACKEND
app.use("/files", express.static(uploadConfig.UPLOAD_FOLDER))
app.use(routes)

app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message,
    })
  }

  console.log(error)

  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  })
})

//PRIMEIRO PASSO
const PORT = process.env.PORT || 3333
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))

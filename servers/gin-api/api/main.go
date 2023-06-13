package main

import (
	"github.com/gin-gonic/gin"

	"github.com/joho/godotenv"

	"api/routes"

	"api/libs"

	"os"
)

func main() {
	godotenv.Load(".env")

	app := gin.Default()
	libs.InitDb()

	routerGroup := app.Group("")
	routes.AddHealthRoutes(routerGroup)
	routes.AddTodoRoutes(routerGroup)
	app.Run(os.Getenv("URI"))

}

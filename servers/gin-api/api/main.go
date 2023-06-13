package main

import (
	"github.com/gin-gonic/gin"

	"api/routes"

	"api/libs"
)

func main() {
	app := gin.Default()
	libs.InitDb()

	routerGroup := app.Group("")
	routes.AddHealthRoutes(routerGroup)
	routes.AddTodoRoutes(routerGroup)
	app.Run("localhost:8000")
}

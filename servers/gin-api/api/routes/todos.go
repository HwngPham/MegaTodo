package routes

import (
	"net/http"

	"github.com/gin-gonic/gin"

	"api/libs"
)

func AddTodoRoutes(rg *gin.RouterGroup) {
	router := rg.Group("/todos")

	router.GET("/", func(c *gin.Context) {
		var todos []libs.Todo

		libs.Db.Find(&todos)
		c.JSON(http.StatusOK, todos)
	})

	router.GET("/:id", func(c *gin.Context) {
		var todo libs.Todo
		id := c.Param("id")

		libs.Db.Find(&todo, id)
		c.JSON(http.StatusOK, gin.H{"item": todo})
	})

	router.POST("/", func(c *gin.Context) {
		var todo libs.Todo
		if err := c.BindJSON(&todo); err != nil {
			return
		}
		libs.Db.Create(&todo)
		c.JSON(http.StatusOK, gin.H{"item": todo})
	})

	router.PATCH("/:id", func(c *gin.Context) {
		var todo libs.Todo
		id := c.Param("id")
		result := libs.Db.First(&todo, id)

		if err := result.Error; err != nil {
			return
		}
		if err := c.BindJSON(&todo); err != nil {
			return
		}

		libs.Db.Save(&todo)

		c.JSON(http.StatusOK, gin.H{"item": todo})
	})

	router.DELETE("/:id", func(c *gin.Context) {
		var todo libs.Todo
		id := c.Param("id")

		libs.Db.Delete(&todo, id)
		c.JSON(http.StatusOK, gin.H{"item": todo})
	})
}

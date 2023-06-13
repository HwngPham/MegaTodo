package routes

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func AddHealthRoutes(rg *gin.RouterGroup) {
	router := rg.Group("/health")

	router.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, "ok")
	})
}

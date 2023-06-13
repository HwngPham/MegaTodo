package libs

import (
	"gorm.io/gorm"

	"gorm.io/driver/sqlite"
)

type Todo struct {
	gorm.Model
	Content string
	IsDone  bool
}

var Db *gorm.DB

func InitDb() {
	db, err := gorm.Open(sqlite.Open("db.sqlite"), &gorm.Config{})
	if err != nil {
		panic("Failed to connect database")
	}

	Db = db
	db.AutoMigrate(&Todo{})
}

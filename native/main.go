package main

import (
	"embed"
	"github.com/Silver-K/CodeImmortal/core/battle"
	"github.com/Silver-K/CodeImmortal/core/utils"

	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"
	"github.com/wailsapp/wails/v2/pkg/options/assetserver"
)

//go:embed all:frontend/dist
var assets embed.FS

func main() {
	// Create an instance of the app structure
	logger := utils.NewLogger()
	app := NewApp(logger)

	battleController := battle.NewController()

	// Create application with options
	err := wails.Run(&options.App{
		Title:  "native",
		Width:  1024,
		Height: 768,
		AssetServer: &assetserver.Options{
			Assets: assets,
		},
		BackgroundColour: &options.RGBA{R: 27, G: 38, B: 54, A: 1},
		OnStartup:        app.startup,
		Bind: []interface{}{
			battleController,
			app,
		},
	})

	if err != nil {
		println("Error:", err.Error())
	}
}

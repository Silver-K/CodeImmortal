package main

import (
	"context"
	"fmt"
	"github.com/Silver-K/CodeImmortal/core/utils"
)

// App struct
type App struct {
	ctx    context.Context
	logger *utils.Logger
}

// NewApp creates a new App application struct
func NewApp(l *utils.Logger) *App {
	return &App{
		logger: l,
	}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (p *App) startup(ctx context.Context) {
	p.ctx = ctx
}

// Greet returns a greeting for the given name
func (p *App) Greet(name string) string {
	return fmt.Sprintf("Hello %s, It's show time!", name)
}

func (p *App) Log(msg string) {
	p.logger.Log(msg)
}

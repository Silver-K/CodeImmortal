package core

import "log"
import "gopkg.in/natefinch/lumberjack.v2"

type Logger struct {
	Internal *log.Logger
}

func NewLogger() *Logger {
	lRotate := lumberjack.Logger{
		Filename:   "game.log",
		MaxSize:    10, // megabytes
		MaxBackups: 3,
		MaxAge:     7,    //days
		Compress:   true, // disabled by default
	}

	internal := log.New(&lRotate, "[Immortal-G] ", log.LstdFlags)

	return &Logger{Internal: internal}
}

func (p *Logger) Log(msg string) {
	p.Internal.Println(msg)
}

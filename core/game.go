package core

import "github.com/Silver-K/CodeImmortal/core/battle"

type Game struct {
}

func (p *Game) GetDemoBattle() battle.Battle {
	return battle.GetDemoBattle()
}

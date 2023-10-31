package battle

type Battle struct {
	Id            string              `json:"BattleId"`
	CharacterList []CharacterInBattle `json:"Characters"`
	Field
}

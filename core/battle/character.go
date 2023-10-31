package battle

type Position struct {
	X int `json:"X"`
	Y int `json:"Y"`
}

type CharacterInBattle struct {
	BattleId    uint32            `json:"BattleId"`
	CharacterId string            `json:"CharacterId"`
	Position    Position          `json:"Position"`
	Resource    string            `json:"Resource"`
	Statics     map[string]string `json:"Statics"`
}

package battle

import "github.com/google/uuid"

/*
6x6

*/

func GetDemoBattle() Battle {
	return Battle{
		Id: "demo-battle",
		CharacterList: []CharacterInBattle{
			{
				BattleId:    uuid.New().ID(),
				CharacterId: "someone",
				Position:    Position{X: 0, Y: 0},
				Resource:    "nothing",
				Statics: map[string]string{
					"hp": "100",
				},
			},
			{
				BattleId:    uuid.New().ID(),
				CharacterId: "enemy",
				Position:    Position{X: 6, Y: 6},
				Resource:    "nothing",
				Statics: map[string]string{
					"hp": "100",
				},
			},
		},
		Field: Field{
			{
				{
					Resource: "nothing",
				},
				{
					Resource: "nothing",
				},
				{
					Resource: "nothing",
				},
				{
					Resource: "nothing",
				},
				{
					Resource: "nothing",
				},
				{
					Resource: "nothing",
				},
			},
			{
				{
					Resource: "nothing",
				},
				{
					Resource: "nothing",
				},
				{
					Resource: "nothing",
				},
				{
					Resource: "nothing",
				},
				{
					Resource: "nothing",
				},
				{
					Resource: "nothing",
				},
			},
			{
				{
					Resource: "nothing",
				},
				{
					Resource: "nothing",
				},
				{
					Resource: "nothing",
				},
				{
					Resource: "nothing",
				},
				{
					Resource: "nothing",
				},
				{
					Resource: "nothing",
				},
			},
			{
				{
					Resource: "nothing",
				},
				{
					Resource: "nothing",
				},
				{
					Resource: "nothing",
				},
				{
					Resource: "nothing",
				},
				{
					Resource: "nothing",
				},
				{
					Resource: "nothing",
				},
			},
			{
				{
					Resource: "nothing",
				},
				{
					Resource: "nothing",
				},
				{
					Resource: "nothing",
				},
				{
					Resource: "nothing",
				},
				{
					Resource: "nothing",
				},
				{
					Resource: "nothing",
				},
			},
			{
				{
					Resource: "nothing",
				},
				{
					Resource: "nothing",
				},
				{
					Resource: "nothing",
				},
				{
					Resource: "nothing",
				},
				{
					Resource: "nothing",
				},
				{
					Resource: "nothing",
				},
			},
		},
	}
}

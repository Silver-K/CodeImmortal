package battle

type Block struct {
	ResourceId string  `json:"ResourceId"`
	Siblings   []Block `json:"Siblings"`
}

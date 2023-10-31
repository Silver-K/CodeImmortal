package battle

type Battle struct {
	Id         string      `json:"Id"`
	Characters []Character `json:"Characters"`
	Field
}

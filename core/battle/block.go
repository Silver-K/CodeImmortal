package battle

import "errors"

type Block struct {
	Resource string            `json:"Resource"`
	Info     map[string]string `json:"Info"`
}

type Field [][]Block

var ErrOutOfBound = errors.New("out of bound")

func (p *Field) GetBlock(x, y int) (Block, error) {
	if x < 0 || x >= len(*p) {
		return Block{}, ErrOutOfBound
	}
	if y < 0 || y >= len((*p)[x]) {
		return Block{}, ErrOutOfBound
	}
	return (*p)[x][y], nil
}

type Size struct {
	X int `json:"X"`
	Y int `json:"Y"`
}

func (p *Field) Size() Size {
	return Size{
		X: len(*p),
		Y: len((*p)[0]),
	}
}

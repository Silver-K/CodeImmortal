package battle

type Controller struct {
}

func NewController() *Controller {
	return &Controller{}
}

func (p *Controller) GetDemoBattleField() Block {
	return Block{
		ResourceId: "test",
		Siblings:   nil,
	}
}

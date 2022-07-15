import {Wrapper, Button} from './style'

function ItemButton () {
	return (
		<Wrapper>
			<Button edit><i className="fas fa-edit"></i></Button>
			<Button><i className="fas fa-trash-alt"></i></Button>
		</Wrapper>
	)
}
export default ItemButton
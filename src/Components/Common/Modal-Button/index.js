import {useState} from 'react'
import {Wrapper, Button} from './style'
import Modal from '../Modal'

function ModalButton () {
	return (
		<Wrapper>
			<Button save>Save</Button>
			<Button id="close-button">Close</Button>
		</Wrapper>
	)
}

export default ModalButton
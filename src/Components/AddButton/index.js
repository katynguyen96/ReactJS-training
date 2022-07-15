import {useState} from 'react'
import {AddNewButton} from './style.js'
import Modal from '../Common/Modal'

function AddButton () {
	const [show, setShow] = useState(false)
	return (
		<>
			<AddNewButton onClick = {()=>setShow(!show)}>
				Add New  <i className="fas fa-plus-square"></i>
			</AddNewButton>
			{show && <Modal/>}
		</>
	)
}

export default AddButton
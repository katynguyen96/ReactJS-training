import  {Image, ItemInfo, Name, Info, WrapperButton, ImageWarapper} from './style'
import Button from '../Button'
import Modal from '../Modal'
import ConfirmDeleteModal from '../ConfirmDeleteModal'
import {useState} from 'react'

function CardItem ({handleDelete, theProduct, handleEdit }) {
	const [show, setShow] = useState(false)
	const [showConfirmModal, setShowConfirmModal] = useState(false)
	const handleShowModal = () => {
		setShow(true)
	}

	const handleShowConfirmModal = () => {
		setShowConfirmModal(true)
	}

	const handleCloseConfirmModal = () => {
		setShowConfirmModal(false)
	}

	const handleCloseModal = () => {
		setShow(false)
	}

	const deleteProduct = (id) => {
		handleDelete(id)
	}

	const handleEditProduct = (product) => {
		handleEdit(product)
		handleCloseModal()
	}

	return (
		<>
			<p>{theProduct.id}</p>
			<ImageWarapper>
				<Image src={theProduct.productImg}/>
			</ImageWarapper>
			<ItemInfo>
				<Info brand>{theProduct.productBrand}</Info>
				<Name>{theProduct.productName}</Name>
				<Info>$ {theProduct.productPrice}</Info>
			</ItemInfo>
			<WrapperButton>
				<Button className='card-button' inputColor='#A3A0C2' icon='fas fa-edit' onClicked={handleShowModal}></Button>
				{show && <Modal theProduct={theProduct} handleCloseModal={handleCloseModal} text='Edit Product' handleEdit={handleEditProduct}/>}
				{showConfirmModal && <ConfirmDeleteModal handleCloseModal={handleCloseConfirmModal} handleDelete={() => deleteProduct(theProduct.id)}/>}
				<Button className='card-button' inputColor='#C36C1C' icon='fas fa-trash-alt' onClicked={handleShowConfirmModal}></Button>
			</WrapperButton>	
		</>
	)
}

export default CardItem
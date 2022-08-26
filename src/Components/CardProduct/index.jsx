import  {Image, ItemInfo, Name, Info, WrapperButton, ImageWarapper} from './style'
import Button from '../Common/Button'
import Modal from '../Common/Modal'
import ConfirmModal from '../Common/ConfirmModal'
import {useState} from 'react'

const CardProduct = ({handleDelete, theProduct, handleEdit }) => {//theProduct: get the product when map through products array in products componentt
	const [show, setShow] = useState(false)
	const [showConfirmModal, setShowConfirmModal] = useState(false)

	//show edit modal function
	const handleShowModal = () => {
		setShow(true)
	}

	//Show confirm delete modal function
	const handleShowConfirmModal = () => {
		setShowConfirmModal(true)
	}

	//Close confirm delete modal function
	const handleCloseConfirmModal = () => {
		setShowConfirmModal(false)
	}

	//close edit modal function
	const handleCloseModal = () => {
		setShow(false)
	}

	//delete product by id
	const deleteProduct = (id) => {
		handleDelete(id)
		setShowConfirmModal(false)
	}

	//edit product by id
	const handleEditProduct = (product) => {
		handleEdit(product)
		handleCloseModal()
	}

	return (
		<>
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
				{showConfirmModal && 
					<ConfirmModal 
						icon = "fas fa-xmark"
						title = "Are You Sure?"
						content = "Do you really want to delete these records? This process cannot be undone."
						handleCloseModal={handleCloseConfirmModal} 
						handleFeature={() => deleteProduct(theProduct.id)}/>
				}
				<Button className='card-button' inputColor='#C36C1C' icon='fas fa-trash-alt' onClicked={handleShowConfirmModal}></Button>
			</WrapperButton>	
		</>
	)
}

export default CardProduct
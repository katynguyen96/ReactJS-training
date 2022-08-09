import  {Image, ItemInfo, Name, Info, WrapperButton, ImageWarapper} from './style'
import Button from '../Button'
import Modal from '../Modal'
import {useState} from 'react'

function CardItem ({handleDelete, theProduct}) {
	const [show, setShow] = useState(false)

	const handleShowModal = () => {
		setShow(true)
	}

	const handleCloseModal = () => {
		setShow(false)
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
					{show && <Modal theProduct={theProduct} handleCloseModal={handleCloseModal} text='Edit Product'/>}
				<Button className='card-button' inputColor='#C36C1C' icon='fas fa-trash-alt' onClicked={() => handleDelete(theProduct.id)}></Button>
			</WrapperButton>	
		</>
	)
}

export default CardItem
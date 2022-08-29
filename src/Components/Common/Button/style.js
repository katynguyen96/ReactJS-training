import styled from 'styled-components'

export const CommonButton = styled.button`
	&.add {
	position: absolute;
	width: 100px;
	height: 40px;
	top: 115px;
	right: 130px;
	font-size: 15px;
	cursor: pointer;
	background-color: #0066CC;
	color: #FFF;
	border: none;
	border-radius: 10px;
	&:hover {
		background-color: #FFF;
		color: #0066CC;
		border: 1px solid #0066CC;
	}
};

&.modal-button {
	width: 100px;
	height: 30px;
	border: none;
	font-size: 15px;
	cursor: pointer;
	margin-top: 20px;
	color: #FFF;
	font-weight: 400;
	border-radius: 5px;
	background-color: ${props => props.inputColor || "#6c757d"}
}

&.card-button {
	font-size: 22px;
	margin-left: 18px;
	border: none;
	cursor: pointer;
	color: ${props => props.inputColor || "#CCCCCC"};
}

&.clear-filter-button {
	width: 180px;
	height: 30px;
	margin-left: 13px;
	cursor: pointer;
	border-radius: 5px;
	border: none;
	margin-top: 10px;
	&::before {
		content:'';
		position: absolute;
		left:13px;
		right:17px;
		bottom: 170px;
		height: 2px;
		background-color: #0099FF;
		transition: transform 300ms ease-in-out;
		transform: scaleX(0);
	}

	&:hover::before, &:focus::before {
		transform: scaleX(1);
	}
}

	&.search-button {
		font-size: 15px;
		margin-left: 7px;
		height: 30px;
		width: 45px;
		background-color: #FFFF66;
		border: none;
		border-radius: 5px;
		cursor: pointer;
}

	&.confirm-delete-button {
		margin-left: 5px;
		margin-right:5px;
		cursor: pointer;
		font-weight: 500;
	  width: 115px;
	  height: 39px;
	  border: none;
	  color: #FFF;
	  font-size: 16px;
	  background-color: ${props => props.inputColor || "#c1c1c1"};
	  border-radius: 5px;
	}
`

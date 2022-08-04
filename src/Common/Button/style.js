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
};

&.modal-button {
	width: 100px;
	height: 30px;
	border: none;
	font-size: 15px;
	cursor: pointer;
	background-color: ${props => props.inputColor || "#CCCCCC"}
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
	&::before {
		content:'';
		position: absolute;
		left:13px;
		right:17px;
		bottom: 158px;
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
`

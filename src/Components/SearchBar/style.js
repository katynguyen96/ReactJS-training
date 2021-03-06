import styled from 'styled-components'

const InputWrapper = styled.div`
	display: flex;
	margin-top: 23px;
	margin-left: 30px;
`

const SearchInput = styled.input`
	width: 270px;
	height: 25px;
	border-radius: 5px;
`

const SearchButton = styled.button`
	font-size: 15px;
	margin-left: 7px;
	height: 30px;
	width: 45px;
	background-color: #FFFF66;
	border: none;
	border-radius: 5px;
	cursor: pointer;
`

export {
	InputWrapper,
	SearchInput,
	SearchButton
}
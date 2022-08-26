import {CommonButton} from './style'
const Button = ({onClicked, text, className, icon, inputColor}) => {
	return (
		<CommonButton inputColor={inputColor} onClick={onClicked} className={className}>
			{text} <i className={icon}></i>
		</CommonButton>
	)
}

export default Button
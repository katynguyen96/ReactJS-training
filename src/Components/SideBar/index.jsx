import {
  StyledTitle,
  StyledWrapper,
  StyledBrandName,
  StyledOptionTitle,
  StyledCheckBox,
  StyledLabel
} from './style'
import {useState} from 'react'
import {useStore, actions} from '../../store'

const SideBar = () => {
  //get global state
  const [state, dispatch] = useStore()

  //create state for filtered item
  const [checked, setChecked] = useState([]);

  //Brand option
  const options = ["samsung", "iphone", "vivo"];

  //fliter product function
  const handleFilter = (text) => {
    dispatch(actions.filterProduct(text))
  }

  //Filter function
  const filterProductBrand = (e) => {
    let listChecked = [...checked];
    if (e.target.checked) {
      // add value to array when checked
      listChecked = [...checked, e.target.value];
    } else {
      // remove value when unchecked
      listChecked.splice(checked.indexOf(e.target.value), 1);
    }
    setChecked(listChecked);
    handleFilter(listChecked);
  }

  return (
    <StyledWrapper>
      <StyledTitle>Filter Products</StyledTitle>
      <StyledOptionTitle>Brand</StyledOptionTitle>
      <StyledBrandName>
        {options.map((item, index) => (
          <StyledLabel key={index}>
            <StyledCheckBox
              value={item}
              type="checkbox"
              onClick={filterProductBrand}
            />
            {item}
          </StyledLabel>
        ))}
      </StyledBrandName>
    </StyledWrapper>
  )
}

export default SideBar

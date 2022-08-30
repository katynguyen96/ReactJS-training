import {Title, Wrapper, BrandName, OptionTitle, CheckBox, Label} from './style'
import Button from '../Common/Button'
import {useState} from 'react'

const SideBar = ({handleFilter, handleClearFilter}) => {
  const [checked, setChecked] = useState([]);

	const options = ["samsung", "iphone", "vivo"];

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

	//clear filter function
	const clearFilter = () => {
		handleClearFilter()
	}

	return (
		<Wrapper>
			<Title>Filter Products</Title>
			<OptionTitle>Brand</OptionTitle>
			<BrandName>
        {options.map((item, index) => (
          <Label key={index}>
            <CheckBox
              value={item}
              type="checkbox"
              onClick={filterProductBrand}
            />
            {item}
          </Label>
        ))}
      </BrandName>
			<Button className='clear-filter-button' text='Clear Filter' onClicked={clearFilter}></Button>
		</Wrapper>
	)
}
export default SideBar
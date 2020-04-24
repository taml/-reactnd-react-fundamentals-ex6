import React from 'react'
import Item from './Item'
import PropTypes from 'prop-types'

const ListItem = props => {
  return(
    <div>
    	<p className="items">Items</p>
    	<ol className="item">{props.items.map((item, index) => <Item key={index} item={item}/>)}</ol>
    </div>
  ) 
}  

ListItem.propTypes = {
  items: PropTypes.array.isRequired
}

export default ListItem
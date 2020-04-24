import React from 'react'
import PropTypes from 'prop-types'

const DeleteItem = props => {
  const deleteLastItem = event => {
    props.onDeleteLastItem();
  }
  
  return(
  	<button onClick={deleteLastItem} disabled={props.buttonDisabled} >
    	Delete Last Item
    </button>
  )
}

DeleteItem.propTypes = {
  buttonDisabled: PropTypes.func.isRequired,
  onDeleteLastItem: PropTypes.func.isRequired
}

export default DeleteItem



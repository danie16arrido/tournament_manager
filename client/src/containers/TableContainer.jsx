import React from 'react';
import {Link} from 'react-router'
import Paper from 'material-ui/Paper';


const style = {
  textAlign: 'center',
  width: '96%',
  margin: '0 auto',
  border: 20
  
};

const TableContainer = () => {
    return(
      <Paper style={style} zDepth={3} >
        <p>Here the clasification table</p>
        <img src="https://vignette2.wikia.nocookie.net/bradlys-double-7/images/a/a5/Table.png" alt=""/>
      </Paper>
    ) 
}

export default TableContainer;

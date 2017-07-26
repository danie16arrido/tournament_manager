import React from 'react';
import {Link} from 'react-router'
import Paper from 'material-ui/Paper';

const style = {
  textAlign: 'center',
  width: '96%',
  margin: '0 auto',
  border: 20
  
};

const StatsContainer = () => {
    return(
      <Paper style={style} zDepth={3} >
        <p>Here the stats</p>
        <img src="https://www.footy-boots.com/wp-content/uploads/2012/01/dani-alves-micoach-stats-el-clasico-jan-2012.jpg" alt=""/>
      </Paper>
    ) 
}
export default StatsContainer;

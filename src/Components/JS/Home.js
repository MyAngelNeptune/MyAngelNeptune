import React, { Component } from 'react';
import '../CSS/Home.css';
import Nep from '../Images/n1005.png';

class Home extends Component {
  render() {
    return (
        <div className='Home'>
        	<div className='boxCenter'>
						<h1 className='Me'>
						 	<img src = {Nep} />
					 	</h1>
						<h2> hi </h2>
					</div>
        </div>
    );
  }
}

export default Home;

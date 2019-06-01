import React, {Component} from 'react';
import '../CSS/Navbar.css';

class Navbar extends Component {
	redirect(e, route) {
		e.preventDefault();
		window.location.assign(route);
	}

	render(){
		return(
			<ul className="NavButtons">
				<li><a href="MyAngelNeptune/">Home</a></li>
				<li><a href="MyAngelNeptune/Neptune">Neptune</a></li>
			</ul>
		)
	}

}

export default Navbar;

import React, { Component } from 'react'
import { Menu, Container } from 'semantic-ui-react'
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <Menu fixed='top' borderless>
                <Container>
                    <Link to={"/"}>
                        <Menu.Item header>Super Pac Spending</Menu.Item>
                    </Link>
                    <Link to={"/about"}>
                        <Menu.Item >About</Menu.Item>
                    </Link>
                </Container>
            </Menu>
        )
    }
}

export default Navbar
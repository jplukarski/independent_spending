import React, { Component } from 'react'
import { Menu, Container } from 'semantic-ui-react'

class Navbar extends Component {
    render() {
        return (
            <Menu fixed='top' borderless>
                <Container>
                    <Menu.Item header>Super Pac Spending</Menu.Item>
                    <Menu.Item as='a'>Home</Menu.Item>
                    <Menu.Item as='a'>About</Menu.Item>
                </Container>
            </Menu>
        )
    }
}

export default Navbar
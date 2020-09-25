import React, {useState} from 'react'
import { Menu } from 'semantic-ui-react'
import {Container} from 'semantic-ui-react'


const Navbar = () => {
    const [activeItem, setActiveItem] = useState({})
    const handleItemClick = (e, {name}) => {
        setActiveItem({ activeItem: name })
    }
    return(
        <>
            <Menu borderless>
                <Container>
                    <Menu.Item name='super_pac_spending' active={activeItem === 'editorials'} onClick={handleItemClick} href="/">
                        Super Pac Spending
                    </Menu.Item>

                    <Menu.Item name='about' active={activeItem === 'reviews'} onClick={handleItemClick} href="/about">
                        About Independent Expenditures
                    </Menu.Item>
                </Container>
            </Menu>
        </>
    )
}

export default  Navbar
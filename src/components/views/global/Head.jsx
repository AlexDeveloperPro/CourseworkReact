import React from 'react'
import css from '../../../styles/styles.css.js'
const { HeaderContainer, HeaderCSS } = css

const buttonCSS = {
    display: 'block',
    padding: '10px 14px 12px',
    borderRadius: '6px',
    backgroundColor: '#B0F347',
    cursor: 'pointer',
    marginLeft: '10px'
}

const Head = () => {
    return (
        <React.Fragment>
            <HeaderContainer>
                <HeaderCSS.Logo>РОГА & КОПЫТА</HeaderCSS.Logo>
                <HeaderCSS.MenuContainer>
                    <button style={buttonCSS}>Контакты</button>
                    <button style={buttonCSS}>О компании</button>
                    <button style={buttonCSS}>Регистрция</button>
                </HeaderCSS.MenuContainer>
            </HeaderContainer>
        </React.Fragment>
    )
}

export default Head


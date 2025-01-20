import styiled from "styled-components"

const css = {
    HeaderContainer: styiled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-contant: space-between;
    position: relative;
    width: 100%;
    height: 80%;
    backgrount-color: #202634;
    padding: 0px 30px;
    `
    ,
    FooterContainer: styiled.footer`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-contant: space-between;
    position: relative;
    width: 100%;
    height: 80%;
    backgrount-color: #E5E5E5;
    `,
    HeaderCSS: {
        Logo: styled.div`
            front-size: 30px;
            color: #B0F347;
        `,
        MenuContainer: styiled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-contant: space-between;
        position: relative;
        `    
    }
}

export default css
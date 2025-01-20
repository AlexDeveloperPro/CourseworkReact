import React from 'react'
import css from '../../../styles/styles.css'
import { formatPostcssSourceMap } from 'vite'

const {FooterContainer} = css 
const Foot = () => {
    return (
        <React.Fragment>
            <FooterContainer></FooterContainer>
        </React.Fragment>
    )
}

export default Foot

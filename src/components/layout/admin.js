import React from 'react'
import styled from 'styled-components'
import Dashboard from '../dashboard/dashboard'


const MainAdm =({children}) =>{
    return(
        <>
              
                <Conteudo>
                    <Dashboard/>
                    {children}
                </Conteudo>
       </>
    )
}

export default MainAdm


const Conteudo = styled.div`
    margin-top: 60px;
    margin-bottom: 60px;
`
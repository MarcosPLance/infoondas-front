import { Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import history from '../../config/history'
import {showBeaches}from '../../store/beaches/beaches.action'
import styled from 'styled-components'



const GridBeaches = () => {
    const dispatch = useDispatch()
    const allBeaches = useSelector((state) => state.beaches.all);
    const [update, setUpdate] = useState(false);

    useEffect(() =>{
        dispatch(showBeaches())
        if(update){
          setUpdate(false)
        }
      },[dispatch, update])


    const newBeach = () => {
        history.push('/admin/newbeaches')
    }

    const montarTabela = () => {

        const conteudo = allBeaches.map((beaches, index) => (
            <TRTable key={index}>
                <td>{beaches.beach}</td>
                <td>{beaches.spot}</td>
                <td>{beaches.deep}</td>
                <td>{beaches.direction}</td>
            </TRTable>
        )
        )

        return (
            <Table>
                            <nav>
                                <Titulo > <h1>Lista de Praias/Picos</h1></Titulo>
                               
                            </nav>
                            <LayoutTable>
                                <Thead>
                                    <TRTable>
                                        <td>Nome</td>
                                        <td>Pico</td>
                                        <td>Fundo</td>
                                        <td>Direction</td>
                                    </TRTable>
                                </Thead>
                                <tbody>
                                    {conteudo}
                                </tbody>
                            </LayoutTable>
                    </Table>
        )
    }


    
    return (
        <Tabela>
            {montarTabela()}
            <Button onClick={newBeach}>Cadastrar Nova</Button>
        </Tabela>
    )
}


export default GridBeaches

const Thead = styled.thead`
    background-color: grey;
    color: white;
    border: 1px solid black;
    text-align: center;
`

const Tabela = styled.div`
    width: 100%
`
const TRTable = styled.tr`
    text-align: center;

    :nth-child(even) {
        background: #ddd;
    }
`

const Table = styled.div`
    width: 100%;
`

const LayoutTable = styled.table`
    width: 100%;
`

const Titulo = styled.div`
    display: flex;
    justify-content: center;
`
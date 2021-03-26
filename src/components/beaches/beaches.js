import React,{useState} from 'react'
import styled from 'styled-components'
import {  useSelector, useDispatch } from 'react-redux'
import {Button, TextareaAutosize} from '@material-ui/core'
import {newComment} from '../../store/comments/comments.action'
import {ListItemText} from '@material-ui/core'



const Beaches = ( props)  =>{
  
  const [form, setForm] = useState({})
  const onebeach = useSelector((state) => state.beaches.one);
  const user = useSelector((state) => state.auth.user)
  const dispatch = useDispatch()

  const handleChange = (props) => {
    const { value, name } = props.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  const submit = () => {
   form.author = user.id
   form.beach = onebeach._id
   dispatch(newComment(form))
  }

  const show = () =>{
  
  return onebeach.comments.map((comment, i) => (
    
    <>
        <Coments>
        {comment.content}
        </Coments>
    </>
    )
    )
  }

    return(
        <>
           <Imagens>Photos</Imagens>
           <Dados>
           <Informacoes>
               <ListItemText primary="Praia" secondary={onebeach.beach} />  
               <ListItemText primary="Pico" secondary={onebeach.spot}  />
               <ListItemText primary="Fundo" secondary={onebeach.deep}  />
               <ListItemText primary="Direção" secondary={onebeach.direction}  />
               <ListItemText primary="Estado" secondary={onebeach.state}  />
               <ListItemText primary="Cidade" secondary={onebeach.city}  />
            </Informacoes>
           <Avaliacoes>
               <ListItemText primary="dificuldade" secondary={onebeach.dificulty} />
           </Avaliacoes>
           </Dados>
           <Comentarios>
               <Comentar>
                    <TextareaAutosize 
                        aria-label="empty textarea" 
                        placeholder="Empty"
                        name="content"
                        value={form.content}
                        onChange={handleChange}
                    />
                    <Button onClick={submit}>Comentar</Button>
               </Comentar>
                <Mostrar>
                    {show()}
                </Mostrar>
           </Comentarios>


        
        </>
    )
}


export default Beaches


const Comentar = styled.div`
`
const Mostrar = styled.div`

`

const Imagens = styled.div`
    border: 1px solid black;
    width: 100%;
    height: 400px;
`
const Dados = styled.div`
    display: flex;
    border: 1px solid blue;    
`
const Informacoes = styled.div`
    border: 1px solid green;
    width: 50%;
    height: 500px;
`
const Avaliacoes = styled.div`
    border: 1px solid red;
    width: 50%;
    height: 500px;
`
const Comentarios = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid purple;
    width: 100%;
    height: 200px;
`
const Coments = styled.div`
`
import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {useSelector, useDispatch} from 'react-redux'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'
import {getOneBeach} from '../../store/beaches/beaches.action'


const ListBeaches = () => {
   
    const dispatch = useDispatch() 
    const allBeaches = useSelector((state) => state.beaches.all);
    
    const sendId =(id)=>{
        dispatch(getOneBeach(id))  
    }


    const mountBeaches = () =>{
        return allBeaches.map((beaches, i) => (
           
        <MenuItem 
           key={i}
           onClick={() => sendId(beaches._id)}
         >
           {beaches.spot}
         </MenuItem>
        )
       )
     }


    return(

        <>
             <Form>
              <InputLabel >Praia</InputLabel>
              <Select
                labelId="demo-mutiple-name-label"
                id="demo-mutiple-name"
              >
                {mountBeaches()}
              </Select>
            </Form>
        </>
    )
}

export default ListBeaches

const Form = styled(FormControl)`
    width: 100px;
`
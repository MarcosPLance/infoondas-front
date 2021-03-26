import React from 'react';
import styled from 'styled-components'
import {useState } from 'react'
import { Button } from '@material-ui/core'
import { newUsers } from '../../store/user/user.action'

import img from "../../assets/img/download.jpg"


import { useDispatch } from 'react-redux'
import { TextField } from '@material-ui/core'


const Cadastro = () => {
    const dispatch = useDispatch()
    const [form, setForm] = useState({})

    const handleChange = (props) => {
        const { value, name } = props.target
        setForm({
            ...form,
            [name]: value,
        })
    }


  const submit = () => {
    console.log(form)
    dispatch(newUsers(form))
  }

  return (

    <Formulario initialValues={{ ...form }} noValidate autoComplete="off">
        <TextField 
            required 
            name="username"
            label="Username"
            value={form.username}
            onChange={handleChange}
         />
        <TextField 
            required 
            name="name" 
            label="Nome Completo"
            value={form.name}
            onChange={handleChange} 
        />
        <TextField
            required
            name="password"
            label="Password"
            value={form.password}
            onChange={handleChange}
            type="password"
        />
        <TextField
            required
            name="email"
            value={form.email}
            onChange={handleChange}
            label="email"
        />
       
            <Button variant="contained" onClick={submit} htmlType="submit">Cadastrar</Button>
          
        </Formulario>
       
  );
}

export default Cadastro

const Formulario = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    padding: 5px;
    border: 1px solid black;
    border-radius: 4px;
    margin: 20%;
    background-color: white;
`


const Bcimg = styled.div`
    position: absolute;
    display: block;
    height: 100%;
    width: 100%;
    opacity: 0.6;
    background-image: url(${img});
    background-size: cover;
    background-position: center;
`
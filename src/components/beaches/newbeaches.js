import { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import React from 'react'
import styled from 'styled-components'

import { Button } from '@material-ui/core';
import {NewBeach} from '../../store/beaches/beaches.action'
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


const NewBeaches = () => {
    const classes = useStyles();
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
        dispatch(NewBeach(form))
      }
    

    return (
        <>
            <Form>
                <form className={classes.root} noValidate autoComplete="off">
                    <div>
                        <TextField
                            id="standard-password-input"
                            name="spot"
                            label="Pico"
                            type="text"
                            value={form.spot}
                            onChange={handleChange}
                        /> 
                        <TextField
                            id="standard-password-input"
                            name="beach"
                            label="Praia"
                            type="text"
                            value={form.beach}
                            onChange={handleChange}
                        />
                        <TextField
                            id="standard-password-input"
                            name="deep"
                            label="Fundo"
                            type="text"
                            value={form.deep}
                            onChange={handleChange}
                        />
                         <TextField
                            id="standard-password-input"
                            name="direction"
                            label="Direção"
                            type="text"
                            value={form.direction}
                            onChange={handleChange}
                        />
                         <TextField
                            id="standard-password-input"
                            name="city"
                            label="Cidade"
                            type="text"
                            value={form.city}
                            onChange={handleChange}
                        />
                         <TextField
                            id="standard-password-input"
                            name="state"
                            label="Estado"
                            type="text"
                            value={form.state}
                            onChange={handleChange}
                        />
                     <Button variant="contained" onClick={submit} htmlType="submit">Cadastrar</Button>
          
                    </div>
                </form>
            </Form>

        </>
    )
}

export default NewBeaches


const Form = styled(FormControl)`
    width: 100px;
    display: initial;
`
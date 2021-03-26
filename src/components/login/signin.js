import history from '../../config/history'
import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import img from "../../assets/img/download.jpg"
import { RiAccountCircleLine } from 'react-icons/ri';
import { signIn } from '../../store/sign/sign.action'
import {showBeaches, getOneBeach}from '../../store/beaches/beaches.action'
import Loading from "../loading/index";

import { useDispatch, useSelector } from 'react-redux'
import { TextField } from '@material-ui/core'

import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import { Menu } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Modal from '@material-ui/core/Modal'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


const Portal = () => {

  const dispatch = useDispatch()
  const [form, setForm] = useState({})
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [openning, setOpenning] = React.useState(false);
  const loading = useSelector((state) => state.beaches.loading);
  const allBeaches = useSelector((state) => state.beaches.all);
  const total = useSelector((state) => state.beaches.total);
  const [update, setUpdate] = useState(false);

  useEffect(() =>{
    dispatch(showBeaches())
    if(update){
      setUpdate(false)
    }
  },[dispatch, update])


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

  const handleChange = (props) => {
    const { value, name } = props.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const submit = () => {
    dispatch(signIn(form))
  }


  const openModal = () => {
    setOpenning(true);
  }


  const login = (
    <Formulario initialValues={{ ...form }} noValidate autoComplete="off">
           <TextField
              id="outlined-basic"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="EMAIL"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="SENHA"
              variant="outlined"
            />
            <Button variant="contained" onClose={handleClose} onClick={submit} htmlType="submit">Entrar</Button>
          
        </Formulario>
  );

    const openCadastro =() => {
      history.push('/usercad')
    }


  return (

    <div className={classes.root}>

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Form>
              <InputLabel >Praia</InputLabel>
              <Select
                labelId="demo-mutiple-name-label"
                id="demo-mutiple-name"
              >
                {mountBeaches()}
              </Select>
            </Form>
          </Typography>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <RiAccountCircleLine />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={openModal}>Login</MenuItem>
                  <Modal
                    open={openning}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                  >
                    {login}
                  </Modal>

                <MenuItem onClick={openCadastro}>Cadastrar</MenuItem>
                 
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>

      <Bcimg/>
      </div>
  )
}


export default Portal




const Formulario = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    padding: 15px;
    margin: 30%;
    background: white;
`

const Bcimg = styled.div`
    position: absolute;
    display: block;
    height: 100%;
    width: 100%;
    background-image: url(${img});
    background-size: cover;
    background-position: center;
`
const Form = styled(FormControl)`
    width: 100px;
`
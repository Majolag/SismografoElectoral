import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PeopleOutlineRoundedIcon from '@material-ui/icons/PeopleOutlineRounded';
// import Candidatos from './../archivosJson/Candidatos.json';

const useStyles = makeStyles((theme) => ({
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: '200px',
        whiteSpace: 'nowrap',
        margin: '3px'
    },
    imgSize: {
        height: '80px',
        border: 'white solid',
        boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.582)',
        transition: '350ms all',
        cursor: 'pointer',
        filter: 'contrast(85%)',
        "&:hover" : {
            transform: 'translateY(-5px)'
        }
    },

}));

export default function ControlledOpenSelect() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const [open, setOpen] = React.useState(false);

    // inicio estado ciudad
    const [ciudad, setCiudad] = React.useState([])
    const [candidato, setCandidato] = React.useState(-1)

    React.useEffect(() => {
        catchData()
        // localStorage.setItem('datos', JSON.stringify(ciudad))
    // }, [ciudad])
}, [])

    const catchData = async () => {
        const data = await fetch('./archivosJson/Candidatos.json')
        const city = await data.json()
        console.log(city)
        setCiudad(city)
    }

    const handlerCargarDatos = (e) =>{
      const opcion = e.target.value;
      console.log(opcion);
      setCandidato(opcion);
    }

    // fin estado ciudad

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    // <div>
    //   <h1> prueba</h1>

    //   {
    //     ciudad.map((item)=>(
    //       <div>
    //         <h3>{item.name}</h3>
    //         <ul>
    //           {item.entities.map((sub)=>(
    //             <li>{sub.name}</li>
    //           ))}
    //         </ul>
    //       </div>
    //     ))
    //   }
    // </div>

    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Seleccione una Ciudad</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
          onClick={handlerCargarDatos}
        >

          {
            ciudad.map((item, i) => (
              <MenuItem key={"ciudad"+i} value={i}>{item.name}</MenuItem>
            ))
          }
        </Select>
      </FormControl>

      <div>
        {
          // candidato > -1 && (
          //   ciudad[candidato].entities.map((item, i)=>(
          //     <span key={"candidato"+i} value={i}>{item}</span>
          //   ))
          // )

          candidato > -1 && (
            ciudad[candidato].entities.map((item, i) => (
                <span value={i}>{item.name}</span>,
                <img className={classes.imgSize} src={"../archivosJson/candidates_pics/" + item.image} alt={item.name} title={item.name} />
            ))
        )
        }
      </div>
    </div>

    
  );
}



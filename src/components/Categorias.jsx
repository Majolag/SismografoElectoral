import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
    },
    formControl: {
            display: 'flex',
            margin: theme.spacing(1),
            minWidth: '200px',
            whiteSpace: 'nowrap',
        }
}));

export default function ControlledOpenSelect() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const [open, setOpen] = React.useState(false);

    // inicio estado categorias
    const [temas, setTemas] = React.useState([])
    const [categorias, setCategorias] = React.useState(-1)

    React.useEffect(() => {
        catchData()
    }, [])

    const catchData = async () => {
        const data = await fetch('./archivosJson/Categorias.json')
        const categories = await data.json()
        console.log(categories)
        setTemas(categories)
    }

    const handlerCargarDatos = function (e) {
        const opcion = e.target.value;
        console.log(opcion);
        setCategorias(opcion);
    }

    // fin estado categorias

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

        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-controlled-open-select-label">Seleccione una categoría</InputLabel>
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
      temas.map((item)=>(
          <span>
            {item.categories.map((sub)=>(
              <MenuItem>{sub.name}</MenuItem>
            ))}
          </span>
      ))
    }
                    
                </Select>

            </FormControl>
        </div>
    );
}
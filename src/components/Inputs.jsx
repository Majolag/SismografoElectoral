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
        minWidth: 120,
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
    }, [])

    const catchData = async () => {
        const data = await fetch('./archivosJson/Candidatos.json')
        const city = await data.json()
        console.log(city)
        setCiudad(city)
    }

    const handlerCargarDatos = function (e) {
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
                            <MenuItem key={item.id} value={i}>{item.name}</MenuItem>
                        ))
                    }
                </Select>

            </FormControl>

            <div>
                <h3>Candidatos</h3>
                {/* <div className={classes.inputContainer}>
                <PeopleOutlineRoundedIcon className={classes.iconSize}>
                </PeopleOutlineRoundedIcon>
                </div> */}
                {
                    candidato > -1 && (
                        ciudad[candidato].entities.map((item, i) => (
                            // <span value={i}>{item.name}</span> ,
                            <img src={"../archivosJson/candidates_pics/" + item.image} alt={item.name} title={item.name} />
                        ))
                    )
                }
            </div>
        </div>


    );
}

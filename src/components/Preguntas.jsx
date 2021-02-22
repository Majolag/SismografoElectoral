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
    margin: theme.spacing(1),
    minWidth: 200,
  }
}));

export default function ControlledOpenSelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const [preguntas, setPreguntas] = React.useState([])

  React.useEffect(() => {
    catchData()
  }, [])

  const catchData = async () => {
    const data = await fetch('./archivosJson/Preguntas.json')
    const question = await data.json()
    console.log(question)
    setPreguntas(question)
  }

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
        <InputLabel className={classes.labelControl} id="demo-controlled-open-select-label">Seleccione una pregunta</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
        >
          {
            preguntas.map((item, i) => (
              <MenuItem key={item.id} value={i}>{item.name}</MenuItem>
            ))
          }
        </Select>
      </FormControl>

    </div>
  );
}

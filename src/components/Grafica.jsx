// import React, { useState, useEffect } from "react";
// import { makeStyles } from '@material-ui/core/styles';
// import { Line } from "chart.js";

// const useStyles = makeStyles((theme) => ({
//     button: {
//         position: 'absolute',
//         display: 'block',
//         marginTop: theme.spacing(2),
//     },
//     formControl: {
//         margin: theme.spacing(1),
//         minWidth: 120,
//     },
// }));



// export default function ControlledOpenSelect() {
//     const classes = useStyles();
//     const datosGrafica = JSON.parse(localStorage.getItem('datos'));
//     const [grafica, setGrafica] = React.useState([])

//     React.useEffect(() => {
//         setGrafica(datosGrafica);
//     }, [])

//     return (
//         <div>
//             {
//                 grafica.map((item, i) => (
//                     <p key={"grafica" + i} value={i}>{item.entities[0].color}</p>
//                 ))
//             }
//         </div>
//     );
// }

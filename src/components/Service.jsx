import React, { Fragment } from 'react';


const Service = () => {

    const [ciudad, setCiudad] = React.useState([])

    React.useEffect(() => {
        catchData()
    }, [])

    const catchData = async () => {
        const data = await fetch('https://storage.googleapis.com/sismoee/2019/{ciudad}/{red-social}.json')
        const city = await data.json()
        console.log(city)
        setCiudad(city)
    }

    return (
        <Fragment> 

        </Fragment>
    )
}

export default Service
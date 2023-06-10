import React, { useEffect, useState } from 'react'
import '../../style/infocompte.css'
import axios from 'axios';
import { Link, useSearchParams } from 'react-router-dom';

function InfoCompte() {

    const [state, setState] = useState("")
    const [searchParams] = useSearchParams()
    const id = searchParams.get('id')

    // useEffect(()  =>  {
    //     async function Data() {
    //         const { data } = await axios.get(`https://api-connexion.herokuapp.com/api/${id}`);
    //         setState(data.oneUser)
    //     }

    //     Data()
    // }, [])

    // const handleDelete = () => {

    //     async function Data() {
    //     const { data } = await axios.delete(`https://api-connexion.herokuapp.com/api/${id}`);
    //     setState(data.message)
    // }

    //     Data()
    // }

    

  return (
    <div className='container-compte'>

        <div className='container-contenu'>

            <h1 className='info pseudo'>{state.pseudo}</h1>
            
            <h3 className='info'>mail</h3><input value={state.email}/>
            <h3 className='info'>Prénom</h3><input value={state.prenom}/>
            <h3 className='info'>Nom</h3><input value={state.nom}/>
            <h3 className='info'>description</h3><input value={state.decription}/>

            {/* <Link onClick={handleDelete} to={"/"}>delete</Link> */}

        </div>

    </div>
  )
}

export default InfoCompte
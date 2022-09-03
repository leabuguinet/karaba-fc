import React from 'react'
import styled from "styled-components";


const MentionsContainer = styled.div`
    color: #ffffff;
    flex: 1;
    margin-top: 5rem;
`

const Mentions = () => {
  return (
    <MentionsContainer>
        <h1>Mentions Légales</h1>
        
        <h2>Développement site & Design :</h2>
        
            <p>Email : lea.buguinet@gmail.com</p>
            <p className='p-mb'>Site Web : www.leab.me</p>
        
        <h2>Hébergement :</h2>
        
            <p>Hébergeur : OVH</p>
            <p>2 rue Kellermann – BP 80157 59053 ROUBAIX CEDEX 1</p>
            <p className='p-mb'>Site Web : www.ovh.fr</p>

        <h2>Crédits :</h2>
        
            <p>Pictogrammes : https://icones8.fr/</p>
            <p>Photo haut de page : Alex Lerum</p>
            <p className='p-mb'>Photo bas de page : Marcos Paulo Prado</p>

        <h2>Cookies :</h2>

          <p>Ce site n'utilise aucun cookie et ne collecte aucune donnée.</p>

    </MentionsContainer>
  )
}

export default Mentions
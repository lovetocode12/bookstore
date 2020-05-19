import styled from "styled-components";

export const ConatinerDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    justify-content: center;
    align-items: flex-start;;
    width: 100%;
    height: 100%
    `

export const PhotoDiv = styled.div`
    display: flex;
    width: 80%;
    justify-content: center;
    background: #ae6060;
    `

export const Image = styled.img`
    width: 60%;
    height: 100%;
    border-radius: 2em;
    object-fit: cover;
    padding: 1em;
    `

export const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 1em 1em;
    font-size: 14px;
    height: 80%;`

export const PTag = styled.p`
    font-size: 0.8em;
    flex-grow:3;
    margin: 0;`

export const H2Tag = styled.h2`
    overflow: hidden;
    text-align: center;`

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-grow:1;
    width: 80%;
    flex-wrap: wrap;
    margin-top: 0.4em;
`

export const StyledButton = styled.button`
    margin: 0;
    color: white;
    background: #ea8686;
    padding: 0.5em;
    font-size: 0.7rem;
    cursor: pointer;
    border-radius: 5px;
    margin-right: 1em;
    border: none;`

    export const PriceDiv = styled.div`
    
    `
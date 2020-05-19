import styled from "styled-components";

export const CardDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-basis: 12em;
    padding: 5px;
    border-radius: 5px;
    min-height: 220px;
    justify-content: center;
    align-items: baseline;
    flex-grow: 1;
    flex-shrink: 1;
    margin: 1em 1em;
    box-shadow: 2px 2px 3px #eeeeee9e;;
    `

    export const PhotoDiv = styled.div`
    display: flex;
    width: 80%;
    justify-content: center;
    cursor: pointer;
    background-color: #e2c7c73b;
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
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;`

    export const PTag = styled.p`
    width: 12rem;
    font-size: 0.8em;
    overflow: hidden;
    white-space: nowrap;
    display: inline-block;
    text-overflow: ellipsis;
    margin: 0;`

    export const H4Tag = styled.h4`
    width: 12rem;
    overflow: hidden;
    white-space: nowrap;
    display: inline-block;
    text-overflow: ellipsis;
    margin: 0;
    font-size: 0.8em;
    text-align: center;`

    export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
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
    border: none;`

import styled from "styled-components";

export const ContainerDiv = styled.div`
    width: 100%;
    display:flex;
    justify-content: space-between; 
    flex-wrap:wrap;
    
    .buttonsContainer{
        display: flex;
        justify-content: space-evenly;
        margin: 1em;
        flex-wrap: wrap;

    }
    .buttonsContainer>button{
        margin: 1em;
        color: white;
        background: #ea8686;
        padding: 0.5em 5.5em;
        font-size: 0.7rem;
        cursor: pointer;
        border-radius: 5px;
        border: none;
    }
    .title{
        margin: 0.5em 1em;
        font-size: 1.3em;
    }
    `

export const AdressDiv = styled.div`
     margin: 1em;
    flex-grow: 1;
    flex-basis: 20em;
    height: 50%;
   `


export const InputsDiv = styled.div<{ submitted: boolean }>`
height: 100%;
display:flex;
flex-direction: column;
flex-wrap:wrap;
background-color: #e2c7c73b;

.div_input_conatiner{
    margin: 0.6em 0;
    padding: 0.3em 1em;
    display: flex;
    justify-content: space-between;
    flex-wrap:wrap;
}

.div_input_conatiner>label{
    margin-right:1em;
    min-width: 10em;
}
.div_input_conatiner>input{
    width: 24em;
    pointer-events: ${props => props.submitted ? 'none' : 'initial'};
    background-color: ${props => props.submitted ? '#f5e5e53b !important' : 'white'};
    border: ${props => props.submitted ? 'none' : '2px solid #bcb4b4'};
    padding: 0.3em;
}
`


export const CheckoutDiv = styled.div`
    flex-grow: 1;
    margin: 1em;
    flex-basis: 20em;  
    height:100%;

    .booksContainer{
        display:flex;
        flex-direction:column;
        background-color: #e2c7c73b;
        min-height: 12em;
         overflow: auto;
    }

    .booksContainer>ul{
        list-style:none;
    }


    .order_item{
        display:flex;
        justify-content: space-between;
        margin: 1em;
        font-size: 0.9em;
    }

    .paymentContainer{
        flex-grow:2;
    }
    `
import styled from "styled-components";

export const ContainerDiv=styled.div`
display:flex;
flex-direction:column;

.order_container{
    border: 1px solid #eee;
    margin-bottom: 1em;
    margin-left: 1em;
    padding: 0.3em 0.3em;
}

.order_status{
    justify-content: space-between;
    background-color: #e2c7c73b;
    padding: 1em;
    flex-wrap: wrap;
}

.order_status>div{
    width: 12em;
    white-space: nowrap;
}

.book_details{
    min-height: 5em;
    justify-content: space-evenly;
    font-size: 0.7em;
    flex-wrap: wrap;
    margin-left: 1em;
}

img{
    width: 10em;
}
`
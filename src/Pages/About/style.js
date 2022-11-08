import styled from "styled-components";

export const ContainnerA = styled.div`
display: flex;


`
export const Card =styled.div`	
    border-radius: 10%;
    box-shadow: 7px 7px 13px 0px rgba(50, 50,50, 0.22);
    padding: 1rem;
    color: #fff;
    margin: 2rem;
    width: 20rem;
    height: 30rem;
    justify-self: center;
    font-size: 0.75;
    font-weight: 350;
    background-color: rgba(85, 130,186, 0.7);
    transition: all 0.35 ease-out;
    &:hover{
        transform: scale(1.1);
        color: #ffbb33;
        font-size: 0.9rem;
    }
`
export const ContainnerB = styled.div`

    text-align: center;
    align-items: center;
    justify-content: center;
    background: #243b55;
    width: 100%;
    height: 100vh;
    color: #fff;
`
export const ContainerSobre = styled.div`
/* background-color: red; */
margin-left: 10rem;
margin-right: 10rem;
padding-top: 1rem;
padding-bottom: 1rem;
gap: 0.5rem;
display: grid;
/* grid-template-columns: repeat(4, 1fr);
@media (max-width: 1512px) {
    grid-template-columns: repeat(3, 1fr);
}
@media (max-width: 1050px) {
    grid-template-columns: repeat(2, 1fr);
}
@media (max-width: 680px) {
    grid-template-columns: repeat(1, 1fr);
} */
cursor: pointer;
`
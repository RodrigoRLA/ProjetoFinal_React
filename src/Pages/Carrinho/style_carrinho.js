import styled from "styled-components";

export const Body = styled.div`
	margin: 0;
	padding: 0;
	background-color: #aaa;
	font-family: 'Roboto', sans-serif;
	height: 100%;
	
`
export const Container = styled.div`
	width: 500px;
	margin: 100px auto;
	margin-bottom: 18rem;
	
	
`
export const CartContainer = styled.div`
	border-radius: 8px;
	box-shadow: 0 5px 20px rgb(120, 120, 120);
`

export const HeaderCard = styled.div`
	color: #fff;
	background-color: #243b55;
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
`

export const CartBody= styled.div`
	background-image: linear-gradient(#f9f9f9,#ccc);
`

export const CartItem = styled.div`
	padding: 15px 20px 0 20px;
`
export const CartRow = styled.div``



export const QtdProduto = styled.div`
	flex: 2;
`

export const PrecoProduto = styled.div``

export const Total = styled.div`
display: flex;
flex-direction: row;
text-align: center;
justify-content: center;
`

export const Button = styled.button`
	cursor: pointer;
    text-decoration: none;
    background: transparent;
    font-size: 1rem;
    color: #141e30;
    border: 2px solid  #243b55;
    border-radius: 0.4rem;
    margin:  1rem;
    padding: 0.25rem 1rem;
    transition: 0.5s all ease-out;
    &:hover{
        background-color: #147e82
;
        color: #ffbb33;
    }
`

export const CartFooter = styled.div``

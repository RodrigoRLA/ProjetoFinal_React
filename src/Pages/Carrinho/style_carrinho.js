import styled from "styled-components";

export const Body = styled.div`
	margin: 0;
	padding: 0;
	background-color: #aaa;
	font-family: 'Raleway', sans-serif;
`
export const Container = styled.div`
	width: 500px;
	margin: 100px auto;
`
export const CartContainer = styled.div`
	border-radius: 8px;
	box-shadow: 0 5px 20px rgb(120, 120, 120);
`

export const HeaderCard = styled.div`
	color: #fff;
	background-color: #006CB5;
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

export const ProdutoFoto = styled.div`
	top: -5px;
	left: -5px;
	width: 20px;
	height: 20px;
	color: #000;
	font-size: 1em;
	text-align:center;
	position: absolute;
	border-radius: 10px;
	text-decoration: none;
	display: inline-block;
	background-color: #fff;
	border: #dadada 1px solid;
	box-shadow: 2px 2px 2px rgb(160,160,160);
`

export const QtdProduto = styled.div`
	flex: 2;
`

export const PrecoProduto = styled.div``

export const Total = styled.div`
display: flex;

flex-direction: row;
`

export const Button = styled.button`
	color: #fff;
	border: none;
	font-size: 1em;
	padding: 5px 15px;
	background-color: #006CB5;
`

export const CartFooter = styled.div``

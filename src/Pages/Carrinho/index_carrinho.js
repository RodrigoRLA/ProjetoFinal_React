import React, { useEffect } from "react";
import { useCart } from "../../Context/cartContext";

import { Body, Button, CartBody, CartContainer, CartFooter, CartItem, CartRow, Container, HeaderCard, PrecoProduto, QtdProduto, Total } from "./style_carrinho";
export const Carrinho = () => {

	const cart = useCart()

	useEffect(()=>{
		
	},[])

return(
	<Body>
		<Container>

			<CartContainer>

				<HeaderCard>

					<h3>Carrinho de Compras</h3>

				</HeaderCard>

				<CartBody>

					<CartItem>

						<CartRow>

						
							<QtdProduto>

								<ul>
									
								
									<li>
									<img src={cart.cart.undefined.produto.imagemUrl} width="180px" height="120px" alt="imagem"/>
									<h3>Produto:{cart.cart.undefined.produto.nome}</h3>
									<h3>Preço:{cart.cart.undefined.produto.valorUnitario}</h3>
									{console.log(cart.cart)}
									</li>
									
								</ul>

							</QtdProduto>

							<PrecoProduto>

								{/* <p>{cart.cart.undefined.valorUnitario}</p> */}

							</PrecoProduto>	
						
						</CartRow>



					</CartItem>
				
				</CartBody>

				<CartFooter>


					
					<Total>
						
					<h3>Valor Total:{cart.cart.undefined.produto.valorUnitario}</h3>

					</Total>

					<Button>Finalizar Compra</Button>

				</CartFooter>

			</CartContainer>

		</Container>

	</Body>

)
}
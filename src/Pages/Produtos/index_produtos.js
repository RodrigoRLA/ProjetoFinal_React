import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../Context/cartContext";
import { Contexto } from "../../Context/data.js";
import { api } from "../../Services/index";


import { BarraLateral, ButtonCard, Card, Cat, ContainerB, ContainerContent, ContainerP, ContainerTitle, Texto, Title } from "./style_produtos";

export const Produtos = () => {

    const [produtos, setProdutos] = useState()

    const ctx = useContext(Contexto)

    const getProdutos = async () => {
        var produto = await api.get(`/produto/all`)
        setProdutos(produto.data)
        console.log(produto.data);
    }

    useEffect(() => {
        getProdutos()
    }, [])

    ctx?.setProdutos(produtos)

    const cart = useCart()

    const add = produtos => () => {
        cart.addToCart(produtos)
    }
    return (
        
        <ContainerP>
        <ContainerTitle>
            <Title> Conheça os nossos Produtos! </Title><br/>
        </ContainerTitle>
        <ContainerB>

        <Cat>
            <BarraLateral>
                <ButtonCard>
                <Link to={"/hardware"}>
					<Texto>Hardwares</Texto><br/>
				</Link>
                </ButtonCard>
                <ButtonCard>
				<Link to={"/perifericos"}>
					<Texto>Periféricos</Texto><br/>
				</Link>
                </ButtonCard>
                <ButtonCard>
				<Link to={"/notebook"}>
					<Texto>Notebooks</Texto><br/>
				</Link>
                </ButtonCard>
            </BarraLateral>
        </Cat>
        <ContainerContent>
            {produtos?.map((res, index) => {
               
                return ( 
                    
                        <Card key={index} >
                            
                                <img src={res.imagemUrl} width="180px" height="120px" alt="imagem"/>
                                <div style={{fontSize: "1.3rem"}}>{res?.nome}</div>

                                <ButtonCard onClick={add(res)}>
                                    R${res?.valorUnitario}
                                </ButtonCard>
                           
                        </Card>
                )
            })}
                
        </ContainerContent>
            
          </ContainerB>
        </ContainerP>
  
    )
}

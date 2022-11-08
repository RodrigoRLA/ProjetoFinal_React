import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Contexto } from "../../Context/data.js";
import { api } from "../../Services/index";

import { BarraLateral, ButtonCard, Card, Cat, ContainerB, ContainerContent, ContainerP, ContainerTitle, Texto, Title } from "../Produtos/style_produtos";

export const Hardware = () => {

    const [produtos, setProdutos] = useState()

    const ctx = useContext(Contexto)

  
    const getProdutos = async () => {
        var produto = await api.get(`/categoria/7`)
        setProdutos(produto.data.produto)
        console.log(produto.data.produto);
    }

    useEffect(() => {
        getProdutos()
    }, [])

    ctx?.setProdutos(produtos)

    // console.log("log:", produtos);

    return (
        
        <ContainerP>
        <ContainerTitle>
            <Title> Conheça os nossos Produtos! </Title><br/>
        </ContainerTitle>
        <ContainerB>
        <Cat>
            <BarraLateral>
            <ButtonCard>
                <Link to={"/produtos"}>
					<Texto>Produtos </Texto><br/>
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

                                <ButtonCard >
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
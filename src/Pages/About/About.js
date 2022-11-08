import React from "react";
import { Card, ContainerSobre, ContainnerA, ContainnerB } from "./style";

export const About = () => (

<>
<ContainnerB>
<h1>Sobre</h1>

<ContainnerA>

<a href={`https://github.com/arthurcler`}>
<Card>
<h1>Arthur Cler</h1>
<img
src="https://avatars.githubusercontent.com/u/111184522?v=4"
alt="img" width="100%" height="250rem" />
<img
src="https://logosmarcas.net/wp-content/uploads/2020/12/GitHub-Logo.png
" alt="img" width="50%" height="50rem" />
</Card>
</a>

<a href={`https://github.com/DanielRizzoO`}>
<Card>
<h1>Daniel Rizzo</h1>
<img
src="https://avatars.githubusercontent.com/u/111184589?v=4"
alt="img" width="100%" height="250rem" />
<img
src="https://logosmarcas.net/wp-content/uploads/2020/12/GitHub-Logo.png
" alt="img" width="50%" height="50rem" />
</Card>
</a>

<a href={`https://github.com/diegoaristides`}>
<Card>
<h1>Diego Aristides</h1>
<img
src="https://avatars.githubusercontent.com/u/111185742?v=4"
width="100%" alt="img" height="250rem" />
<img
src="https://logosmarcas.net/wp-content/uploads/2020/12/GitHub-Logo.png
" alt="img" width="50%" height="50rem" />
</Card>
</a>

<a href={`https://github.com/Gabriel-F-Neves`}>
<Card>
<h1>Gabriel Freitas</h1>
<img
src="https://avatars.githubusercontent.com/u/111184774?v=4"
alt="img" width="100%" height="250rem" />
<img
src="https://logosmarcas.net/wp-content/uploads/2020/12/GitHub-Logo.png
" alt="img" width="50%" height="50rem" />
</Card>
</a>

<a href={`https://github.com/RodrigoRLA`}>
<Card>
<h1>Rodrigo Lisboa Alves</h1>
<img
src="https://avatars.githubusercontent.com/u/71422773?v=4" alt="img" width="100%"
height="250rem" />
<img
src="https://logosmarcas.net/wp-content/uploads/2020/12/GitHub-Logo.png
" alt="img" width="50%" height="50rem" />
</Card>
</a>

</ContainnerA>
<ContainerSobre>
            <h1>Sobre nós</h1>

            <p>Bem vindo a Lojinha do seu zé, fundada em Novembro de 2022, a lojinha do seu Zé surgiu como resultado do projeto final da disciplina de desenvolvimento web, desenvolvido pelo grupo 05. Somos um e-commerce no ramo de tecnologia com os melhores produtos do mercado. Desde sua criação, a empresa é formada por histórias e conquistas de um time obcecado por agilidade, qualidade de atendimento, velocidade de entrega e respeito pelo consumidor.</p>

            <p>Com preços imbatíveis e mais de 20 mil produtos em seu catálogo, a Lojinha do Seu Zé está sempre à frente e traz em primeira mão os melhores lançamentos do mercado mundial. São mais de 8 milhões de pessoas atendidas e entregas realizadas em todas as regiões do país, totalizando mais de 5.000 cidades.</p>

            <p>O e-commerce é um dos sites mais acessados do país e lidera o ranking das lojas virtuais mais recomendadas pelos consumidores brasileiros, no segmento de tecnologia e games*, com os principais índices de avaliação e selos de qualidade da internet.</p>
            
        </ContainerSobre>
</ContainnerB>
</>
)
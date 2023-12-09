# Projeto final do Imersão JavaScript - Revisitando ideias do Projeto Conexão.

## Sobre mim:

Meu nome é Andréa Vetter, sou advogada de formação, trabalhei num Centro de Referência de Mulheres, e ano passado dei meus primeiros passos em nova transição, dessa vez de carreira. Fiz Desenvolvimento Front-End no Todas em Tech, aqui, na própria {reprograma}. Desde então, busco novos cursos para cada vez mais aprofundar meu conhecimento. 

## Sobre o projeto:

Tenho algum contato com profissionais de saúde mental há mais de uma década e posso afirmar com certeza que não estaria aqui sem estes em minha rede de apoio. Esta, no entanto, não é a realidade da maior parte das pessoas trans no Brasil, pois o acesso a saúde mental não é disponibilizado de forma efetiva no âmbito público, e no âmbito privado damos de encontro com o obstáculo financeiro, já que é um serviço que ultrapassa a renda da maioria das pessoas no nosso país. Isso colabora com a transfobia já sofrida por pessoas trans e faz com que tenham uma altíssima taxa de suicídio (especialmente quando tratamos de pessoas trans negras de baixa renda).

O Projeto Conexão foi meu projeto final do primeiro bootcamp que fiz na {reprograma}. Foi pensado enquanto uma plataforma que pudesse reunir pessoas trans sem acesso a saúde mental e profissionais de saúde mental que aceitassem atender essas pessoas trans. Com o conhecimento que tinha à época criei 4 páginas em React para gerar um site inicial com as Páginas de apresentação, busca de profissionais, inscrição de profissionais e página de contato.

Pensando a partir disso, neste projeto cujo nome inicial é Projeto Conexão 2, crio algumas classes que poderiam inicialmente suprir a necessidade de inscrição tanto de pessoas pacientes quanto de pessoas profissionais, busca de alguma pessoa tanto paciente quanto profissional, e uma agenda inicial que funcionaria por semana. Importante apontar que os parâmetros da class Paciente foram obtidos através de uma pesquisa com algumas pessoas profissionais de saúde mental e, a princípio, foram estas as perguntas que apontaram como necessárias. 

### UML das Classes:

![Alt text](UML-projeto-conexao-2.svg)

### Testes:

Além das classes acima apresentadas, feitas seguindo a Programação Orientada a Objetos, foram feitos também testes unitários via Jest que ultrapassam 80% de cobertura.

## Desafios futuros:

* A criação de uma agenda mensal privada que só possa ser vista pelo próprio profissional de saúde mental;

* A criação um banco de dados com as informações protegidas de acordo com a Lei 13709 de 2018, a Lei Geral de Proteção de Dados Pesoais (LGPD), pois é de suma importância criar barreiras para proteger primeiramente as pessoas trans que utilizem o sistema, pois sabemos que são pessoas vulnerabilizadas.

* Criação de integração com Zoom ou outro aplicativo que pudesse servir de base para encontros remotos entre a pessoa paciente e a pessoa profissional.

## Notas:

* Foi adicionado o método destruir() a ambas as classes herdeiras para fins de testes.

* Esse código foi o que achei para solucionar o problema de ordenar os parâmetros de um objeto, mas como não removo mais nenhum parâmetro de objeto, ele não é mais necessário. Fica como curiosidade.

 >
    // const horariosOrdenados = Object.keys(
    //   this.agenda[buscandoDia].horario
    // )
    //   .sort()
    //   .reduce((objeto, chave) => {
    //     objeto[chave] = this.agenda[buscandoDia].horario[chave];
    //     return objeto;
    //   }, {});
    // this.agenda[buscandoDia].horario = horariosOrdenados;

## Onde me encontrar:

[Meu perfil no Linkedin!](https://www.linkedin.com/in/andrea-vetter/)

[Meu perfil no Github!](https://github.com/sunset-raven/)
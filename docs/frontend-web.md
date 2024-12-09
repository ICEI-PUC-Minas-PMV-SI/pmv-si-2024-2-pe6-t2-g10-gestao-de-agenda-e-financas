# Front-end Web

O Agenda Fácil é uma plataforma pensada para ajudar empreendedores a gerenciarem seus compromissos de forma simples e prática. A ideia é facilitar tanto para quem oferece serviços quanto para quem precisa agendar, criando uma experiência fácil e organizada para ambos.
No desenvolvimento do site, escolhemos usar o React para o Front-End. O React é uma tecnologia que nos ajuda a criar interfaces que respondem rápido e se adaptam bem a qualquer dispositivo, seja no computador ou no celular. Assim, os usuários podem navegar pelo site de forma tranquila, com uma experiência visual moderna e um desempenho fluido, tornando todo o processo de agendamento mais agradável e eficiente.


## Tecnologias Utilizadas

Para a construção da aplicação web Agenda Fácil, utilizamos um conjunto de tecnologias que nos permitiu desenvolver uma plataforma robusta e eficiente. Abaixo estão as principais ferramentas e recursos usados no projeto:

* **React:** No Front-End da aplicação, optamos por utilizar o React, uma das principais bibliotecas JavaScript para criar interfaces dinâmicas e responsivas. Vale destacar, que o React deixa o site mais rápido e com uma experiência mais agradável para quem o utiliza. O React nos permite desenvolver componentes que podem ser reutilizados, nos desenvolvimento mobile.
* **Visual Studio Code:** Escolhemos o VS Code como nosso editor de código, o que torna o nosso processo de desenvolvimento mais rápido e organizado.
* **GitHub:** Para garantir que todas as versões do projeto fossem salvas e compartilhadas corretamente entre a equipe, usamos o GitHub. Ele nos permitiu acompanhar as mudanças no código, colaborar de forma organizada e garantir que todos os desenvolvedores pudessem contribuir sem confusão.


## Arquitetura

A aplicação Agenda Fácil é dividida em 03 (três) camadas principais: Front-End, Back-End e Banco de Dados. A escolha do React para o front-end visa proporcionar uma interface dinâmica e responsiva.

**Front-End** | Biblioteca: **REACT**

**Objetivo:** Criar uma interface de usuário moderna e de fácil interação, para agendamento de serviços.

**Componentes principais:**

* **Página de Login/Cadastro:** Autenticação de usuários.
* **Dashboard do Usuário:** Onde os prestador de serviços podem visualizar seus próximos compromissos.
* **Calendário Interativo:** Interface para visualização e agendamento de serviços, integrando com o back-end para exibir dados em tempo real.
* **Formulários dinâmicos:** Para agendamento dos horários, personalização de serviços e retirada do caixa (sangria caixa).

**Fluxo de Interação dos Componentes**
* Usuário acessa a aplicação e realiza o login pela interface React, enviando as credenciais para a API de autenticação no back-end.
* Front-End solicita dados (agendamentos, serviços) ao back-end através de chamadas à API, enviando o token JWT para garantir autorização.
* Back-End valida o login e retorna um JWT para que o front-end armazene no localStorage.


## Modelagem da Aplicação

![UserFlow](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-2-pe6-t2-g10-gestao-de-agenda-e-financas/blob/main/docs/img/UserFlow..png)


## Projeto da Interface Web

A interface web da Agenda Fácil é projetada para proporcionar uma experiência intuitiva. O design visual reflete sofisticação e credibilidade, com o uso predominante de dois tons, um roxo (#7E5A9B) e um laranja (#F79824), além de uma estrutura responsiva e otimizada para diferentes dispositivos.

**Layout das páginas:** A interface será composta por várias páginas-chave, cada uma com um layout intuitivo e funcional.

* **Página de Login/Cadastro:** Os prestadores de serviços terão campos específicos para completar ou editar o seu perfil.
* **Dashboard do usuário:** Prestadores de serviços poderão visualizar os próximos agendamentos. Vale destacar, que eles poderão editar ou excluir os agendamentos.
* **Página de agendamento:** Um calendário que permite ao prestador de serviços selecionar datas e horários disponíveis para agendar os serviços cadastrados. Após escolher a data, o prestador de serviços poderá preencher um formulário com os detalhes como serviço, o cliente a ser atendido, tempo de duração e o valor. 
* **Página de perfil:** Inclui campos para editar nome, e-mail, telefone e descrição dos serviços.
* **Página de Serviços:** Lista de Serviços disponíveis, onde o prestador de serviços poderão gerenciar os serviços prestados, editando ou excluindo opções com descrição, tempo estimado e preço. 

**Interações do usuários:**
* **Feedback imediato:** O sistema fornecerá feedback visual imediato ao usuário para ações como salvar agendamentos, atualizar perfil, ou preencher formulários incorretamente.

**Aspectos adicionais:** 
* **Acessibilidade:** Foco em boas práticas de acessibilidade no uso da aplicação.
* **Responsividade:** Design totalmente responsivo, adaptado tanto para telas grandes quanto para dispositivos móveis.


### Wireframes

**Home**
![Home](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-2-pe6-t2-g10-gestao-de-agenda-e-financas/blob/main/docs/img/Home.png)
**Página de Login**
![Página de Login](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-2-pe6-t2-g10-gestao-de-agenda-e-financas/blob/main/docs/img/Login.png)
**Cadastro do Prestador**
![Cadastro do Prestador](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-2-pe6-t2-g10-gestao-de-agenda-e-financas/blob/main/docs/img/Cadastro%20do%20Prestador%20(1).png)
**Página Inicial**
![Página Inicial](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-2-pe6-t2-g10-gestao-de-agenda-e-financas/blob/main/docs/img/P%C3%A1gina%20Inicial.png)
**Página Cadastro - Opções**
![Página Cadastro - Opções](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-2-pe6-t2-g10-gestao-de-agenda-e-financas/blob/main/docs/img/Cadastro.png)
**Cadastro de Clientes**
![Cadastro de Clientes](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-2-pe6-t2-g10-gestao-de-agenda-e-financas/blob/main/docs/img/Cadastro%20-%20CLIENTES%20(1).png)
**Lista de Clientes**
![Lista de Clientes](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-2-pe6-t2-g10-gestao-de-agenda-e-financas/blob/main/docs/img/Lista%20de%20CLIENTES.png)
**Cadastro de Serviços**
![Cadastro de Serviços](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-2-pe6-t2-g10-gestao-de-agenda-e-financas/blob/main/docs/img/Cadastro%20-%20SERVI%C3%87OS%20(2).png)
**Lista de Serviços**
![Lista de Serviços](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-2-pe6-t2-g10-gestao-de-agenda-e-financas/blob/main/docs/img/Lista%20de%20SERVI%C3%87OS.png)
**Calendário - Agendamento**
![Calendário - Agendamento](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-2-pe6-t2-g10-gestao-de-agenda-e-financas/blob/main/docs/img/Agendamento%20-%20Usar%20API%20(3).png)
**Página de agendamento**
![Página de agendamento](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-2-pe6-t2-g10-gestao-de-agenda-e-financas/blob/main/docs/img/Agendamento%20-%20Usar%20API%20(2).png)
**Lista de agendamento**
![Lista de agendamento](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-2-pe6-t2-g10-gestao-de-agenda-e-financas/blob/main/docs/img/Agendamento%20-%20Lista%20de%20agendamento.png)
**Relatórios**
![Relatórios](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-2-pe6-t2-g10-gestao-de-agenda-e-financas/blob/main/docs/img/Relat%C3%B3rios.png)
**Financeiro**
![Financeiro](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-2-pe6-t2-g10-gestao-de-agenda-e-financas/blob/main/docs/img/Financeito%20-%20Sangria%20do%20caixa.png)
**Financeiro - Controle de retiradas**
![Financeiro - Adc retirada](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-2-pe6-t2-g10-gestao-de-agenda-e-financas/blob/main/docs/img/Financeito%20-%20Sangria%20do%20caixa%20-%20Adicionar.png)


### Design Visual

![Paleta de Cores](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-2-pe6-t2-g10-gestao-de-agenda-e-financas/blob/main/docs/img/Paleta%20de%20cores%20(3).png)
![Justificativa das Cores](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-2-pe6-t2-g10-gestao-de-agenda-e-financas/blob/main/docs/img/Cores%20(1).png)
![Botões e Campos de texto](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-2-pe6-t2-g10-gestao-de-agenda-e-financas/blob/main/docs/img/Tipografia%20-%2002%20(1).png)
![Ícones](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-2-pe6-t2-g10-gestao-de-agenda-e-financas/blob/main/docs/img/Iconografia.png)


### Layout Responsivo

A interface responsiva será essencial para garantir que a experiência do usuário seja intuitiva e agradável em qualquer dispositivo, seja ele um desktop, tablet ou celular. 
A seguir estão algumas abordagens e melhores práticas que serão implementadas para otimizar a interface em várias resoluções.

* **Design Responsivo:** O design do site será adaptado para redimensionar, esconder, ajustar e reorganizar elementos com base no tamanho da tela do dispositivo.
Desktop: Exibirá o layout completo, com barras laterais e menus expandidos, aproveitando a tela maior | Tablet: Manterá um layout mais compacto, geralmente com menus em forma de ícones ou um menu dobrável (menu hamburger) para liberar espaço | Celulares: Foco na navegação simplificada e principal, eliminando elementos secundários, e com botões maiores para facilitar o uso com o toque.
* **Imagens e Ícones Escaláveis:** Utilizaremos imagens e ícones vetoriais, mantendo assim, a qualidade visual independentemente do tamanho.
* **Tipografia e Espaçamento Ajustáveis:** As fontes e o espaçamento serão escaláveis para garantir que o texto seja legível em todas as telas.
* **Componentes Interativos e Funcionalidades:** Componentes como agendamentos, formulários de contato, e a área do cliente serão ajustados para manter a funcionalidade principal em telas menores.


### Interações do Usuário

As animações e interações serão desenhadas para garantir uma experiência intuitiva, de forma a guiar e melhor a navegação do usuário.

* **Campos de formulário:** Os placeholders se movem acima dos campos quando o usuário começa a digitar, mantendo clareza.
* **Fluxo de agendamento em etapas:** O processo será dividido em passos, com transições suaves para indicar o progresso no preenchimento das informações;
* **Transições suaves:** Troca de páginas suaves, dando continuidade à navegação do usuário.

## Fluxo de Dados

O fluxo de dados de uma aplicação web como o Agenda Fácil adota o modelo cliente-servidor.

**Front-end | Função:** O front-end é responsável pela interação com o usuário, manipulando dados de forma local e apresentando as informações de maneira visual e acessível.
* Possui foco na experiência do usuário, bem como na interação em tempo real. Diferente do back-end, onde possui foco na persistência de dados, segurança e validação.
* Envio e consulta de daos no back-end através da API.

**Cadastros:** Com o preenchimento dos formulários o usuário poderá inserir informações, dentre elas: dados de clientes e de serviços prestados. Esses dados vão ser inseridos no back-end.
**Agendamentos:** O usuário, ora Empreendedor, ao acessar a página de Agendamentos, ele selecionará a data e horário disponíveis em sua agenda. Com a data selecionada, posteriormente, o usuário preencherá as infromações do agendamento, inserindo o nome do cliente e selecionando o serviço e tempo de atendimento. Ao salvar, o status deste agendamento, será encaminhado ao back-end. Essa informação ficará gravada e disponível para consulta do usuário.
**Cadastros de Serviços:** Ao acessar a página de Serviços, o usuário poderá preencher um formulário informando a descrição do serviço, valor(preço do atendimento) e a duração. Ao salvar, o status deste agendamento, será encaminhado ao back-end. Estes dados, poderão inclusos durante o agendamento do Serviço.
**Relatórios:** Haverá uma consulta de dados no back-end. O usuário poderá verificar a quantia arrecadada em um determinado período, a partir do período selecionado, ele receberá a informação da quantia total, como também, os agendamentos que compõem aquela quantia apresentada.
**Financeiro:** O usuário poderá cadastrar as suas retiradas de dinheiro (sangria do caixa) no período selecionado. Ele terá a opção de criar, editar e excluir esta opção, esses dados serão encaminhados para back-end.

Exemplo | Fluxo em duas etapas (front-end e back-end), Agendamento de Serviço:

**Font-end:**
* O usuário seleciona uma data e um horário para o agendamento.
* A seleção atualiza o estado local da interface (calendário).
* Quando o usuário clica em "Salvar", o front-end envia os dados para o back-end via uma chamada API.


**Back-End:**
* O back-end recebe os dados do agendamento.
* Valida se o horário está disponível e se os dados do cliente são válidos.
* Salva o agendamento no banco de dados.
* Envia uma resposta para o front-end confirmando o sucesso ou reportando erros.


## Requisitos Funcionais

| ID    | Descrição do Requisito                                        | Prioridade |
|-------|---------------------------------------------------------------|------------|
| RF-001 | Permitir que o prestador se cadastre no sistema | ALTA       |
| RF-002 | Permitir o gerenciamento de clientes | ALTA |
| RF-003 | Permitir o gerenciamento de serviços | MÉDIA |
| RF-004 | Permitir o gerenciamento dos agendamentos dos prestadores | MÉDIA |
| RF-005 |Permitir gerenciamento das transações financeiras (receitas e despesas) | ALTA |
| RF-006 | Permitir que os usuários possam emitir relatórios | ALTA       |

## Requisitos Não Funcionais

| ID    | Descrição do Requisito                                      | Prioridade |
|-------|-------------------------------------------------------------|------------|
| RNF-001 | Permitir a autenticação dos usuários (login e senha) | ALTA  |
| RNF-002 | Oferecer uma interface intuitiva | MÉDIA |
| RNF-003 | Desenvolver um sistema responsivo para acesso em dispositivos móveis | ALTA |
| RNF-004 | Preparar o sistema para suportar aumento no número de clientes, agendamentos e transações | ALTA |
| RNF-005 | Adequar a aplicação perante as normas de proteção de dados | ALTA |
| RNF-006 | Garantir a segurança dos dados pessoais e financeiros | ALTA |


## Considerações de Segurança

É essencial pensar e aplicar medidas de segurança, uma aplicação distribuída que lida com dados sensíveis, como a Agenda Fácil. Esses cuidados são fundamentais para proteger as informações dos usuários, garantir que tudo funcione corretamente e tornar a aplicação confiável. 

* **Autenticação com JWT:** O uso de JWT permite que a autenticação seja segura e escalável, pois não requer que o servidor mantenha sessões. Os tokens contêm informações sobre o usuário e são assinados digitalmente para garantir que não sejam alterados. 
* **Validação de Dados:** A validação no front-end melhora a experiência do usuário, mas a validação no back-end é crucial para evitar ataques. 
* **Comunicação Segura:** Uso do protocolo HTTPS para proteger a comunicação entre o cliente e o servidor. Isso garante que os dados, como senhas e informações pessoais, sejam transmitidos de forma segura e não possam ser interceptados.


## Implantação

Requisitos de Hardware e Software:

**Hardware:**
* CPU: 2 núcleos ou mais, dependendo da quantidade de acessos simultâneos;
* Memória RAM: 4 GB no mínimo; 8 GB para uma aplicação com tráfego médio a alto;
* Armazenamento: SSD com pelo menos 20 GB de espaço livre, considerando um crescimento futuro.

**Software:**
* Sistema Operacional: Windows Server 2019 ou superior;
* Gerenciador de Processos;

**Nuvem - AZURE:** A hospedagem e o lançamento da plataforma serão realizados na Azure, utilizando os serviços oferecidos pela Microsoft para garantir escalabilidade, segurança e disponibilidade.
Servidor Dedicado com Windows Server.


## Testes

**REQUISITOS FUNCIONAIS**

**RF-001: PERMITIR QUE O PRESTADOR SE CADASTRE NO SISTEMA**

**CT-01: Cadastrar um novo prestador com todos os dados válidos**
* Pré-condições: O prestador não deve estar cadastrado no sistema.
* Passos:
1.	Acesse a página, clicar no botão CADASTRE-SE (localizado no campo superior à direita).
2.	Preencha todos os campos obrigatórios com dados válidos (nome, CNPJ, telefone, endereço e senha).
3.	Clique em “Salvar”.

**Resultado esperado:** O prestador é cadastrado com sucesso e uma mensagem de confirmação é exibida.

![Cadastro 01](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-2-pe6-t2-g10-gestao-de-agenda-e-financas/blob/main/docs/img/Cadastro%20-%20Finalizado.png)


**RF-002: PERMITIR O GERENCIAMENTO DE CLIENTES**

**CT-02: Cadastrar um novo cliente**
* Pré-condições: O prestador deve estar logado no sistema.
* Passos:
1.	Acesse a área de Cadastro.
2.	Clique em “CLIENTES”.
3.	Preencha os dados obrigatórios (nome, telefone e e-mail).
4.	Clique em “Salvar”.

**Resultado esperado:** O cliente é adicionado com sucesso e aparece na lista de clientes.

![Cadastro](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-2-pe6-t2-g10-gestao-de-agenda-e-financas/blob/main/docs/img/Cad%20-%202.jpeg)
![Cadastro01](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-2-pe6-t2-g10-gestao-de-agenda-e-financas/blob/main/docs/img/Cad%20-%203.jpeg)


**RF-003: PERMITIR O GERENCIAMENTO DE SERVIÇOS**

**CT-03: Cadastrar um novo serviço**
* Pré-condições: O usuário deve estar logado no sistema.
* Passos:
1.	Acesse a área de Cadastro.
2.	Clique em “SERVIÇOS”.
3.	Preencha os dados obrigatórios (descrição, preço e duração).
4.	Clique em “Salvar”.

**Resultado esperado:** O serviço é adicionado com sucesso e aparece na lista de serviços.

![Serviços](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-2-pe6-t2-g10-gestao-de-agenda-e-financas/blob/main/docs/img/Servi%C3%A7os.png)
![Serviços - Lista](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-2-pe6-t2-g10-gestao-de-agenda-e-financas/blob/main/docs/img/Servi%C3%A7os%20-%20Lista.png)


**RF-004: PERMITIR O GERENCIAMENTO DOS AGENDAMENTOS DOS PRESTADORES**

**CT-04: Editar um agendamento existente**
* Pré-condições: Pelo menos um agendamento deve estar cadastrado.
* Passos:
1.	Acesse a área de Agendamentos.
2.	Clique no botão “Lista”.
3.	Selecione o agendamento a ser editado.
4.	Clique em “Editar”.
5.	Alterar dados (exemplo: horário ou data).
6.	Clique em “Salvar”.

**Resultado esperado:** As alterações são salvas corretamente e o agendamento editado aparece com os novos dados.

![Lista 01](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-2-pe6-t2-g10-gestao-de-agenda-e-financas/blob/main/docs/img/Lista%2001.png)
![Lista 02](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-2-pe6-t2-g10-gestao-de-agenda-e-financas/blob/main/docs/img/Lista%2002.png)


**RF-005: PERMITIR GERENCIAMENTO DAS TRANSAÇÕES FINANCEIRAS (RECEITAS E DESPESAS)**

**CT-05: Excluir uma transação**
* Pré-condições: Pelo menos uma transação de receita deve estar cadastrada.
* Passos:
1.	Acesse a área Financeiro.
2.	Selecione a transação a ser excluída.
3.	Clique em “Excluir”.
4.	Confirme a exclusão.

**Resultado esperado:** A transação é removida do sistema e não aparece mais na lista.

![Retirada](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-2-pe6-t2-g10-gestao-de-agenda-e-financas/blob/main/docs/img/Retirada%2001.png)
![Retirada 01](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-2-pe6-t2-g10-gestao-de-agenda-e-financas/blob/main/docs/img/Retirada%2002.png)


**RF-006: PERMITIR QUE OS USUÁRIOS POSSAM EMITIR RELATÓRIOS**

**CT-06: Emitir relatório de transações financeiras**
* Pré-condições: O usuário deve estar logado no sistema e devem existir transações financeiras cadastradas.
* Passos:
1.	Acesse a área de Relatórios.
2.	Selecione “Selecione o período".
3.	Clique em "Emitir Relatório".

**Resultado esperado:** O relatório de transações financeiras é gerado e exibido na tela.

![Relatório](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-2-pe6-t2-g10-gestao-de-agenda-e-financas/blob/main/docs/img/Relat%C3%B3rio.png)


**REQUISITOS NÃO FUNCIONAIS**

**RNF-001: Permitir a autenticação dos usuários (login e senha)**

**CT-RNF01: Autenticar com credenciais válidas**
* Pré-condições: O usuário já deve estar cadastrado no sistema com credenciais válidas.
* Passos:
1.	Acesse a página de login.
2.	Insira o usuário (e-mail) e senha corretos.
3.	Clique em “Entrar”.

**Resultado esperado:** O usuário é redirecionado para a página inicial do sistema.

![Autenticação](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-2-pe6-t2-g10-gestao-de-agenda-e-financas/blob/main/docs/img/Login%20-%20usu%C3%A1rio.png)


**RNF-002: Oferecer uma interface intuitiva**

**CT-RNF02: Validar a facilidade de navegação entre as páginas do sistema**
* Pré-condições: O usuário deve estar logado no sistema.
* Passos:
1.	Navegue entre as seções principais do sistema.
2.	Observe a resposta visual e tempo de navegação entre as páginas.

**Resultado esperado:** A navegação entre as seções é intuitiva e sem dificuldades. O sistema carrega as páginas de maneira rápida e sem erros.

![Interface](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-2-pe6-t2-g10-gestao-de-agenda-e-financas/blob/main/docs/img/RNF02.png)


**RNF-003: Desenvolver um sistema responsivo para acesso em dispositivos móveis**

**CT-RNF03: Testar a responsividade em diferentes resoluções de tela**
* Pré-condições: O sistema deve ser acessado em diferentes resoluções de tela.
* Passos:
1.	Acesse o Inspecionar no navegador.
2.	Verifique os diferentes tipos de dispositivos através DIMENSIONS.
3.	Navegue pelas páginas e observe o layout.

**Resultado esperado:** O layout do sistema é ajustado corretamente, sem quebras de design ou problemas de visualização.

![Responsividade](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-2-pe6-t2-g10-gestao-de-agenda-e-financas/blob/main/docs/img/RNF%2003.png)


# Referências

CODE ZERO. Curso Completo de um Projeto Com Node.JS e  React.JS: Utilizando a famosa Stack MERN: MongoDB+Express+ReactJS+NodeJS. YouTube, 2020.

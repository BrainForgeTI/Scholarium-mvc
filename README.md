# Scholarium
Scholarium is an app that gamefy the study routine and enchance the learning and retention process.

## 02 - definição do produto
O Scholarium é uma plataforma que serve o propósito de ser uma central de estudos individual que visa elevar a experiência do aprendizado para outro nível. O objetivo do projeto é desenvolver uma ferramenta capaz de centralizar todos os ativos e artefatos relacionados ao estudo em um único lugar, oferecer métricas relevantes de como estão sendo as sessões de estudo do usuário e proporcionar uma experiência de aprendizado gameficada e recompensadora para o usuário.

## 03 - requisitos do sistema
requisitos funcionais:
1. Cadastro de usuário:  O cadastro de usuário é o ponto de partida da experiência seu sistema. Ele permitirá a personalização da jornada do usuário e é fundamental para o acompanhamento de progresso, personalização das trilhas de estudo e interação com outros aspectos do sistema. Além disso, ter um sistema de cadastro ajuda a garantir a segurança e controle de acesso às funcionalidades.
2. Autenticação e autorização: A autenticação garante que os usuários são quem dizem ser, enquanto a autorização define o que cada usuário pode ou não fazer no sistema. Juntas, essas funcionalidades asseguram que o acesso às informações será controlado, oferecendo uma camada extra de segurança para proteger dados sensíveis e limitar o acesso dos usuários dentro do servidor.
3. Criação de trilha de estudos personalizadas: Permitir que o usuário crie trilhas de estudos personalizadas ajuda a oferecer uma experiência única e direcionada, respeitando os interesses e necessidades de aprendizado de cada um. Isso mantém o engajamento alto, pois o estudante sente que está avançando de maneira relevante para seus objetivos.
4. Associação entre trilhas de estudo e personagens: O objetivo de associar trilhas de estudo com personagens é adicionar um elemento de gamificação ao processo de aprendizado. Os personagens refletirão o progresso do estudante e poderão ganhar experiência, subir de nível e ganhar recompensas, incentivando o aluno a completar desafios ou missões para avançar
5. Sistema de experiência, level up e prêmios:  Um sistema de experiência e level up premia o progresso do aluno, tornando o aprendizado mais envolvente e recompensador. Os prêmios incentivam o usuário a continuar estudando, reforçando positivamente os comportamentos e o esforço do mesmo.
6. Acesso a métricas de estudo: Oferecer métricas de estudo permite que o usuário monitore seu progresso, identifique áreas que precisam de reforço e se sinta que está no controle dos seus estudos. Além de oferecer uma maneira centralizada de visualizar seu desempenho de maneira clara, ajudando o usuário a se ajustar no seu plano de estudo.
7. Acesso a métodos para aprimorar o estudo e a retenção do conteúdo: Ter métodos para aprimorar o estudo e a retenção é essencial para ajudar o usuário a maximizar seu aprendizado.

requisitos não funcionais:
**desempenho:**
1. Todas as requisições devem ser atendidas em menos de 10ms.
2. O servidor deve ser capaz de atender 99% das requisições mesmo quando realizado teste de estresse com 5000 requisições simultâneas.

**segurança:**
1. Todas as rotas, com exceção das rotas de login e cadastro, deveram requisitar autenticação.
2. Deverá haver rotas que só poderão ser acessadas por usuários premium ou administradores.

**usabilidade:**
1. O design deverá ser intuitivo para usuários não jogadores.
2. Deverá haver tutoriais na tela.

**manutenibulidade:**
1. A aplicação deve ser construída de forma modular e de acordo com as boas práticas de programação para facilitar a manutenção e adição de novas funcionalidades.
2. A aplicação deverá ter uma taxa de cobertura de, no mínimo, 95%.

## 04 - Restrições e condições
restrições técnicas:
**Plataformas**: a princípio, o Scholarium será desenvolvido apenas na forma de um aplicativo web por conta da familiaridade dos desenvolvedores com essa plataforma e afim de acelerar o desenvolvimento. Entretanto, há o interesse em transformar a ferramenta em aplicações Android e iOS no futuro.
**linguagem de programação e framework:** para atender o requisito de modularidade do sistema, é necessário o uso de um framework que estimule a modularidade sem abrir mão de também incentivar as boas práticas de desenvolvimento, auxiliando na construção de um backend robusto e responsivo. Além dessas restrições, há a condição de o framework precisar ser escrito em NodeJs, tanto por ser a linguagem de domínio dos desenvolvedores encarregados quanto por permitir que o aplicativo inteiro seja construído usando a mesma ferramenta: javascript. Com isso, foi decidido que o servidor será cosntruído em NodeJs, com o auxílio do framework NestJs; enquanto o front-end será construído com o auxílio do framework React. Dessa forma teremos uma aplicação construída em cima de uma linguagem apenas, o que permitirá uma maior intercomunicação dos desenvolvedores. ****

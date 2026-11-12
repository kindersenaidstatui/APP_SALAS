
# 🏫 Smart Room — Aplicativo Mobile

Aplicativo mobile desenvolvido com **React Native e Expo** como parte do projeto Smart Room, uma solução tecnológica voltada ao gerenciamento inteligente de salas de aula.

## 📌 Sobre o projeto

O Smart Room tem como objetivo modernizar os ambientes escolares por meio da integração entre hardware, software e Internet das Coisas (IoT).

O aplicativo mobile foi desenvolvido para oferecer uma interface intuitiva, permitindo o acompanhamento e o gerenciamento das informações relacionadas às salas de aula.

O projeto faz parte de um ecossistema composto por três módulos:

- **Hardware IoT:** Arduino Uno e sensores responsáveis pela coleta de informações do ambiente.
- **Plataforma Web:** painel administrativo para gerenciamento das salas.
- **Aplicativo Mobile:** interface para acesso às funcionalidades do Smart Room.

## 🎯 Objetivos

- Facilitar o gerenciamento das salas de aula.
- Centralizar informações dos ambientes escolares.
- Proporcionar uma interface mobile intuitiva.
- Integrar dispositivos físicos e sistemas digitais.
- Contribuir para a modernização da infraestrutura escolar.

## ⚙️ Funcionalidades

| Funcionalidade | Descrição |
|---|---|
| Login | Interface de autenticação. |
| Dashboard | Visualização geral das informações. |
| Controle | Área destinada ao gerenciamento das salas. |
| Histórico | Consulta de registros anteriores. |
| Logs | Visualização de atividades do sistema. |
| Splash Screen | Tela inicial da aplicação. |

## 🛠️ Tecnologias utilizadas

- JavaScript
- React Native
- Expo
- React Hooks
- Expo Vector Icons
- Node.js e NPM

## 📁 Estrutura do projeto

```text
APP_SALAS/
├── assets/
├── pages/
│   ├── login.js
│   ├── dashboard.js
│   ├── controle.js
│   ├── historico.js
│   ├── logs.js
│   └── splash.js
├── services/
├── App.js
├── index.js
├── app.json
└── package.json
```

## 💻 Instalação e execução

### Pré-requisitos

- Node.js instalado.
- NPM instalado.
- Expo Go (opcional, para execução em dispositivos móveis).

### 1. Clone o repositório

```bash
git clone https://github.com/kindersenaidstatui/APP_SALAS.git
```

### 2. Acesse a pasta

```bash
cd APP_SALAS
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Inicie o projeto

```bash
npx expo start
```

Utilize o QR Code disponibilizado para executar o aplicativo pelo Expo Go.

## 🔗 Integração com o Smart Room

A aplicação mobile integra a proposta de um sistema inteligente que utiliza sensores para acompanhar informações dos ambientes escolares, como:

- Temperatura da sala.
- Estado da iluminação.
- Presença de pessoas.
- Estado do ar-condicionado.

A comunicação entre os módulos busca permitir o acompanhamento centralizado dessas informações.

## 🚀 Melhorias futuras

- Integração com a API do sistema.
- Comunicação com o banco de dados MySQL por meio do backend.
- Atualização de informações em tempo real.
- Monitoramento dos sensores IoT.
- Implementação de notificações.
- Aprimoramento das funcionalidades de controle e histórico.

## 🎓 Contexto acadêmico

Projeto desenvolvido no curso de **Desenvolvimento de Sistemas**, com foco na aplicação prática de desenvolvimento mobile, integração de sistemas, banco de dados e Internet das Coisas (IoT).

---

<p align="center">
  <strong>SMART ROOM</strong><br>
  Tecnologia conectando ambientes, pessoas e inovação.
</p>

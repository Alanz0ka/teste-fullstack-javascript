# Sistema de Gerenciamento de Estoque

Este é um sistema de gerenciamento de itens que consiste em um frontend e um backend. O frontend permite aos usuários visualizar, adicionar, editar e excluir itens, enquanto o backend fornece uma API RESTful para interação com os dados dos itens.

## Como executar

### Frontend

1. Certifique-se de ter o Node.js instalado em sua máquina.
2. Clone este repositório
3. Navegue até o diretório `/frontend` do projeto no terminal.
4. Execute `npm install` espere até as dependências serem instaladas.
5. Execute `npm start` para iniciar o servidor de desenvolvimento.
6. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para visualizar o aplicativo.

### Backend

1. Certifique-se de ter o Node.js e o MongoDB instalados em sua máquina.
2. Clone este repositório.
3. Navegue até o diretório `/backend` do projeto no terminal.
4. Execute `npm install` para instalar as dependências.
5. Caso nescessário configure as variáveis de ambiente no arquivo `.env`.
6. Execute `npm run dev` para iniciar o servidor.
7. O servidor estará disponível em [http://localhost:4000](http://localhost:4000).

## Tecnologias Utilizadas

### Frontend

- React.js
- Styled Components
- Axios

### Backend

- Node.js
- Bcrypt para criptografia
- Express.js
- SqLite
- JWT para autenticação

## Funcionalidades

- Visualização de itens
- Adição de novos itens
- Edição de itens existentes
- Exclusão de itens

## Estrutura do Projeto
```
sistema-gerenciamento-itens/
|-- frontend/
|   |-- public/
|   |-- src/
|   |   |-- Components/
|   |   |   |-- Navbar/
|   |   |   |-- ItemForm/
|   |   |   |-- ItemList/
|   |   |-- Pages/
|   |   |   |-- Home/
|   |   |   |-- Login/
|   |   |   |-- Signup/
|   |   |-- Services/
|   |   |   |-- ApiService.js
|   |   |   |-- AuthService.js
|-- backend/
|   |-- controllers/
|   |   |-- ItemController.js
|   |   |-- AuthController.js
|   |-- models/
|   |   |-- Item.js
|   |   |-- User.js
|   |-- routes/
|   |   |-- itemRoutes.js
|   |   |-- authRoutes.js
|   |-- middleware/
|   |   |-- authMiddleware.js
|   |-- config/
|   |   |-- config.js
|   |-- index.js
```
## Contato

Para dúvidas ou sugestões, entre em contato pelo email: josealan.santos14@gmail.com

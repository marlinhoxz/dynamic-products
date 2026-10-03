# Dynamic Products

Aplicação desenvolvida com **Next.js, React e TypeScript** para praticar requisições dinâmicas, consumo de API e criação de **Route Handlers**.

A aplicação permite selecionar diferentes categorias de produtos, como **Tablet, Smartphone e Notebook**. Ao selecionar uma categoria, o frontend realiza uma requisição para uma rota dinâmica da própria aplicação, que consulta a API externa e retorna os dados do produto.

## 🚀 Tecnologias

- **Next.js**
- **React**
- **TypeScript**
- **CSS Modules**
- **Next/Image**
- **Route Handlers**
- **Fetch API**

## 📌 Funcionalidades

- Seleção dinâmica de produtos por categoria
- Requisições utilizando `fetch`
- Route Handler dinâmico com `[tipo]`
- Consumo de API externa através do backend do Next.js
- Tipagem dos dados utilizando TypeScript
- Renderização condicional dos dados
- Componente reutilizável para diferentes categorias
- Exibição de informações do produto, como:
  - Nome
  - Descrição
  - Preço
  - Imagem

## 🔄 Funcionamento

O projeto utiliza uma rota dinâmica para receber o tipo de produto selecionado.

```text
Botão
  ↓
/api/produto/[tipo]
  ↓
Route Handler
  ↓
API externa
  ↓
Dados do produto
  ↓
Componente React
```

Por exemplo:

```text
/api/produto/tablet
/api/produto/smartphone
/api/produto/notebook
```

O parâmetro `[tipo]` permite utilizar o mesmo Route Handler para diferentes categorias de produtos.

## 🧩 Estrutura da aplicação

```text
src/
├── app/
│   ├── api/
│   │   └── produto/
│   │       └── [tipo]/
│   │           └── route.ts
│   │
│   └── page.tsx
│
└── components/
    └── buttonFetch/
        ├── Button.tsx
        └── button.module.css
```

## 🛠️ Como executar

Clone o repositório:

```bash
git clone https://github.com/marlinhoxz/dynamic-products.git
```

Entre na pasta:

```bash
cd dynamic-products
```

Instale as dependências:

```bash
npm install
```

Execute o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse:

```text
http://localhost:3000
```

## 📚 API utilizada

Os dados dos produtos são obtidos através da API do projeto da Origamid:

```text
https://ranekapi.origamid.dev/json/api/produto/
```

Exemplos:

```text
https://ranekapi.origamid.dev/json/api/produto/tablet
https://ranekapi.origamid.dev/json/api/produto/smartphone
https://ranekapi.origamid.dev/json/api/produto/notebook
```

## 🎯 Objetivo do projeto

Este projeto foi desenvolvido como exercício de estudo para aprofundar conhecimentos em:

- Requisições HTTP com `fetch`
- React Hooks
- `useState`
- `useEffect`
- Componentes reutilizáveis
- Props com TypeScript
- Tipagem de respostas de API
- Rotas dinâmicas do Next.js
- Route Handlers
- Consumo de APIs externas
- Renderização condicional

## 👨‍💻 Autor

**Marlon**

GitHub: [@marlinhoxz](https://github.com/marlinhoxz)

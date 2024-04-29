# Back-End Clube de Desenvolvimento de Jogos

Back-end desenvolvido com finalidade de gerenciamento de Usuarios do Clube de Desenvolvimento de Jogos - IFRS Campus Feliz.

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

Consulte **[Implantação](#-implanta%C3%A7%C3%A3o)** para saber como implantar o projeto.

## 🚢 Rotas

Adicionar Usuario

```
post: /users

{ 
  name: nome do usuario
}
```

Listar Usuarios
```
get: /users - retorna todos usuarios
```
### 📦 Implantação

Passo-a-passo que informam como executar o projeto.

Faça a copia do repositorio:

```
git clone https://github.com/GustavoGebhardt/clube-backEnd
```

Entre na pasta do projeto:

```
cd clube-backEnd
```

Rodar o projeto em Ts:

```
node run dev
```

Rodar o projeto em Js:

```
node run build
```
Em seguida:

```
node run start
```

Sua aplicação estara rodando com sucesso.

## 🛠️ Construído com

Mencione as ferramentas que você usou para criar seu projeto

* [Fastify](https://fastify.dev/docs/latest/) - Framework web usado
* [Prisma](https://www.prisma.io/docs) - Framework Database
* [TS](https://www.typescriptlang.org/docs/) - Linguagem utilizada Ts

## ✒️ Autores

* **Gustavo Gebhardt** - *Desenvolvedor* - [Desenvolvedor](https://github.com/GustavoGebhardt/)

## 📄 Licença

Este projeto está sob a licença MIT license - veja o arquivo [LICENSE](https://github.com/GustavoGebhardt/clube-backEnd/blob/main/LICENSE) para detalhes.

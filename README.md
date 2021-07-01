<h1 align = "center">Store Projects</h1>

<h2 align = "center">Aplicação para armazenar projetos e suas tarefas do zero utilizando Express.</h2>

### Rotas

Post/projects - Deve receber um id e title no corpo e cadastrar um novo projeto dentro do array: { id: "3", title: 'Novo projeto', tasks: [ "Ir ao supermercado", "Lavar a roupa suja" ] },

Get/projects - Rota lista todos projetos e suas tarefas,

Put/projects/:id - A rota altera apenas o título do projeto com o id nos parâmetros,

Delete/projects/:id - A rota deleta o projeto com o id presente nos parâmetros,

Post/projects/:id/tasks - A rota recebe um campo title e armazena uma nova tarefa no array de tarefas de um projeto escolhido através do id nos parâmetros da rota.

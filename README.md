# Galaxies Catalog 
Este projeto é um back end para fazer um catálogo de galáxias usando como base o express usando os conceitos de Clean nodeJS e SOLID.

Para iniciar o projeto, é nescessário adicionar a pasta node_modules com o npm ou yarn.

```console
  npm install
```

Para executar, rode o comando
```console
  npm run start:dev
```

Até o momento, este projeto não está ultilizando banco de dados. Agora, caso queira fazer o uso: Crie um serviço para o repositório usando seu banco de dados de preferência mas seguindo as regras do IGalaxiesRepositories dentro da pasta [Repository](./src/modules/Repository/), e para cada service na pasta [UseCase](./src/modules/UseCase/) instanciar o serviço criado e coloque dentro do parâmetro de instancia de cada serviço, seja de criar uma galaxia, listar...

exemplo

```ts
  // CreateGalaxies.ts
  ...
  const galaxiesRepository = GalaxiesRepository.getInstance();
  const createGalaxyService = new CreateGalaxyService (galaxiesRepository);
  ...
```

# Exemplo usando o curl
Para documentar eu estou colocando o curl como exemplo, mas você pose usar um insominia, postman, ou até mesmo um client.


# Rotas
## EndPoint /galaxies

## Métodos
## Post
Registra uma nova galáxia

somente requer o body da requisição

body
```json
{
  id?: string;
  name: string;
  description: string;
  uncovered: Date;

  numberOfStars: number;
  numberOfBlackHoles: number;
  numberOfSuperMassiveBlackHoles: number;
}
```

### Teste com o curl

```console
curl -X POST http://localhost:3333/galaxies -H 'Content-Type: application/json' \
-d '{ "name": "Andromeda", "description": "A galaxia mais próxima de nos, e colidiremos com ela", "uncovered": "25/03/199", "numberOfStars": 123, "numberOfBlackHoles": 10, "numberOfSuperMassiveBlackHoles": 1 }'
```

## Get
Lista todas as Galaxias

não requer nenhuma infromação já que vai pegar todas as galaxias registradas. Aseguir temos objeto de retorno, lambrando, que ele vai retornan uma lista desses objetos.

```json
  id?: string;
  name: string;
  description: string;
  uncovered: Date;

  numberOfStars: number;
  numberOfBlackHoles: number;
  numberOfSuperMassiveBlackHoles: number;

  created_at: Date;
  updated_at: Date;
```

### Teste com o curl

```console
  curl http://localhost:3333/galaxies
```
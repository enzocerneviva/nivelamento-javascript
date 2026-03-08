# Cross-Plataform Application Development (2° Ano Ciências da Computação)

## 1. Criar o Repositório no GitHub

##### Sugestão de nome do repositório:

```
1 sistema-consultas-typescript
```
##### Passo a passo:

##### 1 1 .Acessar https://github.com

##### 2 2 .Clicar em New repository

##### 3 3 .Nomear como: sistema-consultas-typescript


##### 4 4 .Marcar como Public

##### 5 5. Não adicionar README automático

##### 6 6. Não adicionar. gitignore automático

##### 7 7 .Clicar em Create repository

##### Importante:

##### Se a atividade for realizada em grupo, apenas um integrante deve criar o repositório.

## 2. Clonar o Repositório em Diretório Próximo ao C:

##### Para evitar problemas com caminhos longos no Windows, o projeto deve ser clonado próximo à raiz do

##### disco.

##### Exemplo recomendado:

```
1 C:/projeto-typescript
```
##### Clonar o repositório:

```
git clone cd sistema
-consultas-typescript
```
```
1 https://github.com/SEU-USUARIO/sistema-consultas-typescript.git
```
##### Abrir no VS Code:

```
1 code.
```
## 3. Inicializar o Projeto TypeScript

##### Dentro da pasta clonada:

```
1 tsc --init
```
##### Criar estrutura inicial:

```
1 src/
2 dist/
```
##### Criar arquivo inicial:

```
1 src/index.ts
```
## 4. Fluxo de Trabalho Individual

##### Mesmo quem criou o repositório não deve trabalhar diretamente na main.

##### A main deve permanecer sempre estável.

##### Para cada atividade da aula, criar uma branch específica.

##### Exemplo:

```
1 git checkout -b atividade-1-listagem
```
##### Trabalhar normalmente.

##### Ao finalizar a atividade:

```
1 git add.
2 git commit -m "feat: implementação da listagem por status"
3 git push origin atividade-1-listagem
```
##### Depois:

##### 1 1 .Abrir Pull Request no GitHub


##### 2 2 .Revisar alterações

##### 3 3 .Fazer merge na main

##### 4 4 .Atualizar repositório local:

```
1 git checkout main
2 git pull origin main
```
## 5. Fluxo de Trabalho em Grupo

##### Se estiverem em grupo:

##### 1 1 .Apenas um aluno cria o repositório.

##### 2 2 .Os demais devem ser adicionados como colaboradores.

##### 3 3 .Cada integrante deve criar sua própria branch.

##### Exemplo:

```
1 git checkout -b atividade-2-consultas-futuras
```
##### ou

```
1 git checkout -b atividade-3-array-tipado-nomeAluno
```
##### Boas práticas obrigatórias:

##### Não trabalhar diretamente na main

##### Não fazer push direto na main

##### Cada integrante deve usar seus próprios commits

##### O histórico deve mostrar claramente quem implementou cada parte

##### Após concluir a atividade:

```
1 git add.
2 git commit -m "feat: implementação da atividade 3 - array tipado"
3 git push origin nome-da-branch
```
##### Abrir Pull Request.

##### O responsável pelo repositório deve:

##### Revisar

##### Fazer merge

##### Garantir que a main esteja sempre atualizada

##### Todos devem atualizar localmente:

```
1 git checkout main
2 git pull origin main
```
## 6. Padrão de Mensagens de Commit

##### Utilizar padrão profissional:

```
1 feat: nova funcionalidade
2 fix: correção de erro
3 refactor: melhoria de código
4 docs: atualização de documentação
5 chore: ajustes internos
```
##### Exemplos:

```
1 feat: criação da função listarConsultasPorStatus
2 feat: implementação do cálculo de faturamento
```

```
3 fix: correção da comparação de datas
```

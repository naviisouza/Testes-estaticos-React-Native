React Native Test Static
Este repositório foi criado como parte da aula de Testes Estáticos no curso da PUC. Ele demonstra o uso de ferramentas para análise estática de código em projetos React Native, com foco em identificar e corrigir problemas de qualidade antes da execução ou compilação.

📚 O que são Testes Estáticos?
Testes Estáticos são verificações realizadas no código-fonte sem que ele precise ser executado. O objetivo é identificar problemas como:

Erros de sintaxe.
Violações de boas práticas.
Tipos incorretos.
Código morto ou não utilizado.
As ferramentas usadas para testes estáticos analisam o código diretamente, sem interagir com o ambiente de execução.

🛠 Ferramentas Utilizadas
ESLint: Detecta problemas de qualidade e formatação do código.
Prettier: Garante a consistência na formatação do código.
TypeScript: Verifica erros de tipagem no código.
Depcheck: Identifica dependências não utilizadas ou faltantes no projeto.
🚀 Scripts Disponíveis
Os seguintes scripts estão disponíveis no arquivo package.json para facilitar o trabalho com o projeto:

Análise de Código
Lint Check: Verifica problemas no código com ESLint.

npm run lint:check
Lint Fix: Corrige problemas detectados pelo ESLint automaticamente.

npm run lint:fix
Formatação de Código
Format Check: Verifica a formatação de um arquivo específico usando o Prettier.

npm run format:check:file
Format Apply: Aplica a formatação em um arquivo específico usando o Prettier.

npm run format:apply:file
Verificação de Dependências
Check Unused Dependencies: Identifica dependências não utilizadas ou ausentes no projeto.
npm run check:unused:dependencies
Transpilar Código TypeScript
Test Static (Sum): Transpila um arquivo TypeScript específico.
npm run test:static:sum
📝 Atividades da Aula
A aula é dividida em 5 atividades práticas que devem ser realizadas seguindo os passos abaixo:

Atividade 1: Análise de Código com ESLint
Execute o script de lint para identificar problemas no código.

npm run lint:check
Corrija os problemas detectados automaticamente:

npm run lint:fix
Atividade 2: Transpilar Código TypeScript
Transpile o arquivo src/utils/sum.ts para verificar erros de tipagem.

npm run test:static:sum
Atividade 3: Verificar Formatação de Código
Verifique se o arquivo src/utils/unformatted-file.ts está formatado corretamente.

npm run format:check:file
Atividade 4: Aplicar Formatação de Código
Formate o arquivo src/utils/unformatted-file.ts para corrigir inconsistências.

npm run format:apply:file
Atividade 5: Verificar Dependências Não Utilizadas
Utilize o Depcheck para verificar dependências não utilizadas no projeto.

npm run check:unused:dependencies
📁 Estrutura do Projeto
A estrutura atualizada do projeto é a seguinte:

react_native_test_static/
├── node_modules/
├── src/
│   ├── components/
│   │   └── example-button.tsx
│   ├── utils/
│   │   ├── sum.ts
│   │   ├── unformatted-file.ts
│   │   └── uuid.ts
├── .eslintrc.js
├── .gitignore
├── .prettierignore
├── .prettierrc
├── package-lock.json
├── package.json
└── README.md
🎓 Objetivos da Aula
Compreender o conceito de testes estáticos e sua importância.
Aprender a configurar ferramentas como ESLint, Prettier, TypeScript e Depcheck em um projeto React Native.
Identificar problemas no código e corrigi-los antes da execução.
📝 Como Usar este Repositório
Clone o repositório:

git clone https://github.com/jacksonsmith/react_native_test_static.git
cd react_native_test_static
Instale as dependências:

npm install
Execute as atividades conforme descrito na seção "Atividades da Aula".

# Projeto SocialMedia

Este projeto consiste em um clone do site do Instagram para o aprofundamento nos estudos de Laravel + React. Projeto realizado em um total de 24 horas.

## Rodando localmente: Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/) (versão 12.x ou superior)
- [Composer](https://getcomposer.org/)
- [PHP](https://www.php.net/) (versão 7.4 ou superior)
- [Laravel](https://laravel.com/) (versão 8 ou superior)
- [MySQL](https://www.mysql.com/)

## Configuração do Backend (Laravel)

1. Navegue até a pasta do backend:
   ```bash
   cd Backend/SocialMedia
   ```
2. Instale as dependências do PHP com o Composer:
  ```bash
  composer install
  ```
  4. Gere a chave da aplicação Backend:
  ```bash
  php artisan key:generate
  ```
  5. Configure o banco de dados MySQL no arquivo `.env`
  ```env
  DB_CONNECTION=mysql
  DB_HOST=127.0.0.1
  DB_PORT=3306
  DB_DATABASE=socialmedia
  DB_USERNAME=root
  DB_PASSWORD=
  ```
  6. Rode as migrações do banco de dados:
  ```bash
  php artisan migrate
  ```
  7. Inicie o servidor Laravel:
  ```bash
  php artisan serve
  ```
  O backend estará rodando em `http://localhost:8000`.

  ## Configuração do Frontend (React)

  1. Navegue até a pasta do frontend:
  ```bash
  cd frontend/socialmedia
  ```
  2. Instale as dependências do Node.js:
  ```bash
  npm install
  ```
  3. Inicie o servidor de desenvolvimento do React:
  ```bash
  npm start
  ```
  O frontend estará rodando em `http://localhost:3000`.

  ### Observações
  - O backend e o frontend precisam estar rodando simultaneamente.

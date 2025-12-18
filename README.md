# ServicesRouteCalculationAngularTemp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Deployment

This project is automatically deployed to GitHub Pages via GitHub Actions.

### Настройка автоматического деплоя

1. **Создайте Personal Access Token (PAT) для деплоя:**
   - Перейдите в GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Создайте новый token с правами `repo` (полный доступ к репозиториям)
   - Скопируйте созданный token

2. **Добавьте токен в Secrets текущего репозитория:**
   - Перейдите в Settings → Secrets and variables → Actions
   - Нажмите "New repository secret"
   - Имя: `DEPLOY_TOKEN`
   - Значение: вставьте скопированный Personal Access Token
   - Нажмите "Add secret"

3. **Настройте GitHub Pages в целевом репозитории:**
   - Перейдите в репозиторий `services-route-calculation-angular-deploy`
   - Settings → Pages
   - Source: выберите "Deploy from a branch"
   - Branch: выберите `main` (или `master`) и папку `/ (root)`
   - Нажмите "Save"

4. **Активация деплоя:**
   - Workflow автоматически запустится при push в ветку `main` или `master`
   - Также можно запустить вручную через Actions → "Deploy to GitHub Pages" → "Run workflow"

### Ручной деплой

Для ручного деплоя используйте команду:
```bash
npm run deploy
```

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Your Favorite Pasta 📝

https://yourfavoritepasta.fun - заходим и кекаем

Маленький проект сделанный за двое суток в течении двух месяцев. Задумывался как хранилище платиновых паст наших друзей.

Проект написан на  [Next.js](https://nextjs.org/) стартанут с [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). в качестве базы данных используется [Airtable](https://www.airtable.com/).

## Начало работы
1. Клонируем репозиторий

```bash
git clone git@github.com:your-favorite-pasta/yfr-app.git
```

2. Ставим зависимости

```bash
npm install
```
3. Создаем .env файл

```bash
cp .env.example .env
```
4. берем все необходимое из airtable и заполняем ```.env```

## Запуск
```bash
npm run prepare # при первом запуске 
npm run dev
```
открываем [http://localhost:3000](http://localhost:3000) 


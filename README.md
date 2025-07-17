# History Dates

## 🧰 Технологии
- React
- TypeScript
- Swiper
- CSS Modules / Sass

## 📦 Установка и запуск
1. Склонируйте репозиторий
2. Установите зависимости: `npm install`
3. Запустите devServer: `npm start`
3.1. Для продакшен сборки: npm run build:prod
3.2. Для дев сборки: npm run build:dev

## 📁 Структура проекта
Проект организован по принципу Feature-Sliced Design
src/
├── app/                  # Главная точка входа и глобальные настройки
├── shared/               # Общие утилиты, типы, константы
│   └── consts            # Константы 
│   └── lib/              # Хелперы
│   └── ui/               # Аереиспользуемые компоненты
│   └── assets/           # Иконки, изображения и другие ресурсы
│   └── context/          # React Context
├── entities/             # Бизнес-сущности 
├── features/             # Фичи приложения 
├── pages/                # Страницы приложения

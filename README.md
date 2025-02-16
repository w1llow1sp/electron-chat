# 📌 Чат-приложение (Frontend + Backend)

## 📖 Описание
Это реальное время чат-приложение с использованием **React, Redux, WebSocket и GraphQL**. 
Проект состоит из двух частей:
- **Frontend (Vite + React + Redux + WebSocket)** – отвечает за интерфейс пользователя.
- **Backend (Node.js + WebSocket + Express + GraphQL)** – обрабатывает WebSocket соединения и взаимодействует с клиентами.

## 🚀 Запуск проекта

### 🔹 Клонирование репозитория
```sh
git clone <ссылка-на-репозиторий>
cd <название-репозитория>
```

---
### 🔹 Запуск backend
```sh
cd backend
npm install
node server.js
```
По умолчанию сервер запустится на `http://localhost:4000`

Если используешь **nodemon**, то можешь запустить:
```sh
npm install -g nodemon
nodemon server.js
```

---
### 🔹 Запуск frontend
```sh
cd frontend
npm install
npm run dev
```
После запуска фронтенд будет доступен на `http://localhost:5173`

---
## 📦 Технологии
### **Frontend:**
- **Vite** – сборка проекта
- **React** – UI-библиотека
- **Redux Toolkit** – управление состоянием
- **WebSocket** – работа в реальном времени
- **GraphQL (Apollo Client)** – взаимодействие с бэкендом
- **CSS Modules** – стилизация компонентов
- **ErrorBoundary** – обработка ошибок

### **Backend:**
- **Node.js + Express** – серверное приложение
- **WebSocket (ws)** – обмен сообщениями в реальном времени
- **GraphQL (Apollo Server)** – API для расширенной работы

---
## 📂 Структура проекта
```sh
.
├── backend/          # Серверная часть
│   ├── server.js     # WebSocket и Express сервер
│   ├── package.json  # Зависимости backend
│   └── ...          
│
├── frontend/         # Клиентская часть
│   ├── src/
│   │   ├── app/      # Глобальные настройки
│   │   ├── shared/   # Общие утилиты (WebSocket, API)
│   │   ├── entities/ # Хранилище данных
│   │   ├── features/ # Логика фич
│   │   ├── pages/    # Основные страницы
│   │   ├── components/ # UI-компоненты
│   │   ├── styles/   # CSS файлы
│   ├── package.json  # Зависимости frontend
│   └── vite.config.ts # Конфигурация Vite
```

---
## 🔧 Настройка WebSocket
WebSocket сервер принимает и рассылает сообщения всем подключенным клиентам. 
В `backend/server.js` реализовано:
```js
wss.on("connection", (ws) => {
  ws.on("message", (message) => {
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });
});
```

На фронте подключение к WebSocket происходит в `frontend/src/shared/api/socket.ts`:
```ts
const socket = new WebSocket("ws://localhost:4000");

socket.onmessage = (event) => {
  store.dispatch(addMessage(event.data));
};
```

---
## 🔥 Дополнительные улучшения
✅ **Авто-прокрутка чата** до последнего сообщения.  
✅ **Обработчик ошибок (ErrorBoundary)** для устойчивости приложения.  
✅ **Стилизация через CSS Modules** для изоляции стилей.  
✅ **GraphQL API** (опционально, если потребуется сложная логика).  
✅ **Подключение WebSocket для real-time чата**.  
✅ **Использование Redux Toolkit для управления состоянием**.  
✅ **Обработка ошибок WebSocket и корректная работа с `Blob`/`ArrayBuffer`**.  

---
## 🛠 Возможные доработки
📌 **Добавить авторизацию пользователей (JWT, Firebase)**.  
📌 **Сохранение истории чатов в базе данных (MongoDB, PostgreSQL)**.  
📌 **Добавить поддержку изображений и файлов**.  
📌 **Сделать уведомления о новых сообщениях**.  
📌 **Добавить поддержку нескольких чатов (групповые комнаты)**.  
📌 **Улучшить UI/UX с анимациями и кастомными стилями**.  




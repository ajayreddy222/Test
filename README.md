# AKEEP-Gamification
AKEEP Unified Web Server for Online Educational Services

# Running the App

Make sure you have Node.js stuff installed:
```
cd frontend
npm install

cd mail-server
npm install
```

Set environmental variables:

```
Create .env files according to .env.example at:
1. ./frontend forder
2. /mail-server folder
```

Start the backend:

```
cd backend
mvn spring-boot:run
```

Start the email server:

```
cd mail server
npm run start
```

Start the frontend:

```
cd frontend
npm start
```

and connect to `https://localhost:3000` in a browser.

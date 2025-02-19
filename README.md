# Scholarium
Scholarium is an app that gamefy the study routine and enchance the learning and retention process.

# 2. Project components organization

/my-nestjs-app
│── src/
│   ├── modules/
│   │   ├── users/
│   │   │   ├── controllers/
│   │   │   │   ├── users.controller.ts
│   │   │   ├── services/
│   │   │   │   ├── users.service.ts
│   │   │   ├── models/
│   │   │   │   ├── user.entity.ts
│   │   │   ├── users.module.ts
│   │   ├── auth/
│   │   │   ├── controllers/
│   │   │   │   ├── auth.controller.ts
│   │   │   ├── services/
│   │   │   │   ├── auth.service.ts
│   │   │   ├── auth.module.ts
│   ├── views/
│   │   ├── auth/
│   │   │   ├── login.hbs
│   ├── core/
│   │   ├── database/
│   │   │   ├── database.module.ts
│   │   │   ├── database.service.ts
│   ├── app.module.ts
│   ├── main.ts
│── public/
│   ├── css/
│   ├── js/
│   ├── images/
│── .env
│── package.json


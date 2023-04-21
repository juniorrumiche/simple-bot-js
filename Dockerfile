FROM node:19-buster

RUN apt-get update && \
  apt-get install -y chromium && \
  rm -rf /var/lib/apt/lists/*
WORKDIR /app

COPY package.json .


RUN npm install

COPY . .
RUN npm run build


CMD ["npm", "start"]

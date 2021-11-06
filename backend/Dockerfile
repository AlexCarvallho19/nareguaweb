FROM node:alpine

WORKDIR /user/backapp

COPY . .

RUN npm install

EXPOSE 3001

CMD ["npm", "start"]
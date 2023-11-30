FROM node:20.10.0

WORKDIR /app

COPY . /app

COPY package.json ./

RUN npm install

EXPOSE 3000

CMD ["tail", "-f", "/dev/null"]


FROM node:18

WORKDIR /

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

ENV PORT=3000
ENV NODE_ENV=production
ENV HOST=0.0.0.0

EXPOSE 3000

CMD ["npm","run","start"]


# understand the working directory and write docker file accordingly
FROM node:alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
CMD ["node", "dist/index.js"]
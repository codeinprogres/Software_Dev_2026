FROM node:20-alpine AS build

WORKDIR /app
COPY . .

RUN npm i && npm run build

FROM node:20-alpine AS production

WORKDIR /app
COPY --from=build /app/dist .

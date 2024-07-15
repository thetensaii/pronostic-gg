FROM node:20.12.2-alpine3.18 AS base
RUN npm install -g pnpm@8.15

FROM base AS build
WORKDIR /app
COPY . .
RUN pnpm install
RUN pnpm run build


FROM base
WORKDIR /app
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/build /app
EXPOSE 8080
CMD ["node", "./bin/server.js"]
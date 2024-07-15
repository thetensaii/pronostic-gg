FROM node:20-alpine AS build

WORKDIR /app

ARG PUBLIC_BACKEND_URL
ENV VITE_PUBLIC_BACKEND_URL=${PUBLIC_BACKEND_URL}

RUN npm install -g pnpm@8.15

COPY . .

RUN pnpm install

RUN pnpm run router:generate
RUN pnpm run build

### NGINX SERVER
FROM nginx:1.27
COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
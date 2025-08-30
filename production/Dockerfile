# Stage 1: Build the React app
FROM node:lts-alpine AS build

COPY / /app

WORKDIR /app

RUN yarn install

RUN yarn build

# Stage 2: Serve with Nginx server
FROM nginx:alpine-slim
COPY --from=build /app/dist /usr/share/nginx/html
COPY production/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

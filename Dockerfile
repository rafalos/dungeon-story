FROM node:24.7.0 AS development

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]

FROM node:24.7.0 AS builder

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

ARG VITE_AUDIENCE
ARG VITE_REDIRECT_URL

ENV VITE_AUDIENCE=$VITE_AUDIENCE
ENV VITE_REDIRECT_URL=$VITE_REDIRECT_URL
RUN npm run build

FROM nginx:alpine AS production
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

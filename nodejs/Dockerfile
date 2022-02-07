FROM mhart/alpine-node:latest
ARG BUNDLER
WORKDIR /usr/src
COPY package.json yarn.lock ./
RUN yarn install
ENV NODE_ENV="production"
ENV NODE_PATH=.
COPY . .
CMD yarn prod
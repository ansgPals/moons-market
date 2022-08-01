FROM node:16
COPY . /my_app/
WORKDIR /my_app/

RUN yarn install
RUN yarn build:ssr
CMD yarn start

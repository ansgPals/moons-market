FROM node:16

WORKDIR /my_frontend/
COPY ./package.json /my_frontend/
COPY ./yarn.lock /my_frontend/
RUN yarn install

COPY . /my_frontend/
RUN yarn build:ssg
CMD yarn start

FROM node:16

WORKDIR /my_app/
COPY ./package.json /my_app/
COPY ./yarn.lock /my_app/
RUN yarn install

COPY . /my_app/
RUN yarn build:ssg
CMD yarn start

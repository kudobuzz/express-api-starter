FROM node:boron

MAINTAINER Obeng William

ENV ROOTPATH=/var/www/api PORT=5000

WORKDIR $ROOTPATH

COPY  package.json  yarn.lock  /tmp/

RUN  cd /tmp && yarn global add node-gyp &&  yarn

RUN mkdir -p $ROOTPATH && cd $ROOTPATH &&  ln -s /tmp/node_modules

COPY . $ROOTPATH

EXPOSE $PORT
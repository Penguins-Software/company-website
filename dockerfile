FROM node:alpine

ENV NODE_ENV=development
ENV PORT=7999
ENV GA_ID=UA_XXXXXX

# set the working direction
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./

COPY package-lock.json ./

# add app
COPY . ./

RUN apk add --no-cache --virtual .gyp python make g++ \
    && npm install \
    && apk del .gyp

RUN npm install

# start app
CMD ["npm", "run", "dev"]
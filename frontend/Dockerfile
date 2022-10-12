FROM node:16.13.0-alpine3.14

RUN mkdir -p /usr/app/
WORKDIR /usr/app

#copy form to 
COPY ./ ./

RUN npm install
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]



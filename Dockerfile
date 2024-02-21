# BASE IMAGE
FROM node:alpine
# Copy files to image\
WORKDIR /usr/app
COPY ./ ./
# DEPENDENCIEW
RUN npm i
# RUN NODE APP
CMD ["npm","start"]

# sudo docker build -t terrankartiktellus/node_js:1.0 .
# sudo docker run -p 5000:8081 terrankartiktellus/node_js:1.0
# running docker build -p is used to map incomming request from[ host port -> container port ] 
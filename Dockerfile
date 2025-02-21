FROM node:18-bullseye

RUN mkdir /usr/src/dabeastapp
RUN mkdir /tmp/extracted_files
COPY . /usr/src/dabeastapp
WORKDIR /usr/src/dabeastapp

RUN npm update
RUN npm install
EXPOSE 3001
EXPOSE 9229
ENTRYPOINT ["npm", "start"]

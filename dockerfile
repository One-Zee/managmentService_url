FROM node:12

# App Directory
WORKDIR /code

# ENV PORT 80

# Install dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

ENV PORT=4444

# Expose port
EXPOSE 4444

# Run app
CMD [ "node", "server.js" ]
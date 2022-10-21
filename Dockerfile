FROM ubuntu 
 RUN apt-get update -y 
 RUN apt-get install curl -y 
 RUN curl -sL https://deb.nodesource.com/setup_10.x -o nodesource_setup.sh  
 RUN bash nodesource_setup.sh 
 RUN apt-get install nodejs -y 
 RUN apt-get update -y 
 RUN apt install docker.io -y 
 # WORKDIR /app 
 COPY package*.json ./ 
 RUN npm install 
 COPY . . 
 EXPOSE 3000 
 CMD ["npm","run","dev"] 
FROM ubuntu:20.04

RUN apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install -y curl sudo
RUN curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
RUN apt-get install -y nodejs
RUN npm i -g serve

WORKDIR app
COPY build /app/
COPY .env /app/
COPY env.sh /app/

CMD ["/bin/bash", "-c", "/app/env.sh && serve -s . -l $PORT"]

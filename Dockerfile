FROM swestermire/node-vim-nginx
RUN curl -fsSLO https://get.docker.com/builds/Linux/x86_64/docker-17.04.0-ce.tgz \
  && tar xzvf docker-17.04.0-ce.tgz \
  && mv docker/docker /usr/local/bin \
  && rm -r docker docker-17.04.0-ce.tgz
# Remove the default nginx index.html
RUN rm -rf /var/www/html/index.nginx-debian.html
# Copy the contents of the dist directory over to the nginx web root
COPY /dist/* /var/www/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

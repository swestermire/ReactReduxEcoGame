FROM swestermire/node-vim-nginx
RUN mkdir /var/www /var/www/html
# Remove the default nginx index.html
RUN rm -rf /var/www/html/index.nginx-debian.html
# Copy the contents of the dist directory over to the nginx web root
COPY /dist/* /var/www/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

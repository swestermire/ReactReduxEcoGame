FROM swestermire/node-vim-nginx

RUN rm -rf /var/www/html/index.nginx-debian.html

COPY /dist/* /var/www/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

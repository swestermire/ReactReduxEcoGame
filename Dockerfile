FROM swestermire/node-vim-nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

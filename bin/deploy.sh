#!/bin/bash
if git diff-index --quite HEAD --; then
    set -o errexit; # exit on error

echo Step 1/4: Creating Production Build;
    npm run deploy: prod;

echo Step 2/4: Archiving Previous Production Image;
    now=$(date +"%m_%d_%Y);
       docker tag swestermire/ecogame-production: latest swestermire/ecogame-production:$now;
       docker push swestermire/ecogame-production:$now;

echo Step 3/4 Creating New Production Image;
    mv Dockerfile.prod.off Dockerfile;
    npm run build:prod;
    mv Dockerfile Dockerfil.prod.off;
    docker push swestermire/ecogame-production;

echo Step 4/4 Creating Elastic Beanstalk Env:

eb $1 ecogame-production

else
    echo Please commit your changes first.;
fi
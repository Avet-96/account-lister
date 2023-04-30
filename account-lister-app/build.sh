echo 'New  image tag='$(git log --pretty=format:'%h' -n 1)
npm i
npm run build
docker build --platform linux/amd64 -t account-lister/account-lister-app:$(git log --pretty=format:'%h' -n 1) .



cp -rf /ql/repo/LJMX996_jd_aaron/utils /ql/scripts/

npm install got
npm install tough-cookie
npm install axios date-fns
npm install crypto-js
npm install download

cd /ql/scripts && npm i -S png-js

apk add --no-cache build-base g++ cairo-dev pango-dev giflib-dev && cd /ql/scripts && npm install canvas --build-from-source
apk add libc6-compat
apk add nodejs-current

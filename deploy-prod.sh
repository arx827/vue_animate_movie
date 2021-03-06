# 動畫demo 部署檔

#!/usr/bin/env sh
# 當發生錯誤時終止腳本運行
set -e
# 打包
npm run build
# 移動至到打包後的dist目錄 
cd dist/production
git init
git add -A
git commit -m 'deploy-prod'
# 部署到 https://github.com/arx827/vue_animate_movie.git 分支為 gh-pages
git push -f https://github.com/arx827/vue_animate_movie.git master:gh-pages-prod
cd -
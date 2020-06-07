#!/usr/bin/env sh



# 确保脚本抛出遇到的错误


set -e



# 生成静态文件

npm run build



# 进入生成的文件夹
cd dist



git init

git add -A

git commit -m 'deploy'



git config --global user.name "huanghaobang"

git config --global user.email "997942163@qq.com"



# 填写你需要发布的仓库地址

git push -f https://github.com/huanghaobang/blog.git master



cd -

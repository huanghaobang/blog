#!/usr/bin/env sh



# ȷ���ű��׳������Ĵ���


set -e



# ���ɾ�̬�ļ�

npm run build



# �������ɵ��ļ���
cd dist



git init

git add -A

git commit -m 'deploy'



git config --global user.name "huanghaobang"

git config --global user.email "997942163@qq.com"



# ��д����Ҫ�����Ĳֿ��ַ

git push -f https://github.com/huanghaobang/blog.git master



cd -

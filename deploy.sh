#!/usr/bin/env sh

# ȷ���ű��׳������Ĵ���
set -e

# ���ɾ�̬�ļ�
npm run docs:build

# �������ɵ��ļ���
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# ��������� https://huanghaobang.github.io/blog
git push -f git@github.com:huanghaobang/blog.git master:gh-pages

cd -
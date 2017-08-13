rmdir /s /q public
mkdir public
git clone .git --branch gh-pages public
hugo
cd public && git add --all && git remote set-url origin https://github.com/epicfaace/iasf.git && git commit -m "Publishing to gh-pages" && git push origin gh-pages
git push origin gh-pages
cd ..
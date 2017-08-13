rmdir /s /q public
mkdir public
git clone .git --branch gh-pages public
hugo
cd public && git add --all && git commit -m "Publishing to gh-pages" && git push origin gh-pages
git push origin gh-pages

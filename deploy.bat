rmdir /s /q public
mkdir public



REM clone gh-pages branch from the local repo into a repo located within "public"

git clone .git --branch gh-pages public

  

REM generate

hugo

  

REM commit the changes in the clone and push them back to the local gh-pages branch    

cd public && git add --all && git commit -m "Publishing to gh-pages" && git push origin gh-pages



REM publish

git push origin gh-pages

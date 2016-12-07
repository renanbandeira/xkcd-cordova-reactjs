echo "Building js application...";
rm -R www/*
npm run build;
echo "Done building js application!";
echo "Moving builded files to www";
mv build/* www
chmod -R 777 www/*
rm  -R build
echo "Done moving built files";

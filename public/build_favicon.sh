pushd .
cd assets
convert -resize x16 -gravity center -crop 16x16+0+0 icon.png -flatten -colors 256 -background transparent favicon.ico
popd
# website
The public facing website for rust dublin


## pipeline
In general the site is generated by processing the src input folder defined in .eleventy.js and outputting it to the build directory
It takes the .md files in the src folder merges them with page.njk and places the output in the build directory
layout is referenced to page.njk in index.md
page.njk uses css, images and fonts. References htmlhead.njk and htmlfoot.njk and adds the logo image to the header
page.njk's layout is applied to index.md to make a functional html site


## usage
In order to build this site, run the following commands in a terminal.
Pull requests should be made to the public branch



```sh
git clone git@github.com:rust-dublin/website.git
cd website
npm i
npx eleventy --serve
```
@echo off

rem Create root directory
mkdir root

rem Create index.html
echo. 2> root\index.html

rem Create css directory and files
mkdir root\css
echo. 2> root\css\styles.css
echo. 2> root\css\responsive.css
mkdir root\css\components
echo. 2> root\css\components\header.css
echo. 2> root\css\components\footer.css

rem Create js directory and files
mkdir root\js
echo. 2> root\js\script.js
mkdir root\js\components
echo. 2> root\js\components\header.js
echo. 2> root\js\components\footer.js
mkdir root\js\plugins
echo. 2> root\js\plugins\jquery.min.js

rem Create images directory and files
mkdir root\images
echo. 2> root\images\logo.png
echo. 2> root\images\background.jpg

rem Create fonts directory
mkdir root\fonts
mkdir root\fonts\fontawesome

rem Create pages directory and files
mkdir root\pages
echo. 2> root\pages\about.html
echo. 2> root\pages\projects.html

rem Create includes directory and files
mkdir root\includes
echo. 2> root\includes\header.html
echo. 2> root\includes\footer.html

rem Create vendor directory
mkdir root\vendor
mkdir root\vendor\bootstrap

rem Create src directory and files
mkdir root\src
mkdir root\src\components
echo. 2> root\src\components\Header.js
echo. 2> root\src\components\Footer.js
mkdir root\src\styles
echo. 2> root\src\styles\main.scss
echo. 2> root\src\styles\_variables.scss
echo. 2> root\src\styles\_mixins.scss

rem Create tests directory and files
mkdir root\tests
mkdir root\tests\unit
echo. 2> root\tests\unit\header.test.js
echo. 2> root\tests\unit\footer.test.js
mkdir root\tests\integration
echo. 2> root\tests\integration\homepage.test.js

rem Create docs directory and files
mkdir root\docs
echo. 2> root\docs\README.md
echo. 2> root\docs\CONTRIBUTING.md
echo. 2> root\docs\API.md

rem Create other files
echo. 2> root\.gitignore
echo. 2> root\package.json
echo. 2> root\webpack.config.js
echo. 2> root\babel.config.js
echo. 2> root\jest.config.js
echo. 2> root\.eslintrc.js
echo. 2> root\.prettierrc

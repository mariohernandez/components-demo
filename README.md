# Components Demo Drupal 8 Theme
The Components Demo theme was created by [Mario Hernandez](https://twitter.com/imariohernandez) of Mediacurrent for the purpose of demonstrating how to integrate components into Drupal 8.

## Read the blog post
This theme was the result of a 3 part blog series titled [Integrating Componens with Drupal 8](https://www.mediacurrent.com/blog/integrating-components-drupal-8-part-1).

Tools used on this theme include [KSS Node](https://github.com/kss-node/kss-node) for building a living styleguide, along with Gulp, Sass, and others.

For a great walkthrough of KSS Node, check out my budy's [Zack Hawkins](https://twitter.com/ThatZackHawkins) presentation from [Drupal Camp Atlanta](https://youtu.be/q5FeyLuM5as?list=PL5rI_IBJiat3g7zivmhu-my2oPYlgRtTd).

## Getting Started
If you haven't yet, install nvm:
https://github.com/creationix/nvm

### Run the following commands from the theme directory

#### Use the right version of node with:
`nvm use`

_This command will look at your `.nvmrc` file and use the version node.js specified in it. This ensures all developers use the same version of node for consistency._

#### If that version of node isn't installed, install it with:
`nvm install`

#### Install npm dependencies with
`npm install`

_This command looks at `package.json` and installs all the npm dependencies specified in it.  Some of the dependencies include gulp, autoprefixer, gulp-sass and others._

#### Runs default task
`npm run build`

_This will run whatever the default task is._

#### Compiles Sass
`npm run compile`

_This will perform a one-time Sass compilation._

#### Runs the watch command
`npm run watch`

_This is ideal when you are doing a lot of Sass changes and you want to make sure every time a change is saved it automatically gets compiled to CSS_

#### Cleans complied directory
`npm run clean`

_This will perform a one-time deletion of all compiled files within the dist/ directory._

### Possible issues and how to fix them
You may encounter the following errors while running `npm install`:

Can not locate `gulp-cssnano`, `gulp-order` or `gulp-concat`

To fix these errors you can install those plugins individually by running `npm install gulp-cssnano`, `npm install gulp-order` or `npm install gulp-concat`


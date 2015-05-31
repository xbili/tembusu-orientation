# Tembusu Orientation Website 2015

Welcome to the Tembusu Orientation Website repository! To learn more about the purpose about this website and the timeline for the current project, head over to the [wiki](https://github.com/xbili/tembusu-orientation-2015/wiki) page. The README page is for development environment setup instructions.

This page is built on Google Web Starter kit. 

## Getting Started

### Install node.js
[Node.js](https://nodejs.org/). Follow the instructions.

### Install npm

Run from anywhere
```sh
$ sudo npm install -g npm
```

### Install Gulp

Run from anywhere
```sh
$ sudo npm install -g gulp
```

### Install other dependencies

Run from `tembusu-orientation-2015` folder
```sh
$ npm install
```

### Launch development server
```sh
$ gulp serve
```

More information about the gulp commands can be found in the [Web Starter Kit README](https://github.com/xbili/tembusu-orientation-2015/blob/master/docs/README-Web-Starter-Kit.md) and [commands.md](https://github.com/xbili/tembusu-orientation-2015/blob/master/docs/commands.md).

## Coding Style Guide

To maintain the quality of code written, please follow these two style guides:

1. [Primer HTML/CSS Style Guide](http://primercss.io/guidelines/#css)
2. [Airbnb Javascript Style Guide](https://github.com/airbnb/javascript/tree/master/es5)

Please use only ES5 JavaScript, and set your editor to **FOUR SPACES, no hard tabs**. (This is the only difference from the style guides)

## Git Workflow

The entire repository will be split into two main branches:

1. `master`
2. `development`

### Features

When working on a new feature or page, name your branch as `features/<feature name here>`. After which start a pull request into the `development` branch. 

### Issues

To fix issues opened in GitHub, name it as `issue/Issue<issue number here>-<issue description here>`.

`master` branch should only be used for deployment level code and hotfixes in time to come. 

---

Feel free to drop me an [email](mailto:xubili93@gmail.com) if there are any other questions.

Enjoy!

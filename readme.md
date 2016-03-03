# EventManager
This app is a events managers.

# Tech
* [Angular] - HTML enhanced for web apps!

# Installation

You need Gulp installed globally:

```sh
$ npm i -g gulp
```

```sh
$ git clone https://github.com/hephaistionn/EventsManager.git
$ cd EventsManager
$ npm install
$ gulp build
$ gulp serve
```

opens this page : [http://localhost:3000/]

# Tests

Tests are managed by Protractor. <br />
Protractor needs to [Java Development Kit (JDK)] for working. <br />
You need jasmine and protractor installed globally: <br />
```sh
$ npm install -g jasmine
$ npm install -g protractor
```

Launch functional tests.
```sh
$ webdriver-manager update
$ webdriver-manager start  //test server
$ protractor protractor.conf.js
```


License
----

MIT

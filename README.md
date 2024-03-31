<h1 align="center">Welcome to One Dionys - Real-Time Data Syncing! 👋 </h1>

<p align="center">A utility for synchronizing data in real-time between clients and servers, allowing web applications to respond to data changes instantly. 💖 </p>

<p align="center">
<img src="https://img.shields.io/github/contributors/onedionys/onedionys-real-time-data-syncing?style=flat-square">
<img src="https://img.shields.io/github/issues/onedionys/onedionys-real-time-data-syncing?style=flat-square">
<img src="https://img.shields.io/github/stars/onedionys/onedionys-real-time-data-syncing?style=flat-square"> 
<img src="https://img.shields.io/github/forks/onedionys/onedionys-real-time-data-syncing?style=flat-square">
<img src="https://img.shields.io/github/last-commit/onedionys/onedionys-real-time-data-syncing.svg?style=flat-square">
<img src="https://img.shields.io/github/languages/code-size/onedionys/onedionys-real-time-data-syncing?style=flat-square">
<img src="https://img.shields.io/github/license/onedionys/onedionys-real-time-data-syncing?style=flat-square">
</p>

## 💾 Requirements

* `Web Browser` - Can be used as an emulator to build applications. Example [Chrome, Firefox, Safari & Opera].
* `Internet` - Because many use CDN and to make it easier to find solutions to all problems.

## 🎯 How To Use

#### Example Syntax

```javascript
// Import the real-time-data-syncing package
const RealTimeDataSyncing = require('./src/real-time-data-syncing');

// Initialize RealTimeDataSyncing with your data source
const dataSync = new RealTimeDataSyncing('https://example.com/data');

// Listen for changes in real-time
dataSync.on('change', newData => {
    console.log('Data has changed:', newData);
});

// Start syncing data
dataSync.start();
```

#### Explanation

* `Initialization`: You first initialize the RealTimeDataSyncing instance by providing the URL of the data source.
* `Listening for Changes`: You can then listen for changes in the data using the on method. Whenever the data changes on the server, the provided callback function will be executed with the updated data.
* `Starting Sync`: Finally, you start the synchronization process by calling the start method. This will initiate the real-time data syncing process, and any changes made to the data source will be automatically reflected in your application.

#### Return Value

* The `RealTimeDataSyncing` constructor returns an instance of the RealTimeDataSyncing class, which can be used to interact with the real-time data syncing functionality.
* The `start` method does not return any value.
* The `on` method does not return any value.

## 📆 Release Date

* v1.0.0 : 17 March 2024
* v1.0.1 : 18 March 2024
* v5.0.0 : 31 March 2024

## 🧑 Author

* Facebook : <a href="https://www.facebook.com/theonedionys"> Oned Ionys</a>
* Instagram : <a href="https://www.instagram.com/onedionys/"> @onedionys</a>
* Twitter : <a href="https://twitter.com/onedionys"> @onedionys</a>
* LinkedIn :  <a href="https://www.linkedin.com/in/onedionys/"> @onedionys</a>

## 📝 License

* Copyright © 2024 One Dionys
* **One Dionys - Real-Time Data Syncing is an open source project licensed under the MIT license**

## ☕️ Suppport & Donation

Love One Dionys - Real-Time Data Syncing? Support this project by donating or sharing with others in need.

<a href="https://www.buymeacoffee.com/onedionys"><img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black"/> </a>

**Made with ❤️ One Dionys**

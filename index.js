const notifier = require("node-notifier");

// start time

setInterval(() => {
    notifier.notify({
      message:  new Date() + "",
      sound: true,
    });
}, 1000*60);

const notifier = require("node-notifier");

// start time
let interval = 1/60;
const repeat = () => {
  notifier.notify({
    message:  new Date() + "",
    sound: true,
    actions:[1, 10,30],
  },  function (error, response, metadata) {
    interval=new Number(response)!=NaN?response:1/6;
   console.log("set interval",interval,"min");
    setTimeout(repeat, interval*60*1000);
  });

}
setTimeout(repeat, interval*60*1000);
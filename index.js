global.botToken = "6638597283:AAGLueRSFJ_hiQcqF9io705zsL98iwBm9YA"
require('./app')

process.on("unhandledRejection", (reason) => {
  console.error("\x1b[31m%s\x1b[0m", `Unhandled promise rejection: ${reason}`);
});

process.on("uncaughtException", function (err) {
  console.error(err);
});

/**
 * This is the main Node.js server script for your project
 * Check out the two endpoints this back-end API provides in fastify.get and fastify.post below
 */
const path = require("path");
const fastify = require("fastify")({
  logger: false,
});

fastify.register(require("@fastify/static"), {
  root: path.join(__dirname, "public"),
  prefix: "/",
});

fastify.register(require("@fastify/view"), {
  engine: {
    handlebars: require("handlebars"),
  },
});

const seo = require("./src/seo.json");
if (seo.url === "glitch-default") {
  seo.url = `https://${process.env.PROJECT_DOMAIN}.glitch.me`;
}

fastify.get("/", function (request, reply) {
  // Ваш новый код здесь
  console.log("Received HTTP GET request");

  // Отправка ответа с сообщением "HELLO"
  reply.send('HELLO');
});
const PORT = process.env.PORT || 3000;

fastify.listen(
  { port: PORT, host: "0.0.0.0" },
  function (err, address) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Your app is listening on ${address}`);
  }
);




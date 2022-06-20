const fastify = require("fastify")({
    logger: false,
});
fastify.get("/fillbuffer", async (request, reply) => {
    reply.type("application/json").code(200);
    return {
        result: `{result: “Hello world”}`,
    };
});
fastify.listen(3008, (err, address) => {
    console.log("server listening on port 3008")
    if (err) throw err;
});
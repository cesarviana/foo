import ampq from "amqplib/callback_api";

ampq.connect("amqp://guest:guest@localhost:5672/", (err, connection) => {
  if (err) throw err;
  connection.createChannel((err1, channel) => {
    if (err1) throw err1;
    const queue = "tutorial1_queue";
    channel.assertQueue(queue, { durable: false });
    channel.consume(queue, (msg) => {
      console.log(" [x] Received %s", msg?.content.toString());
    }, {
      noAck: true
    });
  });
});

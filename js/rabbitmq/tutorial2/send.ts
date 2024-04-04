import ampq from "amqplib/callback_api";

ampq.connect("amqp://guest:guest@localhost:5672/", (err, connection) => {
  if (err) throw err;
  connection.createChannel((err1, channel) => {
    if (err1) throw err1;
    const queue = "tutorial1_queue";
    channel.assertQueue(queue, { durable: true });
    let msg = "";
    for (let i = 0; i < 5; i++) {
      msg = msg + ".";
      channel.sendToQueue(queue, Buffer.from(msg), {
        persistent: true
      });
      console.log(" [x] Sent %s", msg);
    }
  });
});

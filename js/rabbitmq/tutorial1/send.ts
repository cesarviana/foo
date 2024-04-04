import ampq from "amqplib/callback_api";

ampq.connect("amqp://guest:guest@localhost:5672/", (err, connection) => {
  if (err) throw err;
  connection.createChannel((err1, channel) => {
    if (err1) throw err1;
    const queue = 'tutorial1_queue';
    const msg = 'mymsg';
    channel.assertQueue(queue, { durable: false });
    channel.sendToQueue(queue, Buffer.from(msg));
    console.log(" [x] Sent %s", msg);
  })
});

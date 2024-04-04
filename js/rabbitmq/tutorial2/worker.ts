import ampq from "amqplib/callback_api";

ampq.connect("amqp://guest:guest@localhost:5672/", (err, connection) => {
  if (err) throw err;
  connection.createChannel((err1, channel) => {
    if (err1) throw err1;
    const queue = "tutorial1_queue";
    channel.assertQueue(queue, { durable: true });
    channel.consume(queue, function(msg) {
      const secs = msg!.content.toString().split('.').length - 1;
    
      console.log(" [x] Received %s", msg!.content.toString());
      setTimeout(function() {
        console.log(" [x] Done", secs);
      }, secs * 1000);
    }, {
      // automatic acknowledgment mode,
      // see /docs/confirms for details
      noAck: false
    });
  });
});

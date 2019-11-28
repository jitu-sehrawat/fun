const kafka = require("kafka-node");
const Consumer = kafka.Consumer;
const Offset = kafka.Offset;
const Client = kafka.KafkaClient;
const topic = "MSILAGL";
const counter = 0;

const client = new Client({ kafkaHost: "103.233.79.237:9093" });
const topics = [{ topic: topic, partition: 1 }];
const options = {
  autoCommit: false,
  fetchMaxWaitMs: 1000,
  fetchMaxBytes: 1024 * 1024
};

const consumer = new Consumer(client, topics, options);
const offset = new Offset(client);

consumer.on("message", function(message) {
  console.log(message);
  console.log(counter++);
});

consumer.on("error", function(err) {
  console.log("error", err);
});

/*
 * If consumer get `offsetOutOfRange` event, fetch data from the smallest(oldest) offset
 */
consumer.on("offsetOutOfRange", function(topic) {
  topic.maxNum = 2;
  offset.fetch([topic], function(err, offsets) {
    if (err) {
      return console.error(err);
    }
    const min = Math.min.apply(null, offsets[topic.topic][topic.partition]);
    consumer.setOffset(topic.topic, topic.partition, min);
  });
});

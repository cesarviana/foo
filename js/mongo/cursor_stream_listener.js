changeStream.close();

const pipeline = [
  {
    $match: {
      test: "bbb",
    },
  },
];

let changeStream = db.questionnaire.watch(
  [] /*{ fullDocument: 'updateLookup' }*/
);

while (true) {
  if (changeStream.hasNext()) {
    const change = changeStream.next();
    printjson(change);
  }
}

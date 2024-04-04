import pkg from "lodash";
const { isNil, cloneDeep } = pkg;

const block = {
  maturityModelId: "X",
};
const history = [
  {
    changedProperties: {
      finalValue: 3,
    },
  },
  {
    changedProperties: {},
    actionType: "RESPOND",
  },
  {
    changedProperties: {
      finalValue: 5,
      maturityModelId: "Y",
    },
  },
  {
    changedProperties: {
      finalValue: 1,
    },
  },
  {
    changedProperties: {},
    actionType: "RESPOND",
  },
  {
    changedProperties: {
      finalValue: 4,
    },
  },
  {
    changedProperties: {
      finalValue: 3,
      maturityModelId: "Z",
    },
  },
  {
    changedProperties: {},
    actionType: "RESPOND",
  },
  {
    changedProperties: {
      finalValue: 1,
    },
  },
];

function test(history) {
  if (history.length === 0) {
    return [];
  }

  history = cloneDeep(history);

  if (isNil(history[0].changedProperties.maturityModelId)) {
    history[0].changedProperties.maturityModelId = block.maturityModelId;
    history[0].changedProperties.changedModel = false;
  } else {
    history[0].changedProperties.changedModel =
      block.maturityModelId !== history[0].changedProperties.maturityModelId;
  }

  for (let i = 0; i < history.length - 1; i++) {
    const current = history[i];
    const next = history[i + 1];

    if (isNil(next.changedProperties.maturityModelId)) {
      next.changedProperties.maturityModelId =
        current.changedProperties.maturityModelId;
      next.changedProperties.changedModel = false;
    } else {
      next.changedProperties.changedModel = true;
    }
  }

  return history;
}

const historyBefore = cloneDeep(history);
const historyAfter = test(historyBefore);

console.log("History before", historyBefore);
console.log("History after", historyAfter);

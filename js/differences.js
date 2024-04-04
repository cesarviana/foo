import { isEqual } from "lodash";

function findObjectDifferences(obj1, obj2) {
  const differences = {};

  // Check properties in obj1
  for (const key in obj1) {
    if (obj1.hasOwnProperty(key) && !isEqual(obj1[key], obj2[key])) {
      differences[key] = { oldValue: obj1[key], newValue: obj2[key] };
    }
  }

  // Check properties in obj2
  for (const key in obj2) {
    if (obj2.hasOwnProperty(key) && !isEqual(obj1[key], obj2[key])) {
      differences[key] = { oldValue: obj1[key], newValue: obj2[key] };
    }
  }

  return differences;
}

const obj2 = {
  createdAt: "2024-02-01T10:04:51.242Z",
  updatedAt: "2024-02-01T10:04:51.242Z",
  org: "5b224b4b01e6a32ae17a7134",
  createdBy: "5b226d4534a563a31e86cef9",
  recipient: "5b22658534a563a31e86ceed",
  respondedAt: null,
  questionnaireRequest: "638f89391199780fcdf66687",
  questionnaire: "333af602e54b780cf3e82711",
  object: "5f04ea76a54eaf379037e390",
  block: {
    id: "WRNms",
    blockType: "questionnaire-control",
    content: {
      altControlId: null,
      conditionId: null,
      maturityModelId: "614af602e54b780cf3e827da",
      controlId: "5b224b4d01e6a32ae17a719c",
      features: {
        explanation: { required: false, requiredValues: [] },
        evidence: { required: false, requiredValues: [] },
        naAllowed: false,
      },
      lang: "en_GB",
      langAlt: ["de_DE", "en_US"],
      title: {
        base: "Application Governance Tasks",
        en_US: "Application Governance Tasks",
        de_DE: "Aufgaben des Applikationsmanagements",
      },
      question: {
        base: "> The Application Owner shall be responsible for operating applications according to defined performance indicators.\n\nAre you complying with the control?",
        en_US:
          "> The Application Owner shall be responsible for operating applications according to defined performance indicators.\n\nAre you all complying with the control?",
        de_DE:
          "> Der Applikationsverantwortliche ist verantwortlich für den Betrieb von Applikationen entsprechend der definierten Leistungsindikatoren.\n\nHalten Sie sich an die Control?",
      },
      targetValue: 2,
      targetOption: "AAAAB",
      options: [
        {
          id: "AAAAA",
          text: { base: "First", en_US: "First", de_DE: "First" },
          maturityLevel: 1,
          maturityRating: 1,
        },
        {
          id: "AAAAB",
          text: { base: "Second", en_US: "Second", de_DE: "Second" },
          maturityLevel: 2,
          maturityRating: 2,
        },
        {
          id: "AAAAC",
          text: { base: "Third", en_US: "Third", de_DE: "Third" },
          maturityLevel: 3,
          maturityRating: 3,
        },
      ],
      itemId: "C0001",
      targetLevel: 2,
      _cache: {
        control: {
          topic: "625eb0cd6306161c9f158a1e",
          subTopic: "625eb0cde91a7c1c9fb4987e",
          standards: [
            { standard: "BSI Grundschutz", refs: ["B 1.1", "B 1.9", "B 5.25"] },
            { standard: "COBIT 4.1", refs: ["DS1", "DS1", "DS1"] },
            { standard: "COBIT 5", refs: ["APO09"] },
            { standard: "FIN-FSA OpRisk", refs: ["6.1"] },
            { standard: "ISO/IEC 27001:2005", refs: ["A.10"] },
            { standard: "ISO/IEC 27001:2013", refs: ["A.12"] },
            { standard: "MAS TRMG", refs: ["6.4", "6.4", "6.4", "6.4", "7.0"] },
          ],
          libId: "5b224b4b01e6a32ae17a7134|1",
          lsFromLibId: "55d4ab6d9d3fbfcdb0f4f79d|1",
        },
      },
      custom: null,
    },
    _cache: {
      startErrors: [],
      startHash: "87c5fb47222e23a1ba3103dbe83d13318159fc19",
      identificationHash: "6002a0ded5967612ec8f8a2474d07b4a636257b6",
    },
    headings: [
      {
        blockId: "kjasx",
        headingLevel: "h1",
        title: {
          base: "en_GB: Example block (H1)",
          de_DE: "de_DE: Example block (H1)",
          en_US: "en_US: Example block (H1)",
        },
      },
      {
        blockId: "kjasz",
        headingLevel: "h2",
        title: {
          base: "en_GB: Example block (h2)",
          de_DE: "de_DE: Example block (h2)",
          en_US: "en_US: Example block (h2)",
        },
      },
    ],
    orderId: 7,
  },
  content: {
    option: null,
    optionValue: null,
    optionLevel: null,
    deviationValue: null,
    deviationNormalized: null,
    features: { explanation: null, evidence: null },
    custom: null,
  },
  commentChannels: [],
  state: "IN_PROGRESS",
  visible: true,
  _cache: {
    questionnaire: { authReadUsers: ["ALL"] },
    submissionErrors: [],
    submissionHash: "",
    submissionValid: false,
  },
  storedResponse: null,
  sourceResponse: null,
  authReadUsers: [],
  authModifyUsers: [],
};

const obj1 = {
  org: "5b224b4b01e6a32ae17a7134",
  createdBy: "5b226d4534a563a31e86cef9",
  createdAt: "2024-02-01T10:04:51.242Z",
  updatedAt: "2024-02-01T10:04:51.242Z",
  recipient: "5b22658534a563a31e86ceed",
  respondedAt: null,
  questionnaireRequest: "638f89391199780fcdf66687",
  questionnaire: "333af602e54b780cf3e82711",
  object: "5f04ea76a54eaf379037e390",
  block: {
    id: "WRNms",
    blockType: "questionnaire-control",
    content: {
      altControlId: null,
      conditionId: null,
      maturityModelId: "614af602e54b780cf3e827da",
      controlId: "5b224b4d01e6a32ae17a719c",
      features: {
        explanation: { required: false, requiredValues: [] },
        evidence: { required: false, requiredValues: [] },
        naAllowed: false,
      },
      lang: "en_GB",
      langAlt: ["de_DE", "en_US"],
      title: {
        base: "Application Governance Tasks",
        en_US: "Application Governance Tasks",
        de_DE: "Aufgaben des Applikationsmanagements",
      },
      question: {
        base: "> The Application Owner shall be responsible for operating applications according to defined performance indicators.\n\nAre you complying with the control?",
        en_US:
          "> The Application Owner shall be responsible for operating applications according to defined performance indicators.\n\nAre you all complying with the control?",
        de_DE:
          "> Der Applikationsverantwortliche ist verantwortlich für den Betrieb von Applikationen entsprechend der definierten Leistungsindikatoren.\n\nHalten Sie sich an die Control?",
      },
      targetValue: 2,
      targetOption: "AAAAB",
      options: [
        {
          id: "AAAAA",
          text: { base: "First", en_US: "First", de_DE: "First" },
          maturityLevel: 1,
          maturityRating: 1,
        },
        {
          id: "AAAAB",
          text: { base: "Second", en_US: "Second", de_DE: "Second" },
          maturityLevel: 2,
          maturityRating: 2,
        },
        {
          id: "AAAAC",
          text: { base: "Third", en_US: "Third", de_DE: "Third" },
          maturityLevel: 3,
          maturityRating: 3,
        },
      ],
      itemId: "C0001",
      targetLevel: 2,
      _cache: {
        control: {
          topic: "625eb0cd6306161c9f158a1e",
          subTopic: "625eb0cde91a7c1c9fb4987e",
          standards: [
            { standard: "BSI Grundschutz", refs: ["B 1.1", "B 1.9", "B 5.25"] },
            { standard: "COBIT 4.1", refs: ["DS1", "DS1", "DS1"] },
            { standard: "COBIT 5", refs: ["APO09"] },
            { standard: "FIN-FSA OpRisk", refs: ["6.1"] },
            { standard: "ISO/IEC 27001:2005", refs: ["A.10"] },
            { standard: "ISO/IEC 27001:2013", refs: ["A.12"] },
            { standard: "MAS TRMG", refs: ["6.4", "6.4", "6.4", "6.4", "7.0"] },
          ],
          libId: "5b224b4b01e6a32ae17a7134|1",
          lsFromLibId: "55d4ab6d9d3fbfcdb0f4f79d|1",
        },
      },
      custom: null,
    },
    _cache: {
      startErrors: [],
      startHash: "87c5fb47222e23a1ba3103dbe83d13318159fc19",
      identificationHash: "6002a0ded5967612ec8f8a2474d07b4a636257b6",
    },
    headings: [
      {
        blockId: "kjasx",
        headingLevel: "h1",
        title: {
          base: "en_GB: Example block (H1)",
          de_DE: "de_DE: Example block (H1)",
          en_US: "en_US: Example block (H1)",
        },
      },
      {
        blockId: "kjasz",
        headingLevel: "h2",
        title: {
          base: "en_GB: Example block (h2)",
          de_DE: "de_DE: Example block (h2)",
          en_US: "en_US: Example block (h2)",
        },
      },
    ],
    orderId: 7,
  },
  content: {
    option: null,
    optionValue: null,
    optionLevel: null,
    deviationValue: null,
    deviationNormalized: null,
    features: { explanation: null, evidence: null },
    custom: null,
  },
  commentChannels: [],
  state: "IN_PROGRESS",
  visible: true,
  _cache: {
    questionnaire: { authReadUsers: ["ALL"] },
    submissionErrors: [],
    submissionHash: "",
    submissionValid: false,
  },
  finalValue: null,
  finalLevel: null,
  finalDeviation: null,
  finalOption: null,
  finalMaturityModel: "614af602e54b780cf3e827da",
  finalTargetValue: 2,
  storedResponse: null,
  sourceResponse: null,
  suggestions: [],
  authReadUsers: [],
  authModifyUsers: [],
};

const diff = findObjectDifferences(obj1, obj2);
console.log(diff);

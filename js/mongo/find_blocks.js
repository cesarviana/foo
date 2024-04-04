db.questionnaire.aggregate([
  {
      $match: {
          blocksContent: { $ne: {} }
      }
  },
  {
      $project: {
          blocksContent: { $objectToArray: '$blocksContent' }
      }  
  },
  {
      $unwind: '$blocksContent'
  },
  {
      $project: {
          block: '$blocksContent.v'
      }
  },
  {
      $replaceRoot: { newRoot: '$block' }
  },
  {
      $match: {
          'blockType': 'questionnaire-control'
      }
  }
])
import common from './definitions/common';
const schema = {
    'definitions': {
        'common': common,
      "sat_subject": {
          type: "number",
          min: 0,
          max: 800
      },
      "act_subject": {
        type: "number",
        min: 0,
        max: 36
       }
    },
    title: 'Registration',
    type: 'object',
    required: ['title'],
    properties: {
        hs_name: {
            type: 'string',
            title: 'High school name'
        },
        hs_address: {
            "$ref": "#/definitions/common/address"
        },
        counselor: {
            type: 'object',
            title: 'Guidance counselor info',
            properties: {
                'name': {"$ref": "#/definitions/common/name"},
                'email': { type: 'string', format: 'email', title: 'Guidance counselor email' }
                // todo don't duplicate name definition here.
            }
        },
        hs_gpa: {
            title: 'High School GPA (/100 or /4.0 scale)',
            type: "number",
            min: 0
            // todo: add min and max here.
        },
        class_rank: { // todo :make this optional and others required.
            // todo: make max of rank be totalNum.
            type: 'object',
            properties: {
                'rank': { type: 'string', title: 'Class rank: ', min: 0},
                'totalNum': {type: 'number', title: 'out of ', min: 0} 
            }
        },
        sat_scores: { // todo: old sat, new sat? also do we really need this if we have a score report?
            type: 'object',
            title: 'SAT scores',
            properties: {
                'reading': { "$ref": "#/definitions/sat_subject" },
                'math': { '$ref': '#/definitions/sat_subject' },
                'writing': { '$ref': '#/definitions/sat_subject' },
                'essay': { '$ref': '#/definitions/sat_subject' }, // todo fix
                'total': { type: 'number', min: 0, max: 1600 }
            }
        },
        act_scores: { // todo: old sat, new sat? also do we really need this if we have a score report?
            type: 'object',
            title: 'ACT scores',
            properties: {
                'reading': { '$ref': '#/definitions/act_subject' },
                'math': { '$ref': '#/definitions/act_subject' },
                'science': { '$ref': '#/definitions/act_subject' },
                'writing': { '$ref': '#/definitions/act_subject' }, //todo make optional
                'composite': { '$ref': '#/definitions/act_subject' }
            }
        },
        ap_exams: {
            type: 'array',
            title: 'AP Exams Taken',
            items: { // todo: make formatting more concise?
                type: 'object',
                title: 'AP exam',
                properties: {
                    'Exam name': {type: 'string'},
                    'Score': {type: 'number', min: 0, max: 5 }
                    // todo: do we want date taken?
                    // todo: do we want to choose from a list of ap exams?
                }
            }
        },
        phone: {
          type: 'object',
          title: '',
          properties: {
            'home': {type: 'string', title: 'Home Phone'},
            'cell': {type: 'string', title: 'Cell Phone'}
          }
        },
        descent: {
          type: 'string',
          title: 'Claim to Indian Descent',
          enum: ['Maternal grandparents', 'Paternal grandparents'],
          enumNames: ['Maternal grandparents', 'Paternal grandparents']
        },
        where: {
          type: 'string',
          title: 'Where did you hear about IASF from?',
          enum: ['Facebook', 'Internet search', 'High school', 'Friends', 'Family', 'Other'],
          enumNames: ['Facebook', 'Internet search', 'High school', 'Friends', 'Family', 'Other']
        },
        address: { '$ref': '#/definitions/common/address' },
        parentName: { '$ref': '#/definitions/common/name' }
      }
  };
  
const uiSchema =  {
    classNames: 'formPage formPageSchoolInfo',
    counselor: {
        name: {
            'classNames': 'threeColumn'
        }
    }
};

const metadata = {
    id: "1",
    title: "School info",
    description: "School information..."
};

export default {
  'schema': schema,
  'uiSchema': uiSchema,
  'metadata': metadata
};
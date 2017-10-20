const schema = {
    "definitions": {
      "address": {
        "type": "object",
        "properties": {
          "street_address": { "type": "string" },
          "city":           { "type": "string" },
          "state":          { "type": "string" },
          "zip_code":          { "type": "string" },
          "country":          { "type": "string" }
        },
        "required": ["street_address", "city", "state"]
      }
    },
    title: 'Registration',
    type: 'object',
    required: ['title'],
    properties: {
        name: { "$ref": "#/definitions/name" },
        school_name: {
            type: 'string',
            title: 'High school name'
        },
        school_address: {
            "$ref": "#/definitions/address"
        },
        counselor: {
            type: 'object',
            title: 'Guidance counselor info',
            properties: {
                'name': {"$ref": "#/definitions/name"},
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
        sat_scores: { // todo: old sat, new sat?
            type: 'object',
            title: 'SAT scores',
            properties: {
                //'Reading': { type: 'number', title: }
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
          type: "string",
          title: "Claim to Indian Descent",
          enum: ["Maternal grandparents", "Paternal grandparents"],
          enumNames: ["Maternal grandparents", "Paternal grandparents"]
        },
        where: {
          type: "string",
          title: "Where did you hear about IASF from?",
          enum: ["Facebook", "Internet search", "High school", "Friends", "Family", "Other"],
          enumNames: ["Facebook", "Internet search", "High school", "Friends", "Family", "Other"]
        },
        address: { "$ref": "#/definitions/address" },
        parentName: { "$ref": "#/definitions/name" }
      }
  };
  
  
const uiSchema =  {
    classNames: 'formPage formPageSchoolInfo',
    counselor: {
        email: {
            'ui:title': 'Guidance counselor name'
        }
    }
};


export default {
  "schema": schema,
  "uiSchema": uiSchema
};
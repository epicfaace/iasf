import common from './definitions/common';
const schema = {
    "definitions": {
      "common": common
    },
    title: 'Registration',
    type: 'object',
    required: ['title'],
    properties: {
        name: { "$ref": "#/definitions/common/name" },
        email: {type: 'string', format: 'email', title: "Email Address"},
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
        address: { "$ref": "#/definitions/common/address" },
        parentName: { "$ref": "#/definitions/common/name" }
      }
  };
  
  
const uiSchema =  {
  
  classNames: 'formPage formPageUserInfo',
    name: {
      classNames: 'threeColumn',
      /*first: {
        classNames: 'col-xs-12 col-sm-4'
      },
      middle: {
        classNames: 'col-xs-12 col-sm-4'
      },
      last: {
        classNames: 'col-xs-12 col-sm-4'
      },*/
    },
    parentName: {
      classNames: 'threeColumn'
    },
    address: {
      classNames: 'threeColumn',
      street_address: {
        classNames: 'col-xs-12 col-sm-6'
      }
    },
    descent: {
      classNames: 'col-xs-12 col-sm-6'
    },
    where: {
      classNames: 'col-xs-12 col-sm-6'
    }

  };

const metadata = {
  id: "0",
  title: "User info",
  description: "User information..."
};

export default {
  "schema": schema,
  "uiSchema": uiSchema,
  'metadata': metadata
};
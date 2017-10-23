import common from './definitions/common';
const schema = {
    "definitions": {
      "common": common
    },
    title: 'User Information',
    type: 'object',
    required: ['title', 'name', 'email', 'phone', 'descent', 'where_heard_from', 'home_address', 'parent_name'],
    properties: {
        name: { "$ref": "#/definitions/common/name" },
        email: {type: 'string', format: 'email', title: "Email Address"},
        phone: {
          type: 'object',
          title: '',
          properties: {
            'home': {type: 'string', title: 'Home Phone'},
            'cell': {type: 'string', title: 'Cell Phone'}
            // todo: add required validation here.
          }
        },
        descent: {
          type: "string",
          title: "Claim to Indian Descent",
          enum: ["Maternal grandparents", "Paternal grandparents"],
          enumNames: ["Maternal grandparents", "Paternal grandparents"]
        },
        where_heard_from: {
          type: "string",
          title: "Where did you hear about IASF from?",
          enum: ["Facebook", "Internet search", "High school", "Friends", "Family", "Other"],
          enumNames: ["Facebook", "Internet search", "High school", "Friends", "Family", "Other"]
        },
        home_address: { "$ref": "#/definitions/common/address" },
        parent_name: { "$ref": "#/definitions/common/name" }
      }
  };
  
  
const uiSchema =  {
  
  classNames: 'formPage formPageUserInfo',
    name: {
      classNames: 'threeColumn'
    },
    descent: {
      classNames: 'halfWidth'
    },
    where_heard_from: {
      classNames: 'halfWidth'
    },
    home_address: {
      classNames: 'threeColumn',
      'ui-title': 'Home Address',
      street_address: {
        classNames: 'col-xs-12 col-sm-6'
      }
    },
    parent_name: {
      classNames: 'threeColumn',
      'ui:title': 'Parent Name'
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
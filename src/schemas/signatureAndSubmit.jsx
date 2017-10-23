import common from './definitions/common';
const schema = {
    "definitions": {
      "common": common
    },
    title: 'Signature Information',
    type: 'object',
    required: [],
    properties: {
        // todo: add text here.
        name: {type: 'string', title: "Full Name"},
        date: {type: 'string', type: 'Date'}
      }
  };
  
  
const uiSchema =  {
  
  classNames: 'formPage formPageSignatureAndSubmit'

  };

const metadata = {
  id: "5",
  title: "Signature and Submit",
  description: "Signature information..."
};

export default {
  "schema": schema,
  "uiSchema": uiSchema,
  'metadata': metadata
};
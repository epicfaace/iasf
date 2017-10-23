import common from './definitions/common';
const schema = {
    "definitions": {
      "common": common
    },
    title: 'Essay Information',
    type: 'object',
    required: [],
    properties: {

    }
};
  
  
const uiSchema =  {
  
  classNames: 'formPage formPageEssayInfo',
    

  };

const metadata = {
  id: "3",
  title: "Essay",
  description: "Essay information..."
};

export default {
  "schema": schema,
  "uiSchema": uiSchema,
  'metadata': metadata
};
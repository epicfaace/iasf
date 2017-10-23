import common from './definitions/common';
const schema = {
    "definitions": {
      "common": common
    },
    title: 'Financial Aid Information',
    type: 'object',
    required: [],
    properties: {
        
      }
  };
  
  
const uiSchema =  {
  
  classNames: 'formPage formPageFinancialInfo',
    

  };

const metadata = {
  id: "4",
  title: "Financial Aid",
  description: "Financial aid information..."
};

export default {
  "schema": schema,
  "uiSchema": uiSchema,
  'metadata': metadata
};
import common from './definitions/common';
const schema = {
    "definitions": {
      "common": common
    },
    title: 'Activities Information',
    type: 'object',
    required: [],
    properties: {
    }
  };
  
  
const uiSchema =  {
  
  classNames: 'formPage formPageActivitiesInfo',
    

  };

const metadata = {
  id: "2",
  title: "Activites information",
  description: "Information about your extracurricular activites and work experiences."
};

export default {
  "schema": schema,
  "uiSchema": uiSchema,
  'metadata': metadata
};
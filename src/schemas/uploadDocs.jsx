import common from './definitions/common';
const schema = {
    "definitions": {
      "common": common
    },
    title: 'Upload page',
    type: 'object',
    required: [],
    properties: {
      }
  };
  
  
const uiSchema =  {
  
  classNames: 'formPage formPageUploadDocs'

  };

const metadata = {
  id: "6",
  title: "Upload Transcript, Scores, and Resume",
  description: "Upload..."
};

export default {
  "schema": schema,
  "uiSchema": uiSchema,
  'metadata': metadata
};
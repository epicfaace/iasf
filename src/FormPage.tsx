import * as React from 'react';
import './FormPage.css';

import Form from 'react-jsonschema-form';
/*
const schema2 = {
  title: 'Todo',
  type: 'object',
  required: ['title'],
  properties: {
    title: {type: 'string', title: 'Title', default: 'A new task'},
    done: {type: 'boolean', title: 'Done?', default: false},
    file: {  type: "string",
    format: "data-url"}
  }
};*/

const PhoneWidget = (props: any) => {
  return (
    <input
      type="tel"
      className="inputPhone"
      value={props.value}
      required={props.required}
      onChange={(event) => props.onChange(event.target.value)}
    />
  );
};

const widgets = {
  phoneWidget: PhoneWidget
};

const fields = {
};

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
    },
    "name": {
      type: 'object',
      title: '',
      properties: {
        'first': {type: 'string', title: 'First Name'},
        'middle': {type: 'string', title: 'Middle Name'},
        'last': {type: 'string', title: 'Last Name'}
      }
    }
  },
  title: 'Registration',
  type: 'object',
  required: ['title'],
  properties: {
      name: { "$ref": "#/definitions/name" },
      email: {type: 'string', format: 'email'},
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
  classNames: 'mainForm container-fluid',
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
      classNames: 'flexColumn',
      street_address: {
        classNames: 'col-padding-0 col-xs-12'
      }
    },
    descent: {
      classNames: 'col-xs-12 col-sm-6'
    }

  };

const formData = {
    title: "First task",
    done: true
};

const log = (type: {}) => console.log.bind(console, type);

class FormPage extends React.Component {
  render() {
    return (
        <div className="App">
            <h1>IASF application</h1>
            <Form
              schema={schema}
              uiSchema={uiSchema}
              formData={formData}
              widgets={widgets}
              fields={fields}
              onChange={log('changed')}
              onSubmit={log('submitted')}
              onError={log('errors')}
            />
        </div>
      );
  }
}

export default FormPage;

/*
render((
  <Form schema={schema}
        onChange={log('changed')}
        onSubmit={log('submitted')}
        onError={log('errors')} />
), document.getElementById('app'));

*/
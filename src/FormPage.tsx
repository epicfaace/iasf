import * as React from 'react';
import './FormPage.css';
import * as userInfo from './schemas/userInfo';
import * as schoolInfo from './schemas/schoolInfo';

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

const formData = {
  title: 'First task',
  done: true
};

const schema = [userInfo.default.schema, schoolInfo.default.schema];
const uiSchema = [userInfo.default.uiSchema, schoolInfo.default.uiSchema];

const log = (type: {}) => console.log.bind(console, type);

class FormPage extends React.Component {
  render() {
    return (
        <div className="App">
            <h1>IASF application</h1>
            <Form
              schema={schema[1]}
              uiSchema={uiSchema[1]}
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
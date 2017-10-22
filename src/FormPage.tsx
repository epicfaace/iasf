/// <reference path="./interfaces.d.ts"/>
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

const steps = [
  userInfo.default,
  schoolInfo.default
];

const log = (type: {}) => console.log.bind(console, type);

class FormPage extends React.Component<IFormPageProps, IFormPageState> {
  constructor(props: IFormPageProps) {
    super(props);
    this.state = {step: 0};
  }

  onTabToggle(index: number) {
    this.setState({step: index});
  }

  render() {
    return (
        <div className="App">
            <h1>IASF application</h1>
            <ul className="nav nav-pills nav-stacked col-xs-12 col-sm-4 col-md-3">
              {steps.map((obj, index) =>
                <li className={(index == 0 ? 'active': '')} key={obj.metadata.id} onClick={() => this.onTabToggle(index)}>
                  <a data-toggle='tab'>
                  {index + 1}. {obj.metadata.title}
                  </a>
                </li>
              )}
            </ul>
            <div className="col-xs-12 col-sm-8 col-md-6">
              <Form
                schema={steps[this.state.step].schema}
                uiSchema={steps[this.state.step].uiSchema}
                formData={formData}
                widgets={widgets}
                fields={fields}
                onChange={log('changed')}
                onSubmit={log('submitted')}
                onError={log('errors')}
              />
            </div>
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
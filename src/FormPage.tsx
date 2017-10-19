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
    }
  },
  title: 'Balavihar Registration',
  type: 'object',
  required: ['title'],
  properties: {
    members: {
      title: 'Members',
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: {
            type: 'object',
            title: '',
            properties: {
              'first': {type: 'string', title: 'First Name'},
              'middle': {type: 'string', title: 'Middle Name'},
              'last': {type: 'string', title: 'Last Name'}
            }
          },
          phone: {
            type: 'object',
            title: '',
            properties: {
              'home': {type: 'string', title: 'Home Phone'},
              'cell': {type: 'string', title: 'Cell Phone'},
              'work': {type: 'string', title: 'Office Phone'}
            }
          },
          email: {type: 'string', format: 'email'},
          profession: {
            type: "string",
            title: "Profession",
            enum: ["Account Manager","Alternative Medicine","Architecture","Art & Fabrics","Biostatistician",
                  "Clinical Lab Scientist","Clinical Research","Dance & Fine Arts","Dentist",
                  "Engineering - Biomedical","Engineering - Chemical","Engineering - Civil",
                  "Engineering - Electrical","Engineering - Electronics", "Engineering - Environmental",
                  "Engineering - Industrial","Engineering - Management","Engineering - Mechanical",
                  "Engineering - Metallurgy","Engineering - Other","Entreprenuer - Construction",
                  "Entreprenuer - Education","Entreprenuer - Electronics","Entreprenuer - Food Industry",
                  "Entreprenuer - Hospitality Industry","Entreprenuer - Import & Export","Entreprenuer - Other",
                  "Entreprenuer - Real Estate","Entreprenuer - Software Industry","Finance - Accounting",
                  "Finance - CPA","Finance - Mortgage","Finance - Other","Finance - Personal Banker",
                  "Finance - Personal Finance","Finance - Tax Consulting","Finance - Wealth Management",
                  "Front Office Management","Government","Graduate Student","Histotechnologist","Homemaker",
                  "Hotel Management","Human Resources","Insurance Agents","Journalism","Lab Associate","Lawyer",
                  "Medical Assistant","Network Engineer","Nurse","Pharmacist","Physician - Cardiology",
                  "Physician - Internal Medicine","Physician - Nephrologist","Physician - Neurosurgeon",
                  "Physician - OB/GYN","Physician - Oncology","Physician - Ophthalmologists",
                  "Physician - Optometrist","Physician - Orthopedics","Physician - Other","Physician - Pediatrician",
                  "Professor - College","Project Management","Psychotherapist","Regulatory Affairs","Rehabilitation",
                  "Research","Sales & Marketing","Social Work","Software - Big Data/Statistics","Software - Business/System Analyst",
                  "Software - Cloud (AWS)","Software - Cloud (others)","Software - Database","Software - Development",
                  "Software - iOS/Android Development","Software - Management/Executive","Software - Other","Software - Testing",
                  "Software - UI/UX Designer","Teacher - Elementary School","Teacher - High School","Teacher - Middle School",
                  "Teacher - Other","Teacher - PreSchool","Teacher - Private Tutoring"]
            // enumNames: ["one", "two", "three"]
          },
          address: { "$ref": "#/definitions/address" }
        }
      }
    } // members
  }
};


const uiSchema =  {
    title: {
      "ui:widget": "color" // could also be "select"
    },
    members: {
      "ui:options":  {
        orderable: false
      },
      items: {
        name: {
          classNames: 'threeColumn',
          first: {
            "ui:placeholder": "First Name",
            'ui-widget': 'phoneWidget'
          }
        },
        phone: {
          classNames: 'threeColumn',
          home: {
            'ui-placeholder': 'home phone'
          }
        },
        email: {
          classNames: 'halfWidth'
        },
        profession: {
          classNames: 'halfWidth'
        },
        address: {
          classNames: 'threeColumn'
        }
      } // members
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
            <h1>Chinmaya Mission Worldwide</h1>
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
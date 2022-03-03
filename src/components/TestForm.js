import React from 'react';
import { Form, Field } from 'react-final-form';
import Styles from './Styles';
import axios from 'axios';

const TestForm = () => {

  const handleSubmit = async (values) => {
    console.log()
    if (values.method === 'get') {
      const response = await axios.get(`${values.host}/${values.route}`);
      console.log(response)
    } else if (values.method === 'post') {
      const response = await axios.post(values.route);
      console.log(response)
    }
  }

  return (
    <Styles>
      <Form onSubmit={handleSubmit}>
        {({ handleSubmit: submit, submitting, pristine, form}) => (
          <form onSubmit={submit}>
            <div>
              <label>Method</label>
              <Field name="method" component="select">
                <option />
                <option value="get">GET</option>
                <option value="post">POST</option>
              </Field>
            </div>
            <div>
              <label>Request</label>
              <Field
                name="host"
                component="input"
                type="text"
                placeholder="Host"
              />
            </div>
            <div>
              <label>Request</label>
              <Field
                name="route"
                component="input"
                type="text"
                placeholder="Route"
              />
            </div>
            <div className="buttons">
              <button type="submit" disabled={submitting || pristine}>
                Submit
              </button>
              <button
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}
              >
                Reset
              </button>
            </div>
          </form>
        )}
      </Form>
    </Styles>
  );
};

export default TestForm;

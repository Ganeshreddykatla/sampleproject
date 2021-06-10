import React, { useState } from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FastField,
} from "formik";
import * as Yup from "yup";
import TextError from "./TextError";
import Button from '@material-ui/core/Button';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import ProcessMenu from "../../../components/Menubar/ProcessMenu";
import EmergencyTeam from '../../../components/Tables/EmergencyTeam'

const initialValues = {
  incident_number: "7865765478",
  location: "Baddi",
  department: "Select Department",
  report_title: "Report Title",
  occurance_date: "20/12/2020 & 22:10",
  placearea: "Baddi",
  reported_by: "Samirdi Chauhan",
  incident_nature: "Nature of Incident",
  notice_date: "20/12/2020 & 22:10",
  person_name: "Name of the Person Involved",
  employ_nature: " Nature of Employement",
  details: "Details",
  cause: "Root Cause/ Initial Findings",
  taken_action: " Action Taken",
  witness: " Witness Details",
  recommendation: " Recommdations",
  signature: " Chiris Narcos",
  spporting_file: "",
};

const savedValues = {
    incident_number: "7865765478",
    location: "Baddi",
    department: "Select Department",
    report_title: "Report Title",
    occurance_date: "20/12/2020 & 22:10",
    placearea: "Baddi",
    reported_by: "Samirdi Chauhan",
    incident_nature: "Nature of Incident",
    notice_date:  "20/12/2020 & 22:10",
    person_name: "Name of the Person Involved",
    employ_nature: " Nature of Employement",
    details: "Details",
    cause: "Root Cause/ Initial Findings",
    taken_action: " Action Taken",
    witness: " Witness Details",
    recommendation: " Recommdations",
    signature: " Chiris Narcos",
    spporting_file: "",
};

const onSubmit = (values, submitProps) => {
  console.log("Form data", values);
  console.log("submitProps", submitProps);
  submitProps.setSubmitting(false);
  submitProps.resetForm();
};

const validationSchema = Yup.object({

});

const validateComments = (value) => {
  let error;
  if (!value) {
    error = "Required";
  }
  return error;
};

const AddIncident = () => {
  const [formValues, setFormValues] = useState(null);



  
  const Incidentbutton = withStyles((theme) => ({
    root: {
        margin: '0 10px 0 10px',
        padding: '10px 15px',
        textTransform: 'capitalize',
        width: '400px',
         color: "#fff",
      backgroundColor: '#90c2f3',
      '&:hover': {
        backgroundColor: '#90c2f3',
      },

    },
  }))(Button);
  const Cancelbutton = withStyles((theme) => ({
    root: {
        margin: '0 10px 0 10px',
        padding: '10px 15px',
        width: '400px',
      color: "#fff",
      backgroundColor: ' #f49090',
      '&:hover': {
        backgroundColor: ' #f49090',
      },

    },
  }))(Button);
   

  const CustomInputComponent = (props) => (
    <input className="supporting_input" type="text" {...props} />
  );


  return (
    <div className="">
      <ProcessMenu />

      <div className="add_incident">
        <Formik
          initialValues={formValues || initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          enableReinitialize
          // validateOnChange={false}
          // validateOnBlur={false}
          // validateOnMount
        >
          {(formik) => {
            console.log("Formik props", formik);
            return (
              <Form>
                <div className="incident_form">
                  <div className="form-control">
                    <label htmlFor="name">Incident Number</label>
                    <Field
                      type="text"
                      id="incident_number"
                      name="incident_number"
                    />
                    <ErrorMessage
                      name="incident_number"
                      component={TextError}
                    />
                  </div>

                  <div className="form-control">
                    <label htmlFor="location">Location</label>
                    <Field
                      type="text"
                      as="select"
                      id="location"
                      name="location"
                    >
                      <option value="red">Baddi</option>
                      <option value="green">Kolakata</option>
                      <option value="blue">other</option>
                    </Field>
                    <ErrorMessage name="location">
                      {(error) => <div className="error">{error}</div>}
                    </ErrorMessage>
                  </div>

                  <div className="form-control">
                    <label htmlFor="department">Department</label>
                    <Field
                      as="select"
                      type="text"
                      id="department"
                      name="department"
                      placeholder=""
                    >
                         <option value="red">Select Department</option>
                      <option value="green">Ware house</option>
                      <option value="blue">other</option>
                 </Field>
                    <ErrorMessage name="channel" />
                  </div>
                </div>

                <div className="incident_form">
                  <div className="form-control">
                    <label htmlFor="report_title">Report Title</label>
                    <Field type="text" id="report_title" name="report_title" />
                    <ErrorMessage name="report_title" component={TextError} />
                  </div>

                  <div className="form-control">
                    <label htmlFor="occurance_date">
                      Date & Time of Occurance
                    </label>
                    <Field
                      type="text"
                      id="occurance_date"
                      name="occurance_date"
                    />
                    <ErrorMessage name="occurance_date">
                      {(error) => <div className="error">{error}</div>}
                    </ErrorMessage>
                  </div>

                  <div className="form-control">
                    <label htmlFor="placearea">Place/Area</label>
                    <Field
                      type="text"
                      id="placearea"
                      name="placearea"
                      placeholder=""
                    />
                    <ErrorMessage name="placearea" />
                  </div>
                </div>
                <div className="incident_form">
                  <div className="form-control">
                    <label htmlFor="reported_by">Reported By</label>
                    <Field type="text" id="reported_by" name="reported_by" />
                    <ErrorMessage name="reported_by" component={TextError} />
                  </div>

                  <div className="form-control">
                    <label htmlFor="incident_nature">Nature of Incident</label>
                    <Field
                      as="select"
                      type="text"
                      id="incident_nature"
                      name="incident_nature"
                    >
                      <option value="accident">Accident</option>
                      <option value="accident">Conditional</option>
                      <option value="accident">Others</option>
                    </Field>
                    <ErrorMessage name="incident_nature">
                      {(error) => <div className="error">{error}</div>}
                    </ErrorMessage>
                  </div>

                  <div className="form-control">
                    <label htmlFor="notice_date">Notice of Incident</label>
                    <Field
                      type="text"
                      id="notice_date"
                      name="notice_date"
                      placeholder=""
                    />
                    <ErrorMessage name="notice_date" />
                  </div>
                </div>
                <div className="incident_form">
                  <div className="form-control">
                    <label htmlFor="person_name">
                      Person Involved in Incident
                    </label>
                    <Field type="text" id="person_name" name="person_name" />
                    <ErrorMessage name="person_name" component={TextError} />
                  </div>

                  <div className="form-control">
                    <label htmlFor="employ_nature">Nature of Employement</label>
                    <Field
                      as="select"
                      type="text"
                      id="employ_nature"
                      name="employ_nature"
                    >
                      <option value="accident">Full Time</option>
                      <option value="accident">Part Time</option>
                      <option value="accident">Others</option>
                    </Field>
                    <ErrorMessage name="employ_nature">
                      {(error) => <div className="error">{error}</div>}
                    </ErrorMessage>
                  </div>

                  <div className="form-control">
                    <label htmlFor="details">Details</label>
                    <Field
                      type="text"
                      id="details"
                      name="details"
                      placeholder=""
                    />
                    <ErrorMessage name="details" />
                  </div>
                </div>
                <div className="incident_form">
                  <div className="form-control">
                    <label htmlFor="cause">
                      Route Cause/Preliminary Findings
                    </label>
                    <Field type="text" id="cause" name="cause" />
                    <ErrorMessage name="cause" component={TextError} />
                  </div>

                  <div className="form-control">
                    <label htmlFor="taken_action">immediate Action Taken</label>
                    <Field type="text" id="taken_action" name="taken_action" />
                    <ErrorMessage name="taken_action">
                      {(error) => <div className="error">{error}</div>}
                    </ErrorMessage>
                  </div>

                  <div className="form-control">
                    <label htmlFor="witness">Witness Details</label>
                    <Field
                      type="text"
                      id="witness"
                      name="witness"
                      placeholder=""
                    />
                    <ErrorMessage name="witness" />
                  </div>
                </div>
                <div className="incident_form">
                  <div className="form-control">
                    <label htmlFor="recommendation">Recommendations</label>
                    <Field
                      type="text"
                      id="recommendation"
                      name="recommendation"
                    />
                    <ErrorMessage name="recommendation" component={TextError} />
                  </div>

                  <div className="form-control">
                    <label htmlFor="signature">Signature</label>
                    <Field type="text" id="signature" name="signature" />
                    <ErrorMessage name="signature">
                      {(error) => <div className="error">{error}</div>}
                    </ErrorMessage>
                  </div>

                  <div className="form-control">
                    <label htmlFor="file">Supporting Documents</label>
                     <div className="supporting_file">
                    <Field name="spporting_file" as={CustomInputComponent} placeholder=""/>
                     <div className="input_title">Upload the Document</div>
                     <div className="input_desc">Max 2MB File</div>
                    </div>
                    <ErrorMessage name="spporting_file" />
                  </div>
                </div>
<div className="incident_buttons">
                <Incidentbutton
                  variant="contained"
                  color="secondary"
                  disabled={!formik.isValid || formik.isSubmitting}
                >
               Save
                </Incidentbutton>
                <Incidentbutton
                  variant="contained"
                  color="secondary"
                  type="button"
                  onClick={() => setFormValues(savedValues)}
                >
         Save as Draft
                </Incidentbutton>
                <Incidentbutton
                  variant="contained"
                  color="secondary"
                  type="button"
                  onClick={() => setFormValues(savedValues)}
                >
       Invite
                </Incidentbutton>
                <Cancelbutton
                  variant="contained"
                  color="secondary"
                  type="button"
                  onClick={() => setFormValues(savedValues)}
                >
            Cancel
                </Cancelbutton>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
      <div className="emergency_table">
          <EmergencyTeam/>
      </div>
    </div>
  );
};

export default AddIncident;

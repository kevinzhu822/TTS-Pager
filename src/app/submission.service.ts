import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubmissionService {
  data = {};

  constructor() { }

  /* sticks the following entry into "data":
    <<type: {"name": field_name, "hasInput": has_input, "inputData": input_data}>>
    - set "has_input" to true if the input field is needed
    - the "input_data" field should only be used for fields that require inputs.
    - simply stores a blank string otherwise

    - type is used for determining if a field has already been used
      - i.e. if a therapist has already been selected
      - exception, since multiple notes can be selected, we input "field_name" as type
  */
  public setField(type, field_name, has_input: boolean, input_data) {
    if (this.data[type] != null) {
      delete this.data[type];
    }
    this.data[type] = {"name": field_name, "hasInput": has_input, "inputData": input_data};
  }

  public removeField(type) {
    delete this.data[type];
  }

  public masterSubmit() {
    console.log(this.data);
  }
}

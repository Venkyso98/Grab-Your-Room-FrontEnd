import React from "react";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { useStyles } from "./DatePickerControl.style";

function DatePickerControl({ label, name, onChange, value }) {
  const classes = useStyles();
  const onHandleDatePickerChange = (name, value) => ({
    target: {
      name,
      value,
    },
  });

  return (
    <div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          // disableScrollLock={true}
          margin="normal"
          id="date-picker-dialog"
          format="yyyy-MM-dd"
          label={label}
          name={name}
          value={value}
          onChange={(date) => onChange(onHandleDatePickerChange(name, date))}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
          className={classes.datePicker}
        />
      </MuiPickersUtilsProvider>
    </div>
  );
}

export default DatePickerControl;

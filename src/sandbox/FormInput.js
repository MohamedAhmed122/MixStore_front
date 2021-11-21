import React from "react";
import { useField } from "formik";
import { FormControl } from "@mui/material";
import Input from "../commons/Input";

export default function FormInput({ width, margin, Icon, ...props }) {
  const [field, meta] = useField(props);
  return (
    <FormControl error={meta.touched && !!meta.error}>
      {Icon && <Icon />}
      <Input width={width} margin={margin} {...field} {...props} />
      {meta.error && meta.touched && (
        <div style={{ color: "red" }}> {meta.error}</div>
      )}
    </FormControl>
  );
}

import React from 'react';
import PropTypes from 'prop-types';

import { FIELD_TYPES, TEXT_FIELD_THEMES } from '../../../consts';
import {
  CustomTextField,
  CustomSwitch,
  CustomPhone,
  CustomDateRange,
  CustomDate,
  CustomRadioGroup,
  CustomFileLoader,
  CustomAutocomplete,
} from '../../../components/@ui/CustomFields';

import useApp from '../hooks/useApp';

import { SectionThemeContext } from '../FormCandidateSection/SectionProvider';

const {
  textarea,
  radio,
  radioGroup,
  phone,
  date,
  dateMulti,
  file,
  list,
  email,
  // text,
} = FIELD_TYPES;

const DisplayField = ({
  field,
  onChange,
}) => {
  const {
    value,
    title,
    // code,
    type,
    // col,
    required,
    options,
    minDate,
    maxDate,
    disabled,
  } = field;

  const fieldTheme = React.useContext(SectionThemeContext);
  const textFieldTheme = TEXT_FIELD_THEMES[fieldTheme];

  if (disabled) return null;

  switch (type) {
    case radio:
      return <CustomSwitch
        required={required}
        label={title}
        value={value}
        onChange={onChange}
      />
    case phone:
      return <CustomPhone
        required={required}
        label={title}
        value={value}
        onChange={onChange}
        theme={textFieldTheme}
      />
    case date:
      return <CustomDate
        required={required}
        label={title}
        theme={textFieldTheme}
        onChange={onChange}
        value={value}
        minDate={minDate || new Date(1970, 1, 1,)}
        maxDate={maxDate || new Date()}
      />
    case dateMulti:
      return <CustomDateRange
        required={required}
        label={title}
        theme={textFieldTheme}
        onChange={onChange}
        value={value}
        minDate={minDate || new Date(1970, 1, 1,)}
        maxDate={maxDate || new Date()}
      />
    case radioGroup:
      return <CustomRadioGroup
        options={options}
        value={value}
        onChange={onChange}
        multiselect
      />
    case textarea:
      return <CustomTextField
        required={required}
        label={title}
        value={value}
        onChange={onChange}
        theme={textFieldTheme}
        multiline
      />
    case file:
      return <CustomFileLoader
        required={required}
        label={title}
        value={value}
        onChange={onChange}
        theme={textFieldTheme}
      />
    case list:
      return <CustomAutocomplete
        required={required}
        placeholder={title}
        val={value}
        onChange={onChange}
        theme={textFieldTheme}
        options={options}
      />
    case email:
      return <CustomTextField
        required={required}
        label={title}
        value={value}
        onChange={onChange}
        theme={textFieldTheme}
        type={email}
      />

    default:
      return <CustomTextField
        required={required}
        label={title}
        value={value}
        onChange={onChange}
        theme={textFieldTheme}
      />
  }
}

const FormCandidateField = ({
  field,
  fieldCode,
  sectionCode,
  subsectionCode,
}) => {
  const {
    handleFieldChange,
  } = useApp();

  const handleDisplayFieldChange = (value) => {
    handleFieldChange(
      sectionCode,
      subsectionCode,
      fieldCode,
      value,
    );
  }

  return (
    <DisplayField
      field={field}
      onChange={handleDisplayFieldChange}
    />
  );
};

FormCandidateField.propTypes = {
  field: PropTypes.shape({
    title: PropTypes.string.isRequired,
    code: PropTypes.string,
    type: PropTypes.oneOf(Object.keys(FIELD_TYPES)).isRequired,
    col: PropTypes.number,
    required: PropTypes.bool,
  }),
  fieldCode: PropTypes.any.isRequired,
  sectionCode: PropTypes.any.isRequired,
  subsectionCode: PropTypes.any.isRequired,
};
DisplayField.propTypes = {
  field: PropTypes.shape({
    title: PropTypes.string.isRequired,
    code: PropTypes.string,
    type: PropTypes.oneOf(Object.keys(FIELD_TYPES)).isRequired,
    col: PropTypes.number,
    required: PropTypes.bool,
  }),
};

export default FormCandidateField;
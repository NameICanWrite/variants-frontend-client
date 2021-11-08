/* eslint-disable no-use-before-define */
import React from 'react';
import { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';

const filter = createFilterOptions();

export default function FreeSoloCreateOption({options, style, handleValue}) {
  const [value, setValue] = React.useState(null);
  const [inputValue, setInputValue] = React.useState(null);

  useEffect(() => {
    handleValue(value?.title)
  }, [value])

  return (
    <Autocomplete
      style={style}
      value={value}
      onChange={(event, newValue) => {
        console.log(event.target.newValue);
        if (typeof newValue === 'string') {
          setValue({
            title: newValue,
          });
        } else if (newValue && newValue.inputValue) {
          // Create a new value from the user input
          setValue({
            title: newValue.inputValue,
          });
        } else {
          setValue(newValue);
        }
      }}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
        console.log(inputValue);
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        // Suggest the creation of a new value
        if (params.inputValue !== '') {
          filtered.push({
            inputValue: params.inputValue,
            title: `Add "${params.inputValue}"`,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="free-solo-with-text-demo"
      options={options}
      getOptionLabel={(option) => {
        // Value selected with enter, right from the input
        if (typeof option === 'string') {
          return option;
        }
        // Add "xxx" option created dynamically
        if (option.inputValue) {
          return option.inputValue.toString();
        }
        // Regular option
        return (option.title?.toString() || '');
      }}
      renderOption={(option) => option.title?.toString() || ''}
      freeSolo
      renderInput={(params) => (
        <div ref={params.InputProps.ref}>
          <input style={ style} type="text" {...params.inputProps} />
        </div>
      )}
    />
  );
}
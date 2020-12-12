import React from 'react';
import Select from 'react-select';
import { Controller } from 'react-hook-form';

const InputSelect = ({ name, control, options }) => {
  return (
    <div class="flex flex-row mb-4 justify-center items-center">
      <label class="block text-gray-700 text-sm font-normal mr-2 capitalize" for={name}>
        {name}
      </label>
      <div className="shadow appearance-none border rounded w-full  text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        <Controller
          name={name}
          control={control}
          render={({ onChange, onBlur, value }) => {
            console.log(value);
            return (
              <Select
                options={options}
                onChange={onChange}
                onBlur={onBlur}
                selected={value.value}
                defaultValue={value.value}
              />
            );
          }}
        />
      </div>
    </div>
  );
};

export default InputSelect;

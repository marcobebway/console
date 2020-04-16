import React from 'react';
import { ControlledEditor, DiffEditor } from '@monaco-editor/react';

export default function Editor({
  id,
  language = 'javascript',
  showDiff = false,
  originalValue = '',
  value = '',
  setValue,
  debouncedCallback = () => void 0,
}) {
  function handleChange(_, value) {
    setValue(value);
    debouncedCallback();
  }

  if (showDiff) {
    return (
      <DiffEditor
        id={id}
        height="30em"
        language={language}
        theme="vs-light"
        original={originalValue}
        modified={value}
        onChange={handleChange}
      />
    );
  }

  return (
    <ControlledEditor
      id={id}
      height="30em"
      language={language}
      theme="vs-light"
      value={value}
      onChange={handleChange}
    />
  );
}

# React Persist Hook 

Hook for persisting and rehydrating state in the React app.

## Installation

```bash
npm install react-persist-hook
```
or 
```bash
yarn add react-persist-hook
```

## Usage

```javascript
import React from 'react'
import usePersist from 'react-persist-hook'

const Signin = () => {
  const [signinFormValues, setSigninFormValues] = usePersist('signin-form', 'localStorage', 400);

  const { userName, password } = signinFormValues || {};
  const initValues = { userName, password };

  const handleSubmit = ({ userName, password }) => {
    setSigninFormValues({ userName, password });
    // rest of the submit method
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* rest of the code */}
    </form>
  )
}
```

## Props 

| Prop          | Type                                     | Default        | Required | Description                                           |
|---------------|------------------------------------------|----------------|----------|-------------------------------------------------------|
| key           | string                                   |                | true     | Unique storage key                                    |
| storageType   | ['localStorage'&#124;'sessionStorage'] | 'localStorage' | false    | Storage type name                                     |
| debounceLimit | number                                   | 250            | false    | Time in milliseconds to debounce the state persisting |


## License
[MIT](https://choosealicense.com/licenses/mit/)

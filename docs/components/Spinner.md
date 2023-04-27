# Spinner

The `Spinner` component displays an animated loading indicator. It is useful for showing the user that some data is being fetched or a process is running in the background.

## Usage

Use the `Spinner` component when you need to indicate that the application is waiting for data or processing information.

```jsx
import React from 'react';
import Spinner from './Spinner';

const LoadingData = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Spinner />
    </div>
  );
};

export default LoadingData;
```

### Styling

The `Spinner` component is a component from Flowbite [Default Spinner](https://flowbite.com/docs/components/spinner/#default-spinner) component.
# Layout

The `Layout` component is a wrapper component that provides a consistent structure for the application's pages. It includes a header with the GitHub logo and a main content area where the children components are rendered.

## Props

The component takes the following props:

- `children` (React.ReactNode): The content to be rendered inside the layout.

## Usage

Wrap the main content of a page with the `Layout` component to apply a consistent structure across the application. The children prop should contain the components that make up the main content of the page.

```jsx
import React from 'react';
import Layout from './Layout';

const HomePage = () => {
  return (
    <Layout>
      {/* Main content of the HomePage goes here */}
    </Layout>
  );
};

export default HomePage;
```

## Styling
Component was created using Tailwind CSS, with Tailwind UI library. It is a modified version of Tailwind UI's [Dark nav with overlap](https://tailwindui.com/components/application-ui/application-shells/stacked#component-2573937b459d64c1734b4141b1eff8d7) component.

![Very Simple React](https://res.cloudinary.com/ben-tatum/image/upload/v1702917028/verysimple_bumpersticker.png)

# @verysimple/react

`@verysimple/react` is a component library for React that is simple, customizable, and accessible. It leverages the power of React and Tailwind CSS to provide a set of components that are easy to use and adapt to your needs.

## Installation

You can install this package using npm or yarn:

```bash
npm install @verysimple/react
# or
yarn add @verysimple/react
```

## Usage

Import and use components from this library like so:

```javascript
import { Button, Card } from "@verysimple/react";

export const MyPage = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <Card className="p-7 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-black">Welcome!</h2>
        <Button>Login</Button>
      </Card>
    </div>
  );
};
```

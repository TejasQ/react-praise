# react-praise

> Do React things with your voice.

This is a project that binds the (experimental) [voice-invoked function tool, Praise](https://github.com/tejasq/praise), with React, allowing a user to use [SpeechRecognition](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition) within [React](https://reactjs.org/). Please keep in mind that this API _is_ experimental and that this tool comes with all of the standard caveats of Praise.

## Getting Started

* `yarn add praise react-praise` to your already existing React app.

## Usage

react-praise gives you a component whose children get the return value of a voice-invoked function. For example, here's how you can display a photo of a random _good boi_ to a user.

```jsx
import React from "react";
import Praise from "react-praise";

const myPhrases = {
  "get me a dog photo": async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const { message } = await response.json();
    return message;
  }
};

const MyAppWithVoice = props => (
  <Praise phrases={myPhrases}>
    {dogPhotoURL =>
      dogPhotoURL ? (
        <img alt="good boye!" src={dogPhotoURL} />
      ) : (
        "Would you like a dog photo? Ask me!"
      )
    }
  </Praise>
);

export default App;
```

### Options

react-praise supports all of the options that [Praise](https://github.com/tejasq/praise) does, but as props; React-style.

## Examples

* [JSConf EU 2018 Slides](https://github.com/tejasq/jsconf-eu-2018-slides) by me.

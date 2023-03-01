import React from 'react';

import { FeedbackApp } from './FeedbackApp';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <FeedbackApp />
    </div>
  );
};

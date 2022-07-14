import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Main from '@/pages/Main';

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Main />
    </DndProvider>
  );
};

export default App;

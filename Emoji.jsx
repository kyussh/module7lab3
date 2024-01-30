import React, { createContext, useContext, useState } from 'react';

// Emoji Context
const EmojiContext = createContext();

// Emoji Provider component
export const EmojiProvider = ({ children }) => {
  const [currentEmoji, setCurrentEmoji] = useState('😊');

  const changeEmoji = newEmoji => {
    setCurrentEmoji(newEmoji);
  };

  return (
    <EmojiContext.Provider value={{ currentEmoji, changeEmoji }}>
      {children}
    </EmojiContext.Provider>
  );
};

// Emoji Hook for consuming the context
export const useEmoji = () => {
  const context = useContext(EmojiContext);
  if (!context) {
    throw new Error('useEmoji must be used within an EmojiProvider');
  }
  return context;
};

// Emoji component
export const Emoji = () => {
  const { currentEmoji } = useEmoji();

  return <span>{currentEmoji}</span>;
};

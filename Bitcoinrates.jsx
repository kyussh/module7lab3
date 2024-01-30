import React from 'react';
import { EmojiProvider, Emoji, useEmoji } from './Emoji';

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

function BitcoinRates() {
  const { currentEmoji, changeEmoji } = useEmoji();

  const handleMoodChange = () => {
    
    // can implement a logic to change the emoji/mood here
    const newEmoji = currentEmoji === '😊' ? '😢' : '😊';
    changeEmoji(newEmoji);
  };

  const options = currencies.map(curr => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select>
          {options}
        </select>
      </label>
      <p>Current Price of Bitcoin: $50,000</p>
      <p>Mood: <Emoji /></p>
      <button onClick={handleMoodChange}>Change Mood</button>
    </div>
  );
}

// Wrap the BitcoinRates component with the EmojiProvider
const BitcoinRatesWithEmojiProvider = () => {
  return (
    <EmojiProvider>
      <BitcoinRates />
    </EmojiProvider>
  );
}

export default BitcoinRatesWithEmojiProvider;

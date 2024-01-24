import { useState } from 'preact/hooks';
import '/src/styles/global.css';

export default function Greeting({messages}) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button class="buttons" onClick={() => setGreeting(randomMessage())}>
        New Greeting
      </button>
    </div>
  );
}
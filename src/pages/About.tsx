import react from 'react';

// Long description of the application
export default function About({ shopName }: { shopName: string }) {
  return <div>
    <h1>About {shopName}</h1>
    <p>
      Shop where you can buy <b>Good Dreams</b>™.
    </p><p>
      Cheap prices and good quality.
    </p><p>
      Free shipping when making an order over <b>666¢</b>.
    </p>
  </div>
}
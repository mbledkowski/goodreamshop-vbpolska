import react from 'react';
import { Link } from 'react-router-dom';

// Home page for the shop application with title and description
export default function Home({shopName}: {shopName: string}) {
  return <div>
    <h1>{shopName}</h1>
    <p>
      This is a simple shop application that uses React, TypeScript,
      Styled Components, and React Router.
    </p>
    <Link to="/products">Go to products</Link>
  </div>
}
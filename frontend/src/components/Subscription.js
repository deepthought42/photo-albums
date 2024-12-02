import React from "react";

function Subscription() {
  return (
    <div>
      <h1>Subscription Plans</h1>
      <ul>
        <li>Free: 10GB, 3 albums, no sharing.</li>
        <li>Personal: $10/month or $100/year, 100GB, no collaborator uploads.</li>
        <li>Family: $20/month or $200/year, 100GB, unlimited albums, 5 collaborators.</li>
      </ul>
      <button>Subscribe</button>
    </div>
  );
}

export default Subscription;

import * as React from 'react';
import TextCard from '../shared/TextCard';
import './Contact.scss';

export default function Contact() {
  return (
    <div className="container">
      <TextCard className="card header" textLines={['Contact Us']} margin={'5px'}/>
      <TextCard className="card" textLines={['315-000-0000', 'soaplady@soap.com']} margin={'5px'}/>
      <TextCard className="card" textLines={['The waves crashed against the shore, sending spray into the air and filling the beach with the sound of their constant rhythm. The sound of laughter and chatter filled the air, as families and friends gathered for the holiday feast.']} margin={'5px'}/>
    </div>
  );
}

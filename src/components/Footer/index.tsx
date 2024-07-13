import React from 'react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>&copy; {year} Oskari Suonpää</p>
    </footer>
  );
};

export default Footer;

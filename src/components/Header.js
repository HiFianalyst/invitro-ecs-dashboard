import React from 'react';

function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-700 to-blue-500 text-white p-6 shadow-lg">
      <div className="container mx-auto">
        <h1 className="text-4xl font-extrabold mb-2 tracking-tight">
          In Vitro Error-Corrected Sequencing (ECS) Dashboard
        </h1>
        <p className="text-xl opacity-90">
          A comprehensive database of studies utilizing Error-Corrected Sequencing in in vitro models.
        </p>
      </div>
    </header>
  );
}

export default Header;

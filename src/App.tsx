import React, { JSX, useRef } from 'react';
import './styles.css';
import ObjectMarker, { _Section } from './Object';

function App() {
  let refs:HTMLSpanElement[] = [];
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Thilak Vikram R</h1>
        <p className="text-lg italic">Motivated Web Developer | JavaScript Enthusiast</p>
      </header>
      <main className="max-w-4xl mx-auto space-y-10">
        {ObjectMarker.map((section:_Section,i:number) => (
          <div key={section.id} className="p-8 bg-white text-gray-900 rounded-lg shadow-lg transition-transform transform hover:scale-105 parentmakecenter">
            <h2 className="text-3xl font-semibold mb-4 border-b-2 border-blue-500 pb-2 w-full"><span ref={(e:HTMLSpanElement)=>{refs[i] = e}} className='w-full inline-block'>{section.title}</span></h2>
            <p className="text-lg leading-relaxed whitespace-pre-line flex flex-col text-gray-600">{section.content as React.ReactNode}</p>
          </div>
        ))}
      </main>
      <footer className="text-center mt-16">
        <p className="text-sm">&copy; 2025 Thilak Vikram R. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

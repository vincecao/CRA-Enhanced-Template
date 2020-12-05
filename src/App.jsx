import React from 'react';
import logo from '~/logo.svg';

function App() {
  return (
    <div className="bg-black h-screen w-full flex justify-center items-center">
      <div className="text-center">
        <img src={logo} className="animate-spin h-32 m-auto mb-10" alt="logo" />
        <p className="text-white text-lg my-5">
          Edit <code className="p-1 font-mono text-sm bg-gray-800 text-yellow-600 rounded-lg">src/App.jsx</code> and
          save to reload.
        </p>
        <a
          className="text-red-400 uppercase p-2 rounded-lg hover:bg-gray-100 transition duration-200"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </div>
  );
}

export default App;

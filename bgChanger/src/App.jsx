import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+";

    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  };

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-slate-900 to-black px-4">
      <div className="w-full max-w-lg rounded-2xl bg-white/10 backdrop-blur-md shadow-2xl border border-white/20 p-6">
        <h1 className="text-3xl font-bold text-center text-white mb-2">
          Password Generator
        </h1>

        <p className="text-center text-gray-300 text-sm mb-6">
          Generate a strong and secure password
        </p>

        <div className="flex rounded-xl overflow-hidden bg-white shadow-lg mb-6">
          <input
            type="text"
            value={password}
            className="w-full px-4 py-3 outline-none text-gray-800 font-medium"
            readOnly
            placeholder="Password"
            ref={passwordRef}
          />

          <button
            onClick={copyPasswordToClipboard}
            className="bg-orange-500 hover:bg-orange-600 text-white px-5 font-semibold transition"
          >
            Copy
          </button>
        </div>

        <div className="space-y-5">
          <div>
            <div className="flex justify-between text-white mb-2">
              <label htmlFor="length" className="font-medium">
                Password Length
              </label>
              <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                {length}
              </span>
            </div>

            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="w-full cursor-pointer accent-orange-500"
              onChange={(e) => setLength(Number(e.target.value))}
              id="length"
            />
          </div>

          <div className="flex items-center justify-between bg-white/10 rounded-xl px-4 py-3 border border-white/10">
            <label htmlFor="number" className="text-white font-medium">
              Include Numbers
            </label>

            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
              id="number"
              className="w-5 h-5 accent-orange-500 cursor-pointer"
            />
          </div>

          <div className="flex items-center justify-between bg-white/10 rounded-xl px-4 py-3 border border-white/10">
            <label htmlFor="character" className="text-white font-medium">
              Include Characters
            </label>

            <input
              type="checkbox"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
              id="character"
              className="w-5 h-5 accent-orange-500 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
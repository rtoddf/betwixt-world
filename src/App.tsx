// import { useState } from 'react';
import './styles/colors-and-type.css';
import './styles/card.css';
import zaman from '/assets/characters/zaman.png';
import aella from '/assets/characters/aella.png';
import azrael from '/assets/characters/azrael.png';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <section id="center">
        <div className="grid grid-cols-3 gap-4">
          <div className="card">
            <div className="portrait p-8">
              <img src={zaman} alt="Zaman" />
            </div>
            <div className="body">
              <h3 className="name">Zaman</h3>
              <span className="tag">Time</span>
              <p className="bio">
                There once was a girl with deep pockets, Full of acorns and
                string and old lockets. She'd count them by name, Each evening
                the same, Then sleep with them tucked in their sockets.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="portrait p-8">
              <img src={aella} alt="Aella" />
            </div>
            <div className="body">
              <h3 className="name">Aella</h3>
              <span className="tag">Mischief</span>
              <p className="bio">
                There once was a girl with deep pockets, Full of acorns and
                string and old lockets. She'd count them by name, Each evening
                the same, Then sleep with them tucked in their sockets.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="portrait p-8">
              <img src={azrael} alt="Azrael" />
            </div>
            <div className="body">
              <h3 className="name">Azrael</h3>
              <span className="tag">Death</span>
              <p className="bio">
                There once was a girl with deep pockets, Full of acorns and
                string and old lockets. She'd count them by name, Each evening
                the same, Then sleep with them tucked in their sockets.
              </p>
            </div>
          </div>
        </div>
        {/* <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button> */}
      </section>

      <div className="ticks"></div>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;

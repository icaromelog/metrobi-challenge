import { useState } from 'react';
import { findDuplicatedItens } from './Question1';
import { printDelay } from './Question2';
import { Layout } from './Question3';
import { isValidBrackets } from './Question4';
import { findHighestSafeFloor } from './Question5';
import { ZenosParadox } from './Question6';
import { getMaxValue } from './Question7';

import './App.css';

function App() {
  const [duplicatedItens, setDuplicatedItens] = useState([]);
  const [highestSafeFloor, setHighestSafeFloor] = useState('');
  const [maxBagCapacity, setMaxBagCapacity] = useState('');

  const handleFindDuplicatedItens = () => {
    const fruits = ["Apple", "Banana", "Strawberry", "Grape", "Orange", "Pear", "Melon", "Strawberry", "Pineapple", "Grape", "Orange", "Orange", "Orange"];
    const result = findDuplicatedItens(fruits);
    setDuplicatedItens(result);
  };

  const handleDelayedPromise = () => {
    const arr = ["a", "b", "c", "d"];

    printDelay(arr).then((result) => {
      console.log(result);
    });
  }

  const handleValidationBrackets = () => {
    const str1 = '{[]}';
    const str2 = '{(])}';
    const str3 = '{([)]}';

    console.log(str1, isValidBrackets(str1));
    console.log(str2, isValidBrackets(str2));
    console.log(str3, isValidBrackets(str3));
  }

  const handleHighestSafeFloor = () => {
    const result = findHighestSafeFloor();
    setHighestSafeFloor(result);
  }

  const getMaxValueCapacity = () => {
    const carrotTypes = [{ kg: 5, price: 100 }, { kg: 7, price: 150 }, { kg: 3, price: 70 }];
    const capacity = 36;

    const result = getMaxValue(carrotTypes, capacity);
    setMaxBagCapacity(result);
  }

  return (
    <>
      <header className="nav-header">
        <div className="logo">Metrobi<span> Challenge Questions</span></div>
      </header>

      <div className="container">
        <div className="card">
          <h2>1. Write a javascript function that finds the duplicate items in any given array.</h2>
          <pre><code>[Apple, Banana, Strawberry, Grape, Orange, Pear, Melon, Strawberry, Pineapple, Grape, Orange, Strawberry]</code></pre>
          <button onClick={handleFindDuplicatedItens}><span className="play-icon">▶</span> View Result</button>
          <div className="output">
            {duplicatedItens.length > 0 && (
              <pre>
                <code>
                  {JSON.stringify(duplicatedItens)}
                </code>
              </pre>
            )}
          </div>
        </div>

        <div className="card">
          <h2>2. Write an async javascript function that writes every item in any given array with 1, 2, 4, 8, etc. seconds apart.</h2>
          <button onClick={handleDelayedPromise}><span className="play-icon">▶</span> View Result (Browser Console)</button>
        </div>

        <div className="card">
          <h2>3. Write the necessary React code for generating the below figure (using flex).</h2>
          <Layout />
        </div>    

        <div className="card">
          <h2>4. Write an efficient method that tells us whether or not an input string brackets ("{", "}","(", ")", "[", "]") opened and closed properly</h2>
          <pre>
            <code>
              Example: {"{[]}"} ={'>'} true, {"{(])}"} ={'>'} false, {"{([)]}"} ={'>'} false
            </code>
          </pre>
          <button onClick={handleValidationBrackets}><span className="play-icon">▶</span> View Result (Browser Console)</button>
        </div>    

        <div className="card">
          <h2>5. A building has 100 floors. One of the floors is the highest floor an egg can be dropped
            from without breaking. If an egg is dropped from above that floor, it will break. If it is
            dropped from that floor or below, it will be completely undamaged and you can drop the
            egg again. Given two eggs, find the highest floor an egg can be dropped from without
            breaking, with as few drops as possible in the worst-case scenario.</h2>
          <button onClick={handleHighestSafeFloor}><span className="play-icon">▶</span> View Result</button>
          <div className="output">
            {highestSafeFloor && (
              <pre>
                <code>
                  {highestSafeFloor}
                </code>
              </pre>
            )}
          </div>
        </div>

        <div className="card">
          <h2>6. Write the code that animates “Zeno's Paradox of Achilles and the Tortoise” on an interface</h2>
          <ZenosParadox />
        </div>
        
        <div className="card">
          <h2>7. Think that you have an unlimited number of carrots, but a limited number of carrot types. Also, you have one bag that can hold a limited weight. Each type of carrot has a
            weight and a price. Write a function that takes carrotTypes and capacity and return the maximum value the bag can hold.</h2>
            <pre>
              <code>
                Example: {`carrotTypes = [{kg: 5, price: 100}, {kg: 7, price: 150}, {kg: 3, price: 70}], capacity = 36 //kg`}
              </code>
            </pre>
            <button onClick={getMaxValueCapacity}><span className="play-icon">▶</span> View Result</button>
            <div className="output">
              {maxBagCapacity && (
                <pre>
                  <code>
                    {maxBagCapacity}
                  </code>
                </pre>
              )}
            </div>
        </div>

      </div>
    </>
  );
}

export default App;
import React from 'react';
import './App.css';
import './input.css';
import { Button } from '@/components/ui/button';
import Box from '@/components/ui/box';


function App() {
  function download() {
    alert('download');
  }

  return (
    <div>
      <Box className="bg-gray-100 h-[2000px] flex items-center relative">
        <h1 className="absolute left-[27%] top-[215px] text-center">Fair pricing, unfair advantage.</h1>
        <h2 className="absolute top-[325px] left-[430px]">Download PearAI today and get your coding efficiency to a new level</h2>
        <h4 className="absolute top-[600px] left-[400px]">Want to use it on a professional level? Contact us for custom plans!</h4>
      </Box>

      <div>
        <Box className="bg-white flex h-[591px] w-[400px] items-center absolute top-[600px] left-[80px] rounded-[10px] border-[1.5px] border-green-300">
          <h3 className="text-green-500 mt-[-465px] ml-[40px]">Free</h3>
          <h5 className="ml-[-46px] mt-[-390px]">Bring your api keys and use Pear AI for free!</h5>
          <h6 className="ml-[-309px] mt-[-140px]">$0</h6>
          <h4 className="mt-[-197px] ml-[10px]">/month</h4>
          <button onClick={download} className="border-none bg-green-500 rounded-[25px] w-[330px] h-[49px] ml-[-150px]">
            <h2 className="text-white ml-[70px] mt-[-11px]">Download for Mac</h2>
          </button>
          <h5 className="mt-[183px] ml-[-280px]">Pro two-week trial</h5>
          <h5 className="mt-[268px] ml-[-127px]">Unlimited Copilot++ completions</h5>
          <h5 className="absolute mt-[350px] ml-[85px]">Pro two-week trial</h5>
          <h5 className="absolute mt-[430px] ml-[85px]">OpenAI zero-data retention</h5>
          <img src="images/Vector.png" className="absolute ml-[42px] mt-[158px]" />
          <img src="images/Vector.png" className="absolute ml-[42px] mt-[243px]" />
          <img src="images/Vector.png" className="absolute ml-[42px] mt-[326px]" />
          <img src="images/Vector.png" className="absolute ml-[42px] mt-[406px]" />
        </Box>

        <Box className="bg-white flex h-[591px] w-[400px] items-center absolute top-[600px] left-[540px] rounded-[10px] border-[1.5px] border-green-300">
          <h3 className="text-green-500 mt-[-465px] ml-[40px]">Yearly</h3>
          <h5 className="ml-[-64px] mt-[-390px]">Pay yearly and get ... add text here</h5>
          <h6 className="ml-[-238px] mt-[-140px]">$14</h6>
          <h4 className="mt-[-197px] ml-[10px]">/month</h4>
          <button onClick={download} className="border-none bg-green-500 rounded-[25px] w-[330px] h-[49px] ml-[-174px]">
            <h2 className="text-white ml-[70px] mt-[-11px]">Download for Mac</h2>
          </button>
          <h5 className="mt-[183px] ml-[-280px]">Pro two-week trial</h5>
          <h5 className="mt-[268px] ml-[-127px]">Unlimited Copilot++ completions</h5>
          <h5 className="absolute mt-[350px] ml-[85px]">Pro two-week trial</h5>
          <h5 className="absolute mt-[430px] ml-[85px]">OpenAI zero-data retention</h5>
          <img src="images/Vector.png" className="absolute ml-[42px] mt-[158px]" />
          <img src="images/Vector.png" className="absolute ml-[42px] mt-[243px]" />
          <img src="images/Vector.png" className="absolute ml-[42px] mt-[326px]" />
          <img src="images/Vector.png" className="absolute ml-[42px] mt-[406px]" />
        </Box>

        <Box className="bg-white flex h-[591px] w-[400px] items-center absolute top-[600px] right-[90px] rounded-[10px] border-[1.5px] border-green-300">
          <h3 className="text-green-500 absolute mt-[-465px] ml-[40px]">Monthly</h3>
          <h5 className="ml-[41px] mt-[-380px]">The most supercharged code editor assistant.</h5>
          <h6 className="ml-[-317px] mt-[-142px]">$19</h6>
          <h4 className="mt-[-197px] ml-[10px]">/month</h4>
          <button onClick={download} className="border-none bg-green-500 rounded-[25px] w-[330px] h-[49px] ml-[-180px]">
            <h2 className="text-white ml-[70px] mt-[-11px]">Download for Mac</h2>
          </button>
          <h5 className="mt-[183px] ml-[-280px]">Pro two-week trial</h5>
          <h5 className="mt-[268px] ml-[-127px]">Unlimited Copilot++ completions</h5>
          <h5 className="absolute mt-[350px] ml-[85px]">Pro two-week trial</h5>
          <h5 className="absolute mt-[430px] ml-[85px]">OpenAI zero-data retention</h5>
          <img src="images/Vector.png" className="absolute ml-[42px] mt-[158px]" />
          <img src="images/Vector.png" className="absolute ml-[42px] mt-[243px]" />
          <img src="images/Vector.png" className="absolute ml-[42px] mt-[326px]" />
          <img src="images/Vector.png" className="absolute ml-[42px] mt-[406px]" />
        </Box>
      </div>
    </div>
  );
}

export default App;

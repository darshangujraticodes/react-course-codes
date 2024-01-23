import { useState } from "react";
import InputBox from "./Components/InputBox";
import useCurrencyInfo from "./Hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  // custom hooks
  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);
  // console.log(options, currencyInfo);

  const swap = () => {
    console.log("swap btn click");
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convertCurrency = () => {
    console.log("convert btn Click");
    setConvertedAmount(amount * currencyInfo[to]);
    console.log(amount, convertedAmount);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=600')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convertCurrency();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                selectedCurrency={from}
                currencyOptions={options}
                onCurrencyChange={(curr) => setAmount(curr)}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                onClick={swap}
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                selectedCurrency={to}
                currencyOptions={options}
                onCurrencyChange={(amount) => setTo(amount)}
                amountDisabled
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert from {from.toUpperCase()} to {to.toUpperCase()}.
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

import ReactDOM from "react-dom";
import App from "./component/StockPrice";

var Info = [
    "https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/NLC",
    "https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/SBI"
]

ReactDOM.render((
    <div>
        {Info.map((stock) => {
            return <App apiUrl={stock}></App>
        })}
    </div>
), document.getElementById("root"))
import ExchangeProgram from "../../components/ui-components/GoldExchangecompo/ExchangeProgram";
import GoldCalculate from "../../components/ui-components/GoldExchangecompo/GoldCalculate";
import HowChange from "../../components/ui-components/GoldExchangecompo/HowChange";
import HowItUse from "../../components/ui-components/GoldExchangecompo/HowItUse";
import OurStores from "../../components/ui-components/GoldExchangecompo/OurStores";
import StorsList from "../../components/ui-components/GoldExchangecompo/StorsList";
import TableComp from "../../components/ui-components/GoldExchangecompo/TableComp";

function GoldExchange(params) {
  return (
    <>
      <div className="container">
        <ExchangeProgram />
        <GoldCalculate />
      </div>
      <div
        className="container-flued"
        style={{ backgroundColor: "#f6f3f9", margin: "10px 0" }}>
        <div className="container">
          <HowItUse />
        </div>
      </div>
      <div className="container">
        <HowChange />
      </div>
      <div
        className="container-flued"
        style={{ backgroundColor: "#f6f3f9", margin: "30px 0" }}>
        <div className="container" style={{ padding: "30px" }}>
          <h4 style={{ width: "300px", margin: "auto" }}>Standard deduction</h4>
          <TableComp />
        </div>
      </div>

      <div className="container">
        <OurStores />
      </div>
      <div
        className="container-flued"
        style={{ backgroundColor: "#f6f3f9", margin: "30px 0" }}>
        <StorsList />
      </div>
    </>
  );
}
export default GoldExchange;

import TradeCodes from "../tradeCodes";
import {Fragment} from "react";
import {Col, Input, Label, Row} from "reactstrap";

export default function TradeCodeSelector({selected, toggleCode}) {
  const codes = Object.keys(TradeCodes);
  return (
    <Fragment>
      <Row>
        {codes.map((c, index) => {
          return (
            <Col xs={5} className="text-left">
              <Input
                type="checkbox"
                checked={selected.includes(c)}
                onClick={() => toggleCode(c)}
              />
              <Label check><span className="small"><span className="code">{c}</span> {TradeCodes[c]}</span></Label>
            </Col>
          );
        })}
      </Row>
    </Fragment>
  )
}

import './App.css';
import {Col, Container, Form, FormGroup, Input, Label, Row, Table} from "reactstrap";
import {useEffect, useState} from "react";
import {getAvailableGoods, maxTons, purchaseDM, saleDM} from "./goods";
import {averagePurchasePrice, averageSalePrice} from "./averagePrice";
import TradeCodeSelector from "./components/tradeCodeSelector";
import {BrokerModifierNotes, BrokerRuleNotes, LotSizeNotes} from "./notes";

function App() {
  const [sourceTCs, setSourceTCs] = useState([]);
  const [destinationTCs, setDestinationTCs] = useState([]);
  const [availableGoods, setAvailableGoods] = useState([]);
  const [broker, setBroker] = useState(() =>
    localStorage.getItem('broker') ? parseInt(localStorage.getItem('broker')) : 0
  );
  const [brokerRule, setBrokerRule] = useState(() =>
    localStorage.getItem('brokerRule') ? localStorage.getItem('brokerRule') : 'raw'
  );
  const [brokerMultiplier, setBrokerMultiplier] = useState(() =>
    localStorage.getItem('brokerMultiplier') ? parseInt(localStorage.getItem('brokerMultiplier')) : 1
  );
  const [brokerHired, setBrokerHired] = useState(false);
  const [cargo, setCargo] = useState(() =>
    localStorage.getItem('cargo') ? parseInt(localStorage.getItem('cargo')) : 0
  );
  const [lotSize, setLotSize] = useState('avg');

  const toggleSourceTC = function(code) {
    let newTCs;
    if (sourceTCs.includes(code))
      newTCs = sourceTCs.filter((c) => c !== code);
    else {
      newTCs = [...sourceTCs];
      newTCs.push(code);
    }
    setSourceTCs(newTCs);
  }

  const toggleDestinationTC = function(code) {
    let newTCs;
    if (destinationTCs.includes(code))
      newTCs = destinationTCs.filter((c) => c !== code);
    else {
      newTCs = [...destinationTCs];
      newTCs.push(code);
    }
    setDestinationTCs(newTCs);
  }

  useEffect(() => {
    const goods = getAvailableGoods(sourceTCs);
    setAvailableGoods(goods);
  }, [sourceTCs]);

  useEffect(() => {
    localStorage.setItem('broker', broker);
  }, [broker]);

  useEffect(() => {
    localStorage.setItem('brokerRule', brokerRule);
  }, [brokerRule]);

  useEffect(() => {
    localStorage.setItem('brokerMultiplier', brokerMultiplier);
  }, [brokerMultiplier]);

  useEffect(() => {
    localStorage.setItem('cargo', cargo);
  }, [cargo]);

  useEffect(() => {
  }, [destinationTCs]);

  return (
    <div className="App">
      <Container fluid={true}>
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <h1>Traveller Trade Analyzer</h1>
        </header>
        <Row>
          <Col xs={3}>
            <FormGroup>
              <Label for="cargo">
                Cargo Space
              </Label>
              <Input
                id="cargo"
                name="cargo"
                value={cargo}
                type="number"
                min={0}
                onChange={(e) => {setCargo(parseInt(e.target.value))}}
              />
            </FormGroup>
            <FormGroup>
              <Row>
                <Col>
                  <Label for="brokerRule">
                    Broker Rule<sup>2</sup>
                  </Label>
                  <Input
                    id="brokerRule"
                    name="brokerRule"
                    type="select"
                    size={'sm'}
                    value={brokerRule}
                    onChange={(e)=> {setBrokerRule(e.target.value)}}
                  >
                    <option value="raw">RAW</option>
                    <option value="percent">%</option>
                    <option value="effect">Effect</option>
                    <option value="halfeffect">Half Effect</option>
                    <option value="bas">Broker Affects Sale</option>
                    <option value="hbas">Half Broker Affects Sale</option>
                  </Input>
                </Col>
                {brokerRule === 'percent' && <Col>
                  <Label for="brokerMultiplier">
                    Multiplier<sup>3</sup>
                  </Label>
                  <Input
                    id="brokerMultiplier"
                    size={'sm'}
                    name="brokerMultiplier"
                    value={brokerMultiplier}
                    type="number"
                    min={1}
                    onChange={(e) => {setBrokerMultiplier(parseInt(e.target.value))}}
                  />

                </Col>}
                <Col>
                  <Label for="broker">
                    Broker
                  </Label>
                  <Input
                    id="broker"
                    size={'sm'}
                    name="broker"
                    value={broker}
                    type="number"
                    onChange={(e) => {setBroker(parseInt(e.target.value))}}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup switch className="text-left">
                    <Input
                      type="switch"
                      role="switch"
                      checked={brokerHired}
                      onClick={() => setBrokerHired(!brokerHired)}
                    />
                    <Label check>Hired broker</Label>
                  </FormGroup>
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Label for="sourceTCs">
                Source Trade Codes
              </Label>
              <TradeCodeSelector selected={sourceTCs} toggleCode={toggleSourceTC}/>
              <Label for="destinationTCs">
                Destination Trade Codes
              </Label>
              <TradeCodeSelector selected={destinationTCs} toggleCode={toggleDestinationTC}/>
            </FormGroup>
          </Col>
          <Col>
            <h2>Expected Financial Results</h2>
            <Table striped>
              <thead>
                <tr>
                  <th>Good</th>
                  <th className="br">Base Price</th>
                  <th>Purchase DM</th>
                  <th>Expected Cost</th>
                  <th>
                    Tons<sup>1</sup><br/>
                    <Input
                      id="lotsize"
                      name="lotsize"
                      type="select"
                      size={'sm'}
                      value={lotSize}
                      onChange={(e)=> {setLotSize(e.target.value)}}
                    >
                      <option value="1">One</option>
                      <option value="min">Min</option>
                      <option value="avg">Average</option>
                      <option value="max">Max</option>
                    </Input>
                  </th>
                  <th className="br">Savings</th>
                  <th>Sale DM</th>
                  <th className="br">Sale Price</th>
                  <th>Profit</th>
                </tr>
              </thead>
              {availableGoods.map(g => {
                const pDM = purchaseDM(g, sourceTCs);
                const sDM = saleDM(g, destinationTCs);
                const tons = Math.min(maxTons(g, lotSize), cargo);
                const avgPurchase = averagePurchasePrice(g.price, pDM, broker, brokerRule, brokerMultiplier);
                const avgSale = averageSalePrice(g.price, sDM, broker, brokerRule, brokerMultiplier);
                const savings = Math.round((g.price - avgPurchase)*tons);
                const profit = Math.round((avgSale - avgPurchase)*tons);
                return (
                  <tr>
                    <td>{g.name}</td>
                    <td className="number br">{g.price.toLocaleString()}</td>
                    <td>{pDM}</td>
                    <td className="number">{avgPurchase.toLocaleString()}</td>
                    <td>{tons}</td>
                    <td className={`number br ${savings<0 ? 'loss': ''}`}>{savings.toLocaleString()}</td>
                    <td>{sDM}</td>
                    <td className="number br">{avgSale.toLocaleString()}</td>
                    <td className={`number ${profit<0 ? 'loss': ''}`}>{profit.toLocaleString()}</td>
                  </tr>
                );
              })}
            </Table>
          </Col>
        </Row>
        <h3>Notes</h3>
        <Row className={'note'}>
          <Col><sup>1</sup>{LotSizeNotes[lotSize]}</Col>
        </Row>
        <Row className={'note'}>
          <Col><sup>2</sup>{BrokerRuleNotes[brokerRule]}</Col>
        </Row>
        {brokerRule === 'percent' &&
        <Row className={'note'}>
          <Col><sup>3</sup>{BrokerModifierNotes[brokerRule]}</Col>
        </Row>
        }
      </Container>
    </div>
  );
}

export default App;

import './App.css';
import {Col, Container, FormGroup, Input, Label, Row, Table} from "reactstrap";
import {useEffect, useState} from "react";
import {getAvailableGoods, Goods, maxTons, purchaseDM, saleDM} from "./goods";
import {averagePurchasePrice, averageSalePrice} from "./averagePrice";
import TradeCodeSelector from "./components/tradeCodeSelector";
import {BasePriceRuleNotes, BrokerModifierNotes, BrokerRuleNotes, LotSizeNotes} from "./notes";
import {StartportCodes} from "./starports";
import TechLevel from "./components/techLevel";

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

  const [sourceStarport, setSourceStarport] = useState('A');
  const [destinationStarport, setDestinationStarport] = useState('A');
  const [sourcePop, setSourcePop] = useState(5);

  const [mortgage, setMortgage] = useState(() =>
    localStorage.getItem('mortgage') ? parseInt(localStorage.getItem('mortgage')) : 0
  );
  useEffect(() => {
    localStorage.setItem('mortgage', mortgage);
  }, [mortgage]);

  const [fuelCost, setFuelCost] = useState(() =>
    localStorage.getItem('fuelCost') ? parseInt(localStorage.getItem('fuelCost')) : 0
  );
  useEffect(() => {
    localStorage.setItem('fuelCost', fuelCost);
  }, [fuelCost]);

  const [sourceTL, setSourceTL] = useState(() =>
    localStorage.getItem('sourceTL') ? parseInt(localStorage.getItem('sourceTL')) : 12
  );
  useEffect(() => {
    localStorage.setItem('sourceTL', sourceTL);
  }, [sourceTL]);

  const [destinationTL, setDestinationTL] = useState(() =>
    localStorage.getItem('destinationTL') ? parseInt(localStorage.getItem('destinationTL')) : 12
  );
  useEffect(() => {
    localStorage.setItem('destinationTL', destinationTL);
  }, [destinationTL]);

  const [maintenance, setMaintenance] = useState(() =>
    localStorage.getItem('maintenance') ? parseInt(localStorage.getItem('maintenance')) : 0
  );
  useEffect(() => {
    localStorage.setItem('maintenance', maintenance);
  }, [maintenance]);

  const [techAffectsSale, setTechAffectsSale] = useState(() =>
    localStorage.getItem('techAffectsSale') ? parseInt(localStorage.getItem('techAffectsSale')) === 'yes' : false
  );
  useEffect(() => {
    localStorage.setItem('techAffectsSale', techAffectsSale ? 'yes' : 'no');
  }, [techAffectsSale]);

  const [tlMultiplier, setTLMultiplier] = useState(() =>
    localStorage.getItem('tlMultiplier') ? parseInt(localStorage.getItem('tlMultiplier')) : 1
  );
  useEffect(() => {
    localStorage.setItem('tlMultiplier', tlMultiplier);
  }, [tlMultiplier]);

  const [basePriceRule, setBasePriceRule] = useState(() =>
    localStorage.getItem('basePriceRule') ? localStorage.getItem('basePriceRule') : 'raw'
  );
  useEffect(() => {
    localStorage.setItem('basePriceRule', basePriceRule);
  }, [basePriceRule]);

  const expensesPerTon = () => {
    if (cargo === 0)
      return 0;
    return Math.round(((mortgage + maintenance)/2 + fuelCost)/cargo);
  }

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
            <Row>
              <Col>
                <Label for="mortgage">
                  Mortgage<sup>4</sup>
                </Label>
                <Input
                  id="mortgage"
                  size={'sm'}
                  name="mortgage"
                  value={mortgage}
                  type="number"
                  onChange={(e) => {setMortgage(parseInt(e.target.value))}}
                />
              </Col>
              <Col>
                <Label for="maintenance">
                  Maintenance<sup>4</sup>
                </Label>
                <Input
                  id="maintenance"
                  size={'sm'}
                  name="maintenance"
                  value={maintenance}
                  type="number"
                  onChange={(e) => {setMaintenance(parseInt(e.target.value))}}
                />
              </Col>
              <Col>
                <Label for="fuelCost">
                  Fuel Cost<sup>5</sup>
                </Label>
                <Input
                  id="fuelCost"
                  size={'sm'}
                  name="fuelCost"
                  value={fuelCost}
                  type="number"
                  onChange={(e) => {setFuelCost(parseInt(e.target.value))}}
                />
              </Col>
            </Row>
            <Row>
              <Col className="text-left">
                <div className="expenses">
                  Expenses per ton<sup>7</sup>: {expensesPerTon()}
                </div> </Col>
            </Row>
            <hr/>
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
            </FormGroup>
            <Row>
              <Col><h4>Source</h4></Col>
            </Row>
            <Row>
              <Col>
                <Label for="sourceStarport">
                  Starport
                </Label>
                <Input
                  id="sourceStarport"
                  name="sourceStarport"
                  type="select"
                  size={'sm'}
                  value={sourceStarport}
                  onChange={(e)=> {setSourceStarport(e.target.value)}}
                >
                  {StartportCodes.map((c) => {
                    return (<option value={c}>{c}</option>);
                  })}
                </Input>
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
              <Col>
                <Label for="sourcePop">
                  Population
                </Label>
                <Input
                  id="sourcePop"
                  size={'sm'}
                  name="sourcePop"
                  value={sourcePop}
                  type="number"
                  onChange={(e) => {setSourcePop(parseInt(e.target.value))}}
                />
              </Col>
              <Col>
                <Label for="sourceTL">
                  Tech Level
                </Label>
                <TechLevel tl={sourceTL} setTL={setSourceTL}/>
              </Col>
            </Row>
            <FormGroup>
              <Label for="sourceTCs">
                Trade Codes
              </Label>
              <TradeCodeSelector selected={sourceTCs} toggleCode={toggleSourceTC}/>
            </FormGroup>
            <Row>
              <Col><h4>Destination</h4></Col>
            </Row>
            <Row>
              <Col>
                <Label for="destinationStarport">
                  Starport
                </Label>
                <Input
                  id="destinationStarport"
                  name="destinationStarport"
                  type="select"
                  size={'sm'}
                  value={destinationStarport}
                  onChange={(e)=> {setDestinationStarport(e.target.value)}}
                >
                  {StartportCodes.map((c) => {
                    return (<option value={c}>{c}</option>);
                  })}
                </Input>
              </Col>
              <Col>
                <Label for="destinationTL">
                  Tech Level
                </Label>
                <TechLevel tl={destinationTL} setTL={setDestinationTL}/>
                <FormGroup switch className="text-left">
                  <Input
                    type="switch"
                    role="switch"
                    checked={techAffectsSale}
                    onClick={() => setTechAffectsSale(!techAffectsSale)}
                  />
                  <Label check>Tech affects sale</Label>
                </FormGroup>
                {techAffectsSale && <Col>
                  <Row>
                    <Col>
                      <Label for="tlMultiplier">
                        % mult<sup>6</sup>
                      </Label>
                    </Col>
                    <Col>
                      <Input
                        id="tlMultiplier"
                        size={'sm'}
                        name="tlMultiplier"
                        value={tlMultiplier}
                        type="number"
                        min={1}
                        onChange={(e) => {setTLMultiplier(parseInt(e.target.value))}}
                      />
                    </Col>
                  </Row>
                </Col>}
              </Col>
            </Row>
            <FormGroup>
              <Label for="destinationTCs">
                Trade Codes
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
                  <th className="br">
                    Base Price<sup>8</sup>
                    <Input
                      id="basePrice"
                      name="basePrice"
                      type="select"
                      size={'sm'}
                      value={basePriceRule}
                      onChange={(e)=> {setBasePriceRule(e.target.value)}}
                    >
                      <option value="raw">RAW</option>
                      <option value="75%">75 %</option>
                    </Input>
                  </th>
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
                  <th colSpan={2}>Profit<sup>9</sup></th>
                </tr>
              </thead>
              {availableGoods.map(g => {
                const pDM = purchaseDM(g, sourceTCs);
                const sDM = saleDM(g, destinationTCs);
                const exp = expensesPerTon();
                const tons = Math.min(maxTons(g, lotSize, sourcePop), cargo);
                const effectiveBroker = brokerHired ? 4 : broker;
                let basePrice = g.price;
                if (basePriceRule === '75%' && basePrice > 50000)
                  basePrice = Math.round(basePrice * .75);
                let avgPurchase = averagePurchasePrice(basePrice, pDM, effectiveBroker, brokerRule, brokerMultiplier, basePriceRule);
                if (brokerHired)
                  avgPurchase = Math.round(avgPurchase /= 0.9);
                let avgSale = averageSalePrice(basePrice, sDM, broker, brokerRule, brokerMultiplier);
                if (techAffectsSale && g.techSensitive)
                  avgSale = Math.round(avgSale * (1+tlMultiplier*(sourceTL - destinationTL)/100))
                const savings = Math.round((basePrice - avgPurchase)*tons);
                const profit = Math.round((avgSale - avgPurchase)*tons);
                const expProfit = Math.round((avgSale - avgPurchase - exp)*tons);
                return (
                  <tr>
                    <td>{g.name}</td>
                    <td className="number br">{basePrice.toLocaleString()}</td>
                    <td>{pDM}</td>
                    <td className="number">{avgPurchase.toLocaleString()}</td>
                    <td>{tons}</td>
                    <td className={`number br ${savings<0 ? 'loss': ''}`}>{savings.toLocaleString()}</td>
                    <td>{sDM}</td>
                    <td className="number br">{avgSale.toLocaleString()}</td>
                    <td className={`number ${profit<0 ? 'loss': ''}`}>
                      {profit.toLocaleString()}
                    </td>
                    <td className={`number ${expProfit < 0 ? 'loss' : ''}`}>
                      {expProfit.toLocaleString()}
                    </td>
                  </tr>
                );
              })}
            </Table>
            <h3>Notes</h3>
            <Row className={'note'}>
              <Col>Mongoose Traveller 2022 ruleset</Col>
            </Row>
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
            <Row className='note'>
              <Col><sup>4</sup>Per month</Col>
            </Row>
            <Row className='note'>
              <Col><sup>5</sup>Per jump</Col>
            </Row>
            {techAffectsSale &&
              <Row className='note'>
                <Col>
                  <sup>6</sup>
                  Multiplier on the tech level percent. E.g. a multiplier of 2 and a tech difference of 4 results in an 8% change in the sale price
                  Goods affected by tech are: {Goods.filter(g => g.techSensitive).map(g => g.name).join(', ')}
                </Col>
              </Row>
            }
            <Row className='note'>
              <Col><sup>7</sup>Expenses per ton assume 2 jumps per month. The model does not account for freight, passengers, or mail</Col>
            </Row>
            <Row className='note'>
              <Col><sup>8</sup>{BasePriceRuleNotes[basePriceRule]}</Col>
            </Row>
            <Row className='note'>
              <Col><sup>9</sup>The first column is sale - purchase. The second column factors in expense per ton</Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

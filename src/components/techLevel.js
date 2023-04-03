import {Input} from "reactstrap";
import HexCodes from "../hexCodes";

export default function TechLevel({tl, setTL}) {
  const tls = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
  return (
    <Input
      type="select"
      size={'sm'}
      value={tl}
      onChange={(e)=> {setTL(e.target.value)}}
      >
      {tls.map((t) => {
        return (<option value={t}>{HexCodes[t]}</option>)
      })}
    </Input>
  );
}

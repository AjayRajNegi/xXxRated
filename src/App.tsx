import Lenis from "lenis";
import { useEffect } from "react";
import { Route, Routes } from "react-router";
import {
  Home,
  Product,
  Contact,
  About,
  ForeplayG,
  IntimateG,
  NaughtyG,
  SensualG,
  BoldN,
  ClimaxN,
  DirtyN,
  HardN,
  BlueZ,
  BlackZ,
  WhiteZ,
  Hotshot,
  Pocket,
  WhiteOud,
  RedOud,
  BlueOud,
  GreenOud,
  BlackOud,
  BoldP,
  ClimaxP,
  DirtyP,
  HardP,
  HotshotM,
  ComboZ,
  ComboN,
  ComboO,
} from "./components/Index";
import PleasureG from "./components/ProductPages/Categories/Gas/PleasureG";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>

        {/* OUD */}
        <Route path="/whiteOUD" element={<WhiteOud />}></Route>
        <Route path="/redOUD" element={<RedOud />}></Route>
        <Route path="/blueOUD" element={<BlueOud />}></Route>
        <Route path="/greenOUD" element={<GreenOud />}></Route>
        <Route path="/blackOUD" element={<BlackOud />}></Route>
        <Route path="/comboO" element={<ComboO />}></Route>

        {/* Gas */}
        <Route path="/foreplayG" element={<ForeplayG />}></Route>
        <Route path="/intimateG" element={<IntimateG />}></Route>
        <Route path="/naughtyG" element={<NaughtyG />}></Route>
        <Route path="/pleasureG" element={<PleasureG />}></Route>
        <Route path="/sensualG" element={<SensualG />}></Route>

        {/* NoGas */}
        <Route path="/boldN" element={<BoldN />}></Route>
        <Route path="/climaxN" element={<ClimaxN />}></Route>
        <Route path="/dirtyN" element={<DirtyN />}></Route>
        <Route path="/hardN" element={<HardN />}></Route>
        <Route path="/comboN" element={<ComboN />}></Route>

        {/* Zipline */}
        <Route path="/blueZ" element={<BlueZ />}></Route>
        <Route path="/blackZ" element={<BlackZ />}></Route>
        <Route path="/whiteZ" element={<WhiteZ />}></Route>
        <Route path="/comboZ" element={<ComboZ />}></Route>

        {/* Hotshot */}

        <Route path="/hotshot" element={<Hotshot />}></Route>
        <Route path="/hotshotM" element={<HotshotM />}></Route>

        {/* Pocket */}
        <Route path="/pocket" element={<Pocket />}></Route>
        <Route path="/boldP" element={<BoldP />}></Route>
        <Route path="/climaxP" element={<ClimaxP />}></Route>
        <Route path="/dirtyP" element={<DirtyP />}></Route>
        <Route path="/hardP" element={<HardP />}></Route>
      </Routes>
    </>
  );
};

export default App;

import Flexbox from "./components/Flexbox";
import { FlexboxItem } from "./components/Flexbox/Flexbox";
import * as React from "react";
import "./App.css";
function App() {
  return (
    <>
      <p>Demonstrate justify content space-between behavior</p>
      <Flexbox spaceBetween>
        <FlexboxItem>
          <div style={{backgroundColor: 'red'}}>Item 1</div>
        </FlexboxItem>
        <FlexboxItem>
          <div style={{backgroundColor: 'blue'}}>Item 2</div>
        </FlexboxItem>
        <FlexboxItem>
          <div style={{backgroundColor: 'green'}}>Item 3</div>
        </FlexboxItem>
        <FlexboxItem>
          <div style={{backgroundColor: 'purple'}}>Item 4</div>
        </FlexboxItem>
      </Flexbox>
      <p>Demonstrate list of elements with custom length</p>
      <Flexbox>
        <FlexboxItem>
          <div style={{backgroundColor: 'red'}}>Item 1</div>
        </FlexboxItem>
        <FlexboxItem>
          <div style={{backgroundColor: '#ffa500'}}>Item 2</div>
        </FlexboxItem>
      </Flexbox>
      <p>Demonstrate list element aligning</p>
      <Flexbox>
        <FlexboxItem align="center">
          <div style={{backgroundColor: 'red'}}>Item 1</div>
        </FlexboxItem>
        <FlexboxItem>
          <div style={{backgroundColor: '#ffa500'}}>Item 2</div>
        </FlexboxItem>
      </Flexbox>
      <p>Demonstrate different flex sizing</p>
      <Flexbox>
        <FlexboxItem size={3}>
          <div style={{backgroundColor: 'red'}}>Item 1</div>
        </FlexboxItem>
        <FlexboxItem size={1}>
          <div style={{backgroundColor: '#ffa500'}}>Item 2</div>
        </FlexboxItem>
      </Flexbox>
      <p>Demonstrate gap between cells X</p>
      <Flexbox gap="20px">
        <FlexboxItem>
          <div style={{backgroundColor: 'red'}}>Item 1</div>
        </FlexboxItem>
        <FlexboxItem>
          <div style={{backgroundColor: '#ffa500'}}>Item 2</div>
        </FlexboxItem>
      </Flexbox>
    </>
  );
}

export default App;

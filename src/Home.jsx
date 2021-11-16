import React, { useState } from 'react';
import styled from 'styled-components';
import './Home.css';

const StyledControlBar = styled.div`
  height: 50px;
  color: whitesmoke;
  background-color: #023047;
  padding: 0px 30px 0px 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-size: 20px;
  }
  select {
    padding: 3px;
    border: none;
    border-radius: 6px;
  }
  label {
    margin-right: 5px;
    margin-left: 15px;
  }
`;

const GridContainer = styled.div`
  /* background-color: purple; */
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  background-color: #8ecae6;
  padding: var(--main-padding);
  display: grid;
  gap: var(--grid-gap) var(--grid-gap);

  /* grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 300px 300px 300px max-content;
  grid-template-areas:
    'widgetOne widgetOne widgetOne'
    'widgetTwo widgetTwo widgetThree'
    'widgetFour widgetFour widgetThree'
    'widgetFour widgetFour widgetFive'; */
`;

const GridContainerTwo = styled.div`
  --main-padding: 30px;
  /* background-color: purple; */
  background-color: #8ecae6;
  padding: var(--main-padding);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 200px 200px max-content;
`;

const Widget = styled.div`
  /* height: 100%; */
  width: 100%;
  border-radius: 6px;
  color: white;
  background-color: ${(props) => props.widgetColor || '#ee6c4d'};
  grid-area: ${(props) => props.grid_area || '#ee6c4d'};
  height: ${(props) => props.customHeight || '100%'};
  border: 3px solid ${(props) => props.borderColour || '#ee6c4d'};
  display: flex;
  justify-content: center;
  align-items: center;
  .element {
    transition: all 0.8s ease;
  }
  h1 {
    font-size: 30px;
  }
`;

const WidgetOne = () => {
  return (
    <Widget
      widgetColor="#489340"
      borderColour="hsl(114.2, 39.3%, 31.4%)"
      grid_area="widgetOne"
    >
      <h1>WidgetOne</h1>
    </Widget>
  );
};

const WidgetTwo = () => {
  return (
    <Widget
      widgetColor="#859F2C"
      borderColour="hsl(73.6, 56.7%, 29.8%)"
      grid_area="widgetTwo"
    >
      <h1>WidgetTwo</h1>
    </Widget>
  );
};

const WidgetThree = () => {
  return (
    <Widget
      widgetColor="#C2AB18"
      borderColour="hsl(51.9, 78%, 32.7%)"
      grid_area="widgetThree"
      customHeight="300px"
    >
      <h1>WidgetThree</h1>
    </Widget>
  );
};

const WidgetFour = () => {
  return (
    <Widget
      widgetColor="#E1B10E"
      borderColour="hsl(46.4, 88.3%, 36.9%)"
      grid_area="widgetFour"
      customHeight="600px"
    >
      <h1>WidgetFour</h1>
    </Widget>
  );
};

const WidgetFive = () => {
  return (
    <Widget
      widgetColor="#FFB703"
      borderColour="hsl(42.9, 100%, 40.6%)"
      grid_area="widgetFive"
      customHeight="400px"
    >
      <h1>WidgetFive</h1>
    </Widget>
  );
};

const WidgetSix = () => {
  return (
    <Widget
      widgetColor="#FD9E02"
      borderColour="hsl(37.3, 98.4%, 40%)"
      grid_area="widgetSix"
    >
      <h1>WidgetSix</h1>
    </Widget>
  );
};

const ControlBar = ({ layout, setLayout }) => {
  const onRowModeChange = (e, modeSetter) => {
    modeSetter(e.target.value);
  };

  return (
    <StyledControlBar>
      <h1>Widgets Framework Prototype</h1>
      <div>
        <label htmlFor="layout">Layout</label>
        <select
          value={layout}
          onChange={(e) => onRowModeChange(e, setLayout)}
          name="layout"
          id="layout"
        >
          <option value="gridStyleOne">Layout one</option>
          <option value="gridStyleTwo">Layout two</option>
          <option value="gridStyleThree">Layout three</option>
        </select>
      </div>
    </StyledControlBar>
  );
};

export default function Home() {
  const [layout, setLayout] = useState('gridStyleTwo');

  return (
    <>
      <ControlBar layout={layout} setLayout={setLayout} />
      <GridContainer className={layout}>
        <WidgetOne />
        <WidgetTwo />
        <WidgetThree />
        <WidgetFour />
        <WidgetFive />
        {/* <WidgetSix /> */}
      </GridContainer>
    </>
  );
}

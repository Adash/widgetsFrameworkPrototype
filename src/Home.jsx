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
    font-size: 15px;
  }
  label {
    margin-right: 5px;
    margin-left: 15px;
  }
`;

const HomeContainer = styled.div`
  /* background-color: purple; */
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  background-color: #8ecae6;
  padding: 30px;
`;

const StyledLayoutOne = styled.div`
  display: grid;
  gap: var(--grid-gap) var(--grid-gap);
  --grid-gap: 30px;
  grid-template-columns: minmax(300px, 1fr) minmax(300px, 1fr) 330px;
  grid-template-rows: max-content max-content max-content max-content;
  grid-template-areas:
    'widgetOne widgetOne widgetOne'
    'widgetTwo widgetTwo widgetThree'
    'widgetFour widgetFour widgetThree'
    'widgetFour widgetFour widgetFive';
`;

const StyledLayoutTwo = styled.div`
  display: grid;
  gap: var(--grid-gap) var(--grid-gap);
  --grid-gap: 30px;
  grid-template-columns: minmax(300px, 1fr) minmax(300px, 1fr) 330px;
  grid-template-rows: max-content max-content max-content max-content max-content;
  grid-template-areas:
    'widgetOne widgetOne widgetOne'
    'widgetFour widgetFour widgetThree'
    'widgetFour widgetFour widgetFive'
    'widgetTwo widgetTwo widgetFive'
    'widgetTwo widgetTwo widgetFive';
`;

const StyledLayoutThree = styled.div`
  display: grid;
  gap: var(--grid-gap) var(--grid-gap);
  --grid-gap: 30px;
  grid-template-columns: minmax(300px, 1fr) minmax(300px, 1fr) 330px;
  grid-template-rows: max-content max-content max-content max-content;
  grid-template-areas:
    'widgetFour widgetFour widgetFive'
    'widgetFour widgetFour widgetSix'
    'widgetOne widgetOne widgetOne'
    'widgetTwo widgetTwo widgetThree';
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

const WidgetOne = ({ widgetHeight = '' }) => {
  return (
    <Widget
      widgetColor="#489340"
      borderColour="hsl(114.2, 39.3%, 31.4%)"
      grid_area="widgetOne"
      customHeight={widgetHeight}
    >
      <h1>WidgetOne</h1>
    </Widget>
  );
};

const WidgetTwo = ({ widgetHeight = '' }) => {
  return (
    <Widget
      widgetColor="#859F2C"
      borderColour="hsl(73.6, 56.7%, 29.8%)"
      grid_area="widgetTwo"
      customHeight={widgetHeight}
    >
      <h1>WidgetTwo</h1>
    </Widget>
  );
};

const WidgetThree = ({ widgetHeight = '' }) => {
  return (
    <Widget
      widgetColor="#C2AB18"
      borderColour="hsl(51.9, 78%, 32.7%)"
      grid_area="widgetThree"
      customHeight={widgetHeight}
    >
      <h1>WidgetThree</h1>
    </Widget>
  );
};

const WidgetFour = ({ widgetHeight = '' }) => {
  return (
    <Widget
      widgetColor="#E1B10E"
      borderColour="hsl(46.4, 88.3%, 36.9%)"
      grid_area="widgetFour"
      customHeight={widgetHeight}
    >
      <h1>WidgetFour</h1>
    </Widget>
  );
};

const WidgetFive = ({ widgetHeight = '' }) => {
  return (
    <Widget
      widgetColor="#FFB703"
      borderColour="hsl(42.9, 100%, 40.6%)"
      grid_area="widgetFive"
      customHeight={widgetHeight}
    >
      <h1>WidgetFive</h1>
    </Widget>
  );
};

const WidgetSix = ({ widgetHeight = '' }) => {
  return (
    <Widget
      widgetColor="#FD9E02"
      borderColour="hsl(37.3, 98.4%, 40%)"
      grid_area="widgetSix"
      customHeight={widgetHeight}
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
          <option value="layoutOne">Layout one</option>
          <option value="layoutTwo">Layout two</option>
          <option value="layoutThree">Layout three</option>
        </select>
      </div>
    </StyledControlBar>
  );
};

const LayoutOne = () => {
  return (
    <StyledLayoutOne>
      <WidgetOne widgetHeight="280px" />
      <WidgetTwo widgetHeight="200px" />
      <WidgetThree widgetHeight="460px" />
      <WidgetFour widgetHeight="660px" />
      <WidgetFive widgetHeight="400px" />
    </StyledLayoutOne>
  );
};

const LayoutTwo = () => {
  return (
    <StyledLayoutTwo>
      <WidgetOne widgetHeight="280px" />
      <WidgetTwo widgetHeight="200px" />
      <WidgetThree widgetHeight="460px" />
      <WidgetFour widgetHeight="660px" />
      <WidgetFive widgetHeight="400px" />
    </StyledLayoutTwo>
  );
};

const LayoutThree = () => {
  return (
    <StyledLayoutThree>
      <WidgetOne widgetHeight="280px" />
      <WidgetTwo widgetHeight="200px" />
      <WidgetThree widgetHeight="460px" />
      <WidgetFour widgetHeight="660px" />
      <WidgetFive widgetHeight="400px" />
      <WidgetSix widgetHeight="230px" />
    </StyledLayoutThree>
  );
};

export default function Home() {
  const [layout, setLayout] = useState('layoutOne');

  return (
    <>
      <ControlBar layout={layout} setLayout={setLayout} />
      <HomeContainer>
        {layout === 'layoutOne' ? <LayoutOne /> : null}
        {layout === 'layoutTwo' ? <LayoutTwo /> : null}
        {layout === 'layoutThree' ? <LayoutThree /> : null}
      </HomeContainer>
    </>
  );
}

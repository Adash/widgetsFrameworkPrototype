import React, { useState } from 'react';
import styled from 'styled-components';

const StyledControlBar = styled.div`
  height: 50px;
  color: whitesmoke;
  background-color: #282c34;
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

const HomeWrapper = styled.div`
  --main-padding: 30px;

  /* width: 100%; */
  background-color: purple;
  padding: var(--main-padding);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: flex-start;
  row-gap: 30px;
`;
const FullWidthWidgetWrapper = styled.div`
  /* width: calc(100% - var(--main-padding)); */
  width: 100%;
  height: 200px;
`;

const OneThirdWidgetWrapper = styled.div`
  /* width: calc(30% - var(--main-padding) * 2); */
  width: 30%;
  height: 200px;
`;

const TwoThirdWidgetWrapper = styled.div`
  /* width: calc(30% - var(--main-padding) * 2); */
  width: 65%;
  height: 200px;
`;

const OneThirdWidgetLongWrapper = styled.div`
  /* width: calc(30% - var(--main-padding) * 2); */
  flex: 0 0 300px;
  height: 400px;
`;
const Widget = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 6px;
  color: white;
  background-color: ${(props) => props.widgetColor || '#ee6c4d'};
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 30px;
  }
`;

const WidgetOne = () => {
  return (
    <Widget widgetColor="seagreen">
      <h1>WidgetOne</h1>
    </Widget>
  );
};

const WidgetTwo = () => {
  return (
    <Widget widgetColor="teal">
      <h1>WidgetTwo</h1>
    </Widget>
  );
};

const WidgetThree = () => {
  return (
    <Widget widgetColor="lightblue">
      <h1>WidgetThree</h1>
    </Widget>
  );
};

const WidgetFour = () => {
  return (
    <Widget widgetColor="grey">
      <h1>WidgetFour</h1>
    </Widget>
  );
};

const WidgetFive = () => {
  return (
    <Widget widgetColor="pink">
      <h1>WidgetFive</h1>
    </Widget>
  );
};

const WidgetSix = () => {
  return (
    <Widget widgetColor="orange">
      <h1>WidgetSix</h1>
    </Widget>
  );
};

const Row = ({ widgetOne, widgetTwo, widgetThree, mode = 'fullWidth' }) => {
  if (mode === 'fullWidth') {
    return (
      <FullWidthWidgetWrapper>
        {widgetOne && widgetOne()}
      </FullWidthWidgetWrapper>
    );
  }
  if (mode === 'oneThird') {
    return (
      <>
        <OneThirdWidgetWrapper>
          {widgetOne && widgetOne()}
        </OneThirdWidgetWrapper>
        <OneThirdWidgetWrapper>
          {widgetTwo && widgetTwo()}
        </OneThirdWidgetWrapper>
        <OneThirdWidgetWrapper>
          {widgetThree && widgetThree()}
        </OneThirdWidgetWrapper>
      </>
    );
  }
  if (mode === 'twoThird') {
    return (
      <>
        <TwoThirdWidgetWrapper>
          {widgetOne && widgetOne()}
        </TwoThirdWidgetWrapper>
        <OneThirdWidgetWrapper>
          {widgetTwo && widgetTwo()}
        </OneThirdWidgetWrapper>
      </>
    );
  }
};

const ControlBar = ({
  firstRowMode,
  setFirstRowMode,
  secondRowMode,
  setSecondRowMode,
  thirdRowMode,
  setThirdRowMode,
}) => {
  const onRowModeChange = (e, modeSetter) => {
    modeSetter(e.target.value);
  };

  return (
    <StyledControlBar>
      <h1>Widgets Framework Prototype</h1>
      <div>
        <label htmlFor="firstRow">First row</label>
        <select
          value={firstRowMode}
          onChange={(e) => onRowModeChange(e, setFirstRowMode)}
          name="firstRow"
          id="firstRow"
        >
          <option value="fullWidth">Full Width</option>
          <option value="oneThird">One Third</option>
          <option value="twoThird">Two Third</option>
        </select>
        <label htmlFor="secondRow">Second row</label>
        <select
          value={secondRowMode}
          onChange={(e) => onRowModeChange(e, setSecondRowMode)}
          name="secondRow"
          id="secondRow"
        >
          <option value="fullWidth">Full Width</option>
          <option value="oneThird">One Third</option>
          <option value="twoThird">Two Third</option>
        </select>
        <label htmlFor="thirdRow">Third row</label>
        <select
          value={thirdRowMode}
          onChange={(e) => onRowModeChange(e, setThirdRowMode)}
          name="thirdRow"
          id="thirdRow"
        >
          <option value="fullWidth">Full Width</option>
          <option value="oneThird">One Third</option>
          <option value="twoThird">Two Third</option>
        </select>
      </div>
    </StyledControlBar>
  );
};

export default function Home() {
  const [firstRowMode, setFirstRowMode] = useState('fullWidth');
  const [secondRowMode, setSecondRowMode] = useState('oneThird');
  const [thirdRowMode, setThirdRowMode] = useState('twoThird');

  return (
    <>
      <ControlBar
        firstRowMode={firstRowMode}
        setFirstRowMode={setFirstRowMode}
        secondRowMode={secondRowMode}
        setSecondRowMode={setSecondRowMode}
        thirdRowMode={thirdRowMode}
        setThirdRowMode={setThirdRowMode}
      />
      <HomeWrapper>
        <Row widgetOne={WidgetOne} mode={firstRowMode} />
        <Row
          widgetOne={WidgetTwo}
          widgetTwo={WidgetThree}
          widgetThree={WidgetFour}
          mode={secondRowMode}
        />
        <Row widgetOne={WidgetFive} widgetTwo={WidgetSix} mode={thirdRowMode} />
      </HomeWrapper>
    </>
  );
}

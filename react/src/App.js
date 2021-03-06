import Add from './components/Add';
import Counter from './components/Counter';
import CounterList from './components/CounterList'
import CreateSimpleJsxElement from './components/01createSimpleJsxElement'
import CreateComplexJsxElement from './components/02CreateComplexJsxElement'
import AddCommentsJsx from './components/03addCommentsJsx'
import RenderHtmlElementsToTheDom from './components/04renderReactElementsToTheDom'
import DefineAnHtmlClassInJsx from './components/05defineAnHtmlClassInJsx'
import SelfClosingJsxTags from './components/06selfClosingJsxTags'
import CreateStatelessFunctionalComponent from './components/07createStatelessFunctionalComponent'
import CreateAreactComponent from './components/08createAreactComponent'
import CreateAComponentWithComposition from './components/09createAComponentWithComposition'
import {TypesOfFood} from './components/10useReactToRenderNestedComponents'
import {TypesOfFood11} from './components/11ComposeReactComponents'
import {TypesOfFood12} from './components/12RenderAClassComponentToTheDom'
import {Calendar} from './components/13passPropsToAStatelessFunctionalComponent'
import {ToDo} from './components/14passAnArrayAsProps'
import ShoppingCart from './components/15useDefaultProps'
import {ShoppingCart16} from './components/16overrideDefaultProps'
import {ShoppingCart17} from './components/17usePropTypesToDefineThePropsYouExpect'
import {App18} from './components/18accessPropsUsingThisProps'
import {CampSite19} from './components/19reviewUsingPropsWithStatelessFunctionalComponents'
import CreateAstatefulComponent20 from './components/20createAstatefulComponent'
import MyComponent from './components/21renderStateInTheUserInterface';
import MyComponent22 from './components/22renderStateInTheUserInterfaceAnotherWay';
import React from 'react'

function App() {
  return (
    <div>
        <p>
          JSX transpiled to JS <code>src/App.js</code>.
        </p>
        <header><Add /></header>
        <Counter />
        <CounterList />
        <CreateSimpleJsxElement />
        <CreateComplexJsxElement />
        <AddCommentsJsx />
        <RenderHtmlElementsToTheDom />
        <DefineAnHtmlClassInJsx />
        <SelfClosingJsxTags />
        <CreateStatelessFunctionalComponent />
        <CreateAreactComponent />
        <CreateAComponentWithComposition />
        {/* Use React To Render Nested Components */}
        <TypesOfFood />
        {/* Compose React Elements */}
        <TypesOfFood11 />
        {/* Render a class component to the DOM */}
        <TypesOfFood12 />
        {/* Pass Props To A Stateless Functional Component */}
        <Calendar />
        {/* Pass An Array As Props */}
        <ToDo />
        {/* Use Default Props  */}
        <ShoppingCart />
        {/* Override Default Props */}
        <ShoppingCart16/>
        {/* Use PropTypes To Define The Props You Expect */}
        <ShoppingCart17 />
        {/* Access Props Using this.props */}
        <App18 />
        {/* Review Using Props With Stateless Functional Components */}
        <CampSite19 /> 
         {/*Create A Stateful Component  */}
         <CreateAstatefulComponent20 />
         {/* 21 render a state in the user interface */}
         <MyComponent />
         {/* 22 Render State in the user interface another way */}
         <MyComponent22 />
    </div>
  );
}

export default App;


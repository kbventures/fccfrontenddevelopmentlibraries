import {Calendar, CurrentDate} from '../components/13passPropsToAStatelessFunctionalComponent';


describe('Pass Props to a Stateless Functional Component', () => {

    let wrapperCalendar;
    let wrapperCurrentDate;

    beforeEach(() => {
        wrapperCalendar = shallow(<Calendar />);
        wrapperCurrentDate = shallow(<CurrentDate />)

   });

    it('The Calendar component should return a single div element.', () => {  
        expect(wrapperCalendar.at(0).exists('div')).toBe(true)     
    });

    it('The second child of the Calendar component should be the CurrentDate component.', ()=>{
        expect(wrapperCalendar.children(0).at(1).exists('CurrentDate')).toBe(true)
    })
});


// The date prop of the CurrentDate should contain a string of text.

// The date prop should be generated by calling Date()

// The CurrentDate component should render the value from the date prop in the p tag.
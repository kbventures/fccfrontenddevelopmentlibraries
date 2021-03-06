import DefineAnHtmlClassInJsx from '../components/05defineAnHtmlClassInJsx';

describe('Define an HTML Class in JSX', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<DefineAnHtmlClassInJsx />);
   });

   
    it('The constant JSX should return a div element.', () => {
        const wrapperLength = wrapper.length;
        expect(wrapperLength).toEqual(1)
        expect(wrapper.at(0).exists('div') )
    });

    it('The provided JSX element should render to the DOM node with id challenge-node.', ()=>{
        expect(wrapper.contains( <div className='myDiv'>
        <h1>Add a class to this div</h1>
      </div>)).toEqual(true)    
    })
});
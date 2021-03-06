import CreateStatelessFunctionalComponent from '../components/07createStatelessFunctionalComponent';

// MyComponent should return JSX.


describe('Learn About Self-Closing JSX Tags', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<CreateStatelessFunctionalComponent />);
   });

    it('MyComponent should return a div element..', () => {
        const wrapperLength = wrapper.length;
        expect(wrapperLength).toEqual(1)
        expect(wrapper.at(0).exists('div') )
    });

    it('The div element should contain a string of text.', ()=>{
        const text = wrapper.at(0).text()
        expect(text).toBe('Some Text')
    })

    it('The div element should contain a string of text.', ()=>{
        let wrapperType = wrapper.type()
        expect(wrapperType).toEqual('div')
    })

    it('MyComponent should return JSX.', ()=>{
        expect(wrapper.contains(<div>Some Text</div>)).toEqual(true)    
    })
});

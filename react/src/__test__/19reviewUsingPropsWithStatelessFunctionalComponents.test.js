import {CampSite19, Camper} from '../components/19reviewUsingPropsWithStatelessFunctionalComponents';


// The CampSite component should render.

// The Camper component should render.

// The Camper component should include default props which assign the string CamperBot to the key name.

// The Camper component should include prop types which require the name prop to be of type string.

// The Camper component should contain a p element with only the text from the name prop.
describe('Pass Array As Props', () => {

    let wrapperCampSite19Mount;
    let wrapperCampSite19Shallow;
    let wrapperCamperMount;
    let wrapperCamperShallow;

    beforeEach(() => {
        wrapperCampSite19Mount = mount(<CampSite19 />);
        wrapperCampSite19Shallow = shallow(<CampSite19 />);
        wrapperCamperMount = mount(<Camper />);
        wrapperCamperShallow = shallow(<Camper />);
   });

    it('The App component should return a single div element', () => {
  
    });        
});
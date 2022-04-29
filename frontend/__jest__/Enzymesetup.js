
// 启动 enzyme 并添加对应 react 版本的适配器
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

export default Enzyme

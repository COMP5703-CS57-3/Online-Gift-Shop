import React from 'react'
import Enzyme from '../../Enzyme.setup';
import LogIn from "../../../src/Components/login";
import { render, fireEvent, RenderResult } from '@testing-library/react';
import {useApp} from "../../../src/tools/useApp";


const {shallow} = Enzyme
const {setLogin}=useApp()
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useLocation: () => ({
        pathname: "localhost:3000/"
    })
}));
let wrapper
beforeEach(() => {
  wrapper = render(<LogIn />);
});
const mockUseLocationValue = {
    pathname: "http://localhost:3000",

}
describe('Should render App component correctly', () => {
  // 初始化文本内容为 "Hello World!"
  test('Should render "Sign In" correctly', () => {
    // getByTestId: 通过属性 data-testid 来获取对应的  DOM
    // 这里我们获取到的是上面 HelloWorld 组件中的 div 标签
    const app = wrapper.getByText('Sign In');
    expect(app).toBeInTheDocument();
    // 判断获取到的标签是否是 div
    expect(app.tagName).toEqual('h2');
    // 判断 div 标签的 text 是否匹配正则 /world/i
    // expect(app.textContent).toMatch(/world/i);
  })
})
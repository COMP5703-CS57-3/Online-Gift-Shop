import React from 'react'
import {render} from "@testing-library/react";
import LogIn from "../../../src/Components/login";

jest.mock("react-router-dom", () => {
    const originalModule = jest.requireActual('react-router-dom');
    return {
        __esModule: true,
        ...originalModule,
        default: () => ({
            useLocation: jest.fn
        })
    };
});

describe('测试', () => {
    it('测试 snapshot', () => {
        const wrapper = render(<Router><LogIn/></Router>)
        expect(wrapper).toMatchSnapshot()
    })
})




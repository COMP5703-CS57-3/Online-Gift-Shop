import React from 'react';
// import {useAdmin} from "../../../src/tools/useAdmin";

jest.mock('../../../src/tools/useAdmin', () => {
    const originalModule = jest.requireActual('../../../src/tools/useAdmin');
    return {
        __esModule: true,
        ...originalModule,
        default: () => ({
            getOrderList: jest.fn,
            getUsers: jest.fn,
            getAllGifts: jest.fn,
            changeItemCount: jest.fn,
            addItems: jest.fn,
            removeItems: jest.fn,
            orderCompleted: jest.fn,
            orderDelivery: jest.fn,
            setGiftIds: jest.fn,
            getTotalWishlist: jest.fn,
            getTotalAccount: jest.fn,
            getTotalOrders: jest.fn,
            getCompleteOrders: jest.fn,
            ChangeStatus: jest.fn,
            getLastOrderList: jest.fn,
        })
    };
});

it('Should get order list', () => {
        const {getOrderList}=useAdmin()

        expect(getOrderList()).toBeDefined();})
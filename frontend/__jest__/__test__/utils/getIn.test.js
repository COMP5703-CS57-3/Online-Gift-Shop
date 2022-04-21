import {getInitials} from "../../../src/logic/get-initials.js"

test('getInitials', () => {
    expect(getInitials()).toBe("·_·");
});
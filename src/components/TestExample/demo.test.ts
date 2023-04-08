import setChecked from "./demo";
import { describe, test, expect } from '@jest/globals'

describe('group name', () => {
    test('simple test', () => {
        const data = {
            id: 10,
            checked: false,
            children: [
                {
                    id: 11,
                    checked: true,
                    children: [],
                },
                {
                    id: 12,
                    checked: false,
                    children: [],
                },
                {
                    id: 11,
                    checked: false,
                    children: [],
                },
            ],
        };

        setChecked(data, 12)

        expect(data.children[1].checked).toBe(true)
    });
});

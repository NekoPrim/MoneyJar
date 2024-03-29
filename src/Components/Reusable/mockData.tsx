export interface MockUsers {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    url_image: string;
};

export const mockUsers: MockUsers[] = [
    {
        id: 1,
        first_name: 'molly',
        last_name: 'mullberry',
        email: 'mm@moneyjar.com',
        password: '1!Aaaaaa',
        url_image: 'https://p1.hiclipart.com/preview/668/530/361/93-cute-popcorn.jpg',
    },
    {
        id: 2,
        first_name: 'elton',
        last_name: 'john',
        email: 'ej@moneyjar.com',
        password: '1!Aaaaaa',
        url_image: 'https://cdna.artstation.com/p/assets/images/images/043/629/724/large/federico-aristimuno-elton-john.jpg?1637802806',
    },
    {
        id: 3,
        first_name: 'peter',
        last_name: 'pan',
        email: 'pan@moneyjar.com',
        password: '1!Aaaaaa',
        url_image: 'https://toppng.com/uploads/preview/clipart-pumpkin-fairy-tinkerbell-silhouette-11562888603nvv56dtdb3.png',
    },
    {
        id: 4,
        first_name: 'betty',
        last_name: 'boop',
        email: 'bb@moneyjar.com',
        password: '1!Aaaaaa',
        url_image: 'https://www.clipartmax.com/png/small/2-27665_betty-boop-clip-art-betty-boop-coloring-page.png',
    },
];

export enum category_type { BILL, GOAL, STOCK }

export interface MockCategories {
    id: number;
    user_id: number;
    category_name: string;
    type: category_type;
    amount: number | 'NULL';
    date: Date;
};

export const mockCategories: MockCategories[] = [
    {
        id: 1,
        user_id: 1,
        category_name: 'rent',
        type: category_type.BILL,
        amount: 0,
        date: new Date(2023, 2, 11),
    },
    {
        id: 2,
        user_id: 1,
        category_name: 'gas',
        type: category_type.BILL,
        amount: 0,
        date: new Date(2023, 2, 10),
    },
    {
        id: 3,
        user_id: 1,
        category_name: 'food',
        type: category_type.BILL,
        amount: 0,
        date: new Date(2023, 2, 11),
    },
    {
        id: 4,
        user_id: 2,
        category_name: 'outfits',
        type: category_type.BILL,
        amount: 0,
        date: new Date(2023, 1, 1),
    },
    {
        id: 5,
        user_id: 3,
        category_name: 'pixi dust',
        type: category_type.BILL,
        amount: 0,
        date: new Date(2011, 1, 1),
    },
    {
        id: 6,
        user_id: 3,
        category_name: 'neverland',
        type: category_type.GOAL,
        amount: 100000,
        date: new Date(2011, 1, 2),
    },
    {
        id: 7,
        user_id: 2,
        category_name: 'world wide tour',
        type: category_type.GOAL,
        amount: 150000,
        date: new Date(2023, 1, 1),
    },
    {
        id: 8,
        user_id: 3,
        category_name: 'lostBOIcoin',
        type: category_type.STOCK,
        amount: 0,
        date: new Date(2011, 1, 2),
    },
];

export interface MockItems {
    id: number;
    category_id: number;
    place_name:  string | 'NULL',
    amount: number;
    date: Date;
}

export const mockItems: MockItems[] = [
    {
        id: 1,
        category_id: 1,
        place_name: 'NULL',
        amount: 999,
        date: new Date(2023, 2, 28),
    },
    {
        id: 2,
        category_id: 1,
        place_name: 'NULL',
        amount: 999,
        date: new Date(2023, 3, 31),
    },
    {
        id: 3,
        category_id: 2,
        place_name: 'shell',
        amount: 15,
        date: new Date(2023, 2, 11),
    },
    {
        id: 4,
        category_id: 2,
        place_name: 'texico',
        amount: 20,
        date: new Date(2023, 2, 25),
    },
    {
        id: 5,
        category_id: 2,
        place_name: 'shell',
        amount: 15,
        date: new Date(2023, 3, 13),
    },
    {
        id: 6,
        category_id: 3,
        place_name: 'publix',
        amount: 100,
        date: new Date(2023, 2, 10),
    },
    {
        id: 7,
        category_id: 5,
        place_name: 'lost boys',
        amount: 25,
        date: new Date(2012, 5, 12),
    },
    {
        id: 8,
        category_id: 5,
        place_name: 'lost boys',
        amount: 100,
        date: new Date(2017, 4, 1),
    },
    {
        id: 9,
        category_id: 5,
        place_name: 'tinkerbell',
        amount: 50,
        date: new Date(2017, 5, 6),
    },
    {
        id: 10,
        category_id: 6,
        place_name: 'NULL',
        amount: 100,
        date: new Date(2017, 5, 5),
    },
];
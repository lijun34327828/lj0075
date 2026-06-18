const FRUIT_EMOJIS = {
    "红富士苹果": "🍎",
    "香蕉": "🍌",
    "橙子": "🍊",
    "草莓": "🍓",
    "葡萄": "🍇",
    "西瓜": "🍉",
    "桃子": "🍑",
    "梨": "🍐",
    "芒果": "🥭",
    "蓝莓": "🫐",
    "樱桃": "🍒",
    "猕猴桃": "🥝",
};
export { FRUIT_EMOJIS };
const ORDERS_BY_DATE = {
    "2026-06-10": [
        {
            id: "ORD-2026-06-10-0001",
            date: "2026-06-10",
            items: [
                { fruitName: "红富士苹果", quantity: 3, unitPrice: 6.8, subtotal: 20.4 },
                { fruitName: "香蕉", quantity: 2, unitPrice: 4.5, subtotal: 9.0 },
            ],
        },
        {
            id: "ORD-2026-06-10-0002",
            date: "2026-06-10",
            items: [
                { fruitName: "草莓", quantity: 1, unitPrice: 22.0, subtotal: 22.0 },
                { fruitName: "葡萄", quantity: 2, unitPrice: 12.5, subtotal: 25.0 },
            ],
        },
        {
            id: "ORD-2026-06-10-0003",
            date: "2026-06-10",
            items: [
                { fruitName: "西瓜", quantity: 1, unitPrice: 3.2, subtotal: 12.8 },
            ],
        },
        {
            id: "ORD-2026-06-10-0004",
            date: "2026-06-10",
            items: [
                { fruitName: "桃子", quantity: 3, unitPrice: 8.5, subtotal: 25.5 },
                { fruitName: "梨", quantity: 2, unitPrice: 5.8, subtotal: 11.6 },
            ],
        },
        {
            id: "ORD-2026-06-10-0005",
            date: "2026-06-10",
            items: [
                { fruitName: "芒果", quantity: 2, unitPrice: 15.0, subtotal: 30.0 },
                { fruitName: "红富士苹果", quantity: 2, unitPrice: 6.8, subtotal: 13.6 },
            ],
        },
        {
            id: "ORD-2026-06-10-0006",
            date: "2026-06-10",
            items: [
                { fruitName: "蓝莓", quantity: 1, unitPrice: 32.0, subtotal: 32.0 },
                { fruitName: "樱桃", quantity: 1, unitPrice: 45.0, subtotal: 45.0 },
            ],
        },
        {
            id: "ORD-2026-06-10-0007",
            date: "2026-06-10",
            items: [
                { fruitName: "猕猴桃", quantity: 4, unitPrice: 7.5, subtotal: 30.0 },
                { fruitName: "橙子", quantity: 3, unitPrice: 5.5, subtotal: 16.5 },
            ],
        },
        {
            id: "ORD-2026-06-10-0008",
            date: "2026-06-10",
            items: [
                { fruitName: "香蕉", quantity: 3, unitPrice: 4.5, subtotal: 13.5 },
                { fruitName: "葡萄", quantity: 1, unitPrice: 12.5, subtotal: 12.5 },
                { fruitName: "西瓜", quantity: 1, unitPrice: 3.2, subtotal: 16.0 },
            ],
        },
    ],
    "2026-06-11": [
        {
            id: "ORD-2026-06-11-0001",
            date: "2026-06-11",
            items: [
                { fruitName: "红富士苹果", quantity: 5, unitPrice: 6.8, subtotal: 34.0 },
            ],
        },
        {
            id: "ORD-2026-06-11-0002",
            date: "2026-06-11",
            items: [
                { fruitName: "草莓", quantity: 2, unitPrice: 22.0, subtotal: 44.0 },
                { fruitName: "蓝莓", quantity: 1, unitPrice: 32.0, subtotal: 32.0 },
            ],
        },
        {
            id: "ORD-2026-06-11-0003",
            date: "2026-06-11",
            items: [
                { fruitName: "橙子", quantity: 5, unitPrice: 5.5, subtotal: 27.5 },
                { fruitName: "梨", quantity: 3, unitPrice: 5.8, subtotal: 17.4 },
            ],
        },
        {
            id: "ORD-2026-06-11-0004",
            date: "2026-06-11",
            items: [
                { fruitName: "西瓜", quantity: 2, unitPrice: 3.2, subtotal: 28.8 },
                { fruitName: "桃子", quantity: 2, unitPrice: 8.5, subtotal: 17.0 },
            ],
        },
        {
            id: "ORD-2026-06-11-0005",
            date: "2026-06-11",
            items: [
                { fruitName: "芒果", quantity: 3, unitPrice: 15.0, subtotal: 45.0 },
                { fruitName: "樱桃", quantity: 2, unitPrice: 45.0, subtotal: 90.0 },
            ],
        },
        {
            id: "ORD-2026-06-11-0006",
            date: "2026-06-11",
            items: [
                { fruitName: "葡萄", quantity: 3, unitPrice: 12.5, subtotal: 37.5 },
                { fruitName: "香蕉", quantity: 4, unitPrice: 4.5, subtotal: 18.0 },
            ],
        },
        {
            id: "ORD-2026-06-11-0007",
            date: "2026-06-11",
            items: [
                { fruitName: "猕猴桃", quantity: 3, unitPrice: 7.5, subtotal: 22.5 },
            ],
        },
    ],
    "2026-06-12": [
        {
            id: "ORD-2026-06-12-0001",
            date: "2026-06-12",
            items: [
                { fruitName: "红富士苹果", quantity: 2, unitPrice: 6.8, subtotal: 13.6 },
                { fruitName: "香蕉", quantity: 3, unitPrice: 4.5, subtotal: 13.5 },
                { fruitName: "橙子", quantity: 2, unitPrice: 5.5, subtotal: 11.0 },
            ],
        },
        {
            id: "ORD-2026-06-12-0002",
            date: "2026-06-12",
            items: [
                { fruitName: "草莓", quantity: 1, unitPrice: 22.0, subtotal: 22.0 },
            ],
        },
        {
            id: "ORD-2026-06-12-0003",
            date: "2026-06-12",
            items: [
                { fruitName: "西瓜", quantity: 3, unitPrice: 3.2, subtotal: 33.6 },
                { fruitName: "葡萄", quantity: 2, unitPrice: 12.5, subtotal: 25.0 },
            ],
        },
        {
            id: "ORD-2026-06-12-0004",
            date: "2026-06-12",
            items: [
                { fruitName: "桃子", quantity: 4, unitPrice: 8.5, subtotal: 34.0 },
                { fruitName: "梨", quantity: 2, unitPrice: 5.8, subtotal: 11.6 },
            ],
        },
        {
            id: "ORD-2026-06-12-0005",
            date: "2026-06-12",
            items: [
                { fruitName: "芒果", quantity: 1, unitPrice: 15.0, subtotal: 15.0 },
                { fruitName: "蓝莓", quantity: 2, unitPrice: 32.0, subtotal: 64.0 },
            ],
        },
        {
            id: "ORD-2026-06-12-0006",
            date: "2026-06-12",
            items: [
                { fruitName: "樱桃", quantity: 1, unitPrice: 45.0, subtotal: 45.0 },
                { fruitName: "猕猴桃", quantity: 2, unitPrice: 7.5, subtotal: 15.0 },
            ],
        },
    ],
    "2026-06-13": [
        {
            id: "ORD-2026-06-13-0001",
            date: "2026-06-13",
            items: [
                { fruitName: "红富士苹果", quantity: 4, unitPrice: 6.8, subtotal: 27.2 },
                { fruitName: "橙子", quantity: 3, unitPrice: 5.5, subtotal: 16.5 },
            ],
        },
        {
            id: "ORD-2026-06-13-0002",
            date: "2026-06-13",
            items: [
                { fruitName: "香蕉", quantity: 5, unitPrice: 4.5, subtotal: 22.5 },
                { fruitName: "葡萄", quantity: 1, unitPrice: 12.5, subtotal: 12.5 },
            ],
        },
        {
            id: "ORD-2026-06-13-0003",
            date: "2026-06-13",
            items: [
                { fruitName: "草莓", quantity: 3, unitPrice: 22.0, subtotal: 66.0 },
                { fruitName: "蓝莓", quantity: 1, unitPrice: 32.0, subtotal: 32.0 },
            ],
        },
        {
            id: "ORD-2026-06-13-0004",
            date: "2026-06-13",
            items: [
                { fruitName: "西瓜", quantity: 1, unitPrice: 3.2, subtotal: 14.4 },
            ],
        },
        {
            id: "ORD-2026-06-13-0005",
            date: "2026-06-13",
            items: [
                { fruitName: "桃子", quantity: 2, unitPrice: 8.5, subtotal: 17.0 },
                { fruitName: "梨", quantity: 4, unitPrice: 5.8, subtotal: 23.2 },
                { fruitName: "芒果", quantity: 2, unitPrice: 15.0, subtotal: 30.0 },
            ],
        },
        {
            id: "ORD-2026-06-13-0006",
            date: "2026-06-13",
            items: [
                { fruitName: "樱桃", quantity: 3, unitPrice: 45.0, subtotal: 135.0 },
            ],
        },
        {
            id: "ORD-2026-06-13-0007",
            date: "2026-06-13",
            items: [
                { fruitName: "猕猴桃", quantity: 5, unitPrice: 7.5, subtotal: 37.5 },
            ],
        },
        {
            id: "ORD-2026-06-13-0008",
            date: "2026-06-13",
            items: [
                { fruitName: "红富士苹果", quantity: 1, unitPrice: 6.8, subtotal: 6.8 },
                { fruitName: "草莓", quantity: 1, unitPrice: 22.0, subtotal: 22.0 },
            ],
        },
    ],
    "2026-06-14": [
        {
            id: "ORD-2026-06-14-0001",
            date: "2026-06-14",
            items: [
                { fruitName: "红富士苹果", quantity: 3, unitPrice: 6.8, subtotal: 20.4 },
                { fruitName: "香蕉", quantity: 2, unitPrice: 4.5, subtotal: 9.0 },
            ],
        },
        {
            id: "ORD-2026-06-14-0002",
            date: "2026-06-14",
            items: [
                { fruitName: "橙子", quantity: 4, unitPrice: 5.5, subtotal: 22.0 },
                { fruitName: "葡萄", quantity: 3, unitPrice: 12.5, subtotal: 37.5 },
            ],
        },
        {
            id: "ORD-2026-06-14-0003",
            date: "2026-06-14",
            items: [
                { fruitName: "草莓", quantity: 2, unitPrice: 22.0, subtotal: 44.0 },
                { fruitName: "蓝莓", quantity: 2, unitPrice: 32.0, subtotal: 64.0 },
            ],
        },
        {
            id: "ORD-2026-06-14-0004",
            date: "2026-06-14",
            items: [
                { fruitName: "西瓜", quantity: 2, unitPrice: 3.2, subtotal: 22.4 },
                { fruitName: "桃子", quantity: 3, unitPrice: 8.5, subtotal: 25.5 },
            ],
        },
        {
            id: "ORD-2026-06-14-0005",
            date: "2026-06-14",
            items: [
                { fruitName: "梨", quantity: 5, unitPrice: 5.8, subtotal: 29.0 },
                { fruitName: "芒果", quantity: 1, unitPrice: 15.0, subtotal: 15.0 },
            ],
        },
        {
            id: "ORD-2026-06-14-0006",
            date: "2026-06-14",
            items: [
                { fruitName: "樱桃", quantity: 2, unitPrice: 45.0, subtotal: 90.0 },
                { fruitName: "猕猴桃", quantity: 3, unitPrice: 7.5, subtotal: 22.5 },
            ],
        },
    ],
    "2026-06-15": [
        {
            id: "ORD-2026-06-15-0001",
            date: "2026-06-15",
            items: [
                { fruitName: "红富士苹果", quantity: 6, unitPrice: 6.8, subtotal: 40.8 },
                { fruitName: "香蕉", quantity: 4, unitPrice: 4.5, subtotal: 18.0 },
            ],
        },
        {
            id: "ORD-2026-06-15-0002",
            date: "2026-06-15",
            items: [
                { fruitName: "橙子", quantity: 2, unitPrice: 5.5, subtotal: 11.0 },
                { fruitName: "草莓", quantity: 1, unitPrice: 22.0, subtotal: 22.0 },
            ],
        },
        {
            id: "ORD-2026-06-15-0003",
            date: "2026-06-15",
            items: [
                { fruitName: "葡萄", quantity: 4, unitPrice: 12.5, subtotal: 50.0 },
                { fruitName: "西瓜", quantity: 1, unitPrice: 3.2, subtotal: 12.8 },
            ],
        },
        {
            id: "ORD-2026-06-15-0004",
            date: "2026-06-15",
            items: [
                { fruitName: "桃子", quantity: 5, unitPrice: 8.5, subtotal: 42.5 },
            ],
        },
        {
            id: "ORD-2026-06-15-0005",
            date: "2026-06-15",
            items: [
                { fruitName: "梨", quantity: 2, unitPrice: 5.8, subtotal: 11.6 },
                { fruitName: "芒果", quantity: 4, unitPrice: 15.0, subtotal: 60.0 },
            ],
        },
        {
            id: "ORD-2026-06-15-0006",
            date: "2026-06-15",
            items: [
                { fruitName: "蓝莓", quantity: 3, unitPrice: 32.0, subtotal: 96.0 },
                { fruitName: "樱桃", quantity: 1, unitPrice: 45.0, subtotal: 45.0 },
            ],
        },
        {
            id: "ORD-2026-06-15-0007",
            date: "2026-06-15",
            items: [
                { fruitName: "猕猴桃", quantity: 2, unitPrice: 7.5, subtotal: 15.0 },
            ],
        },
        {
            id: "ORD-2026-06-15-0008",
            date: "2026-06-15",
            items: [
                { fruitName: "红富士苹果", quantity: 2, unitPrice: 6.8, subtotal: 13.6 },
                { fruitName: "橙子", quantity: 3, unitPrice: 5.5, subtotal: 16.5 },
                { fruitName: "香蕉", quantity: 1, unitPrice: 4.5, subtotal: 4.5 },
            ],
        },
    ],
    "2026-06-16": [
        {
            id: "ORD-2026-06-16-0001",
            date: "2026-06-16",
            items: [
                { fruitName: "红富士苹果", quantity: 3, unitPrice: 6.8, subtotal: 20.4 },
                { fruitName: "草莓", quantity: 2, unitPrice: 22.0, subtotal: 44.0 },
            ],
        },
        {
            id: "ORD-2026-06-16-0002",
            date: "2026-06-16",
            items: [
                { fruitName: "香蕉", quantity: 3, unitPrice: 4.5, subtotal: 13.5 },
                { fruitName: "橙子", quantity: 4, unitPrice: 5.5, subtotal: 22.0 },
            ],
        },
        {
            id: "ORD-2026-06-16-0003",
            date: "2026-06-16",
            items: [
                { fruitName: "葡萄", quantity: 2, unitPrice: 12.5, subtotal: 25.0 },
                { fruitName: "西瓜", quantity: 3, unitPrice: 3.2, subtotal: 33.6 },
            ],
        },
        {
            id: "ORD-2026-06-16-0004",
            date: "2026-06-16",
            items: [
                { fruitName: "桃子", quantity: 2, unitPrice: 8.5, subtotal: 17.0 },
                { fruitName: "梨", quantity: 3, unitPrice: 5.8, subtotal: 17.4 },
            ],
        },
        {
            id: "ORD-2026-06-16-0005",
            date: "2026-06-16",
            items: [
                { fruitName: "芒果", quantity: 2, unitPrice: 15.0, subtotal: 30.0 },
                { fruitName: "蓝莓", quantity: 1, unitPrice: 32.0, subtotal: 32.0 },
            ],
        },
        {
            id: "ORD-2026-06-16-0006",
            date: "2026-06-16",
            items: [
                { fruitName: "樱桃", quantity: 2, unitPrice: 45.0, subtotal: 90.0 },
                { fruitName: "猕猴桃", quantity: 4, unitPrice: 7.5, subtotal: 30.0 },
            ],
        },
        {
            id: "ORD-2026-06-16-0007",
            date: "2026-06-16",
            items: [
                { fruitName: "红富士苹果", quantity: 1, unitPrice: 6.8, subtotal: 6.8 },
            ],
        },
    ],
    "2026-06-17": [
        {
            id: "ORD-2026-06-17-0001",
            date: "2026-06-17",
            items: [
                { fruitName: "红富士苹果", quantity: 4, unitPrice: 6.8, subtotal: 27.2 },
                { fruitName: "香蕉", quantity: 3, unitPrice: 4.5, subtotal: 13.5 },
            ],
        },
        {
            id: "ORD-2026-06-17-0002",
            date: "2026-06-17",
            items: [
                { fruitName: "橙子", quantity: 5, unitPrice: 5.5, subtotal: 27.5 },
                { fruitName: "草莓", quantity: 3, unitPrice: 22.0, subtotal: 66.0 },
            ],
        },
        {
            id: "ORD-2026-06-17-0003",
            date: "2026-06-17",
            items: [
                { fruitName: "葡萄", quantity: 3, unitPrice: 12.5, subtotal: 37.5 },
                { fruitName: "西瓜", quantity: 1, unitPrice: 3.2, subtotal: 16.0 },
            ],
        },
        {
            id: "ORD-2026-06-17-0004",
            date: "2026-06-17",
            items: [
                { fruitName: "桃子", quantity: 4, unitPrice: 8.5, subtotal: 34.0 },
                { fruitName: "梨", quantity: 2, unitPrice: 5.8, subtotal: 11.6 },
            ],
        },
        {
            id: "ORD-2026-06-17-0005",
            date: "2026-06-17",
            items: [
                { fruitName: "芒果", quantity: 3, unitPrice: 15.0, subtotal: 45.0 },
            ],
        },
        {
            id: "ORD-2026-06-17-0006",
            date: "2026-06-17",
            items: [
                { fruitName: "蓝莓", quantity: 2, unitPrice: 32.0, subtotal: 64.0 },
                { fruitName: "樱桃", quantity: 1, unitPrice: 45.0, subtotal: 45.0 },
            ],
        },
        {
            id: "ORD-2026-06-17-0007",
            date: "2026-06-17",
            items: [
                { fruitName: "猕猴桃", quantity: 3, unitPrice: 7.5, subtotal: 22.5 },
                { fruitName: "红富士苹果", quantity: 2, unitPrice: 6.8, subtotal: 13.6 },
            ],
        },
        {
            id: "ORD-2026-06-17-0008",
            date: "2026-06-17",
            items: [
                { fruitName: "橙子", quantity: 2, unitPrice: 5.5, subtotal: 11.0 },
                { fruitName: "香蕉", quantity: 2, unitPrice: 4.5, subtotal: 9.0 },
            ],
        },
        {
            id: "ORD-2026-06-17-0009",
            date: "2026-06-17",
            items: [
                { fruitName: "葡萄", quantity: 1, unitPrice: 12.5, subtotal: 12.5 },
            ],
        },
    ],
    "2026-06-18": [
        {
            id: "ORD-2026-06-18-0001",
            date: "2026-06-18",
            items: [
                { fruitName: "红富士苹果", quantity: 5, unitPrice: 6.8, subtotal: 34.0 },
                { fruitName: "香蕉", quantity: 4, unitPrice: 4.5, subtotal: 18.0 },
            ],
        },
        {
            id: "ORD-2026-06-18-0002",
            date: "2026-06-18",
            items: [
                { fruitName: "橙子", quantity: 3, unitPrice: 5.5, subtotal: 16.5 },
                { fruitName: "草莓", quantity: 2, unitPrice: 22.0, subtotal: 44.0 },
            ],
        },
        {
            id: "ORD-2026-06-18-0003",
            date: "2026-06-18",
            items: [
                { fruitName: "葡萄", quantity: 4, unitPrice: 12.5, subtotal: 50.0 },
                { fruitName: "西瓜", quantity: 2, unitPrice: 3.2, subtotal: 25.6 },
            ],
        },
        {
            id: "ORD-2026-06-18-0004",
            date: "2026-06-18",
            items: [
                { fruitName: "桃子", quantity: 3, unitPrice: 8.5, subtotal: 25.5 },
                { fruitName: "梨", quantity: 4, unitPrice: 5.8, subtotal: 23.2 },
            ],
        },
        {
            id: "ORD-2026-06-18-0005",
            date: "2026-06-18",
            items: [
                { fruitName: "芒果", quantity: 2, unitPrice: 15.0, subtotal: 30.0 },
                { fruitName: "蓝莓", quantity: 2, unitPrice: 32.0, subtotal: 64.0 },
            ],
        },
        {
            id: "ORD-2026-06-18-0006",
            date: "2026-06-18",
            items: [
                { fruitName: "樱桃", quantity: 3, unitPrice: 45.0, subtotal: 135.0 },
                { fruitName: "猕猴桃", quantity: 2, unitPrice: 7.5, subtotal: 15.0 },
            ],
        },
        {
            id: "ORD-2026-06-18-0007",
            date: "2026-06-18",
            items: [
                { fruitName: "红富士苹果", quantity: 2, unitPrice: 6.8, subtotal: 13.6 },
                { fruitName: "橙子", quantity: 2, unitPrice: 5.5, subtotal: 11.0 },
            ],
        },
        {
            id: "ORD-2026-06-18-0008",
            date: "2026-06-18",
            items: [
                { fruitName: "草莓", quantity: 1, unitPrice: 22.0, subtotal: 22.0 },
                { fruitName: "葡萄", quantity: 2, unitPrice: 12.5, subtotal: 25.0 },
            ],
        },
        {
            id: "ORD-2026-06-18-0009",
            date: "2026-06-18",
            items: [
                { fruitName: "西瓜", quantity: 1, unitPrice: 3.2, subtotal: 14.4 },
                { fruitName: "桃子", quantity: 2, unitPrice: 8.5, subtotal: 17.0 },
            ],
        },
        {
            id: "ORD-2026-06-18-0010",
            date: "2026-06-18",
            items: [
                { fruitName: "芒果", quantity: 1, unitPrice: 15.0, subtotal: 15.0 },
                { fruitName: "梨", quantity: 3, unitPrice: 5.8, subtotal: 17.4 },
            ],
        },
    ],
    "2026-06-19": [
        {
            id: "ORD-2026-06-19-0001",
            date: "2026-06-19",
            items: [
                { fruitName: "红富士苹果", quantity: 3, unitPrice: 6.8, subtotal: 20.4 },
                { fruitName: "香蕉", quantity: 2, unitPrice: 4.5, subtotal: 9.0 },
            ],
        },
        {
            id: "ORD-2026-06-19-0002",
            date: "2026-06-19",
            items: [
                { fruitName: "橙子", quantity: 4, unitPrice: 5.5, subtotal: 22.0 },
            ],
        },
        {
            id: "ORD-2026-06-19-0003",
            date: "2026-06-19",
            items: [
                { fruitName: "草莓", quantity: 2, unitPrice: 22.0, subtotal: 44.0 },
                { fruitName: "葡萄", quantity: 3, unitPrice: 12.5, subtotal: 37.5 },
            ],
        },
        {
            id: "ORD-2026-06-19-0004",
            date: "2026-06-19",
            items: [
                { fruitName: "西瓜", quantity: 2, unitPrice: 3.2, subtotal: 24.0 },
                { fruitName: "桃子", quantity: 1, unitPrice: 8.5, subtotal: 8.5 },
            ],
        },
        {
            id: "ORD-2026-06-19-0005",
            date: "2026-06-19",
            items: [
                { fruitName: "梨", quantity: 3, unitPrice: 5.8, subtotal: 17.4 },
                { fruitName: "芒果", quantity: 2, unitPrice: 15.0, subtotal: 30.0 },
            ],
        },
        {
            id: "ORD-2026-06-19-0006",
            date: "2026-06-19",
            items: [
                { fruitName: "蓝莓", quantity: 1, unitPrice: 32.0, subtotal: 32.0 },
                { fruitName: "樱桃", quantity: 2, unitPrice: 45.0, subtotal: 90.0 },
            ],
        },
        {
            id: "ORD-2026-06-19-0007",
            date: "2026-06-19",
            items: [
                { fruitName: "猕猴桃", quantity: 5, unitPrice: 7.5, subtotal: 37.5 },
            ],
        },
    ],
    "2026-06-20": [
        {
            id: "ORD-2026-06-20-0001",
            date: "2026-06-20",
            items: [
                { fruitName: "红富士苹果", quantity: 4, unitPrice: 6.8, subtotal: 27.2 },
                { fruitName: "香蕉", quantity: 3, unitPrice: 4.5, subtotal: 13.5 },
                { fruitName: "橙子", quantity: 2, unitPrice: 5.5, subtotal: 11.0 },
            ],
        },
        {
            id: "ORD-2026-06-20-0002",
            date: "2026-06-20",
            items: [
                { fruitName: "草莓", quantity: 3, unitPrice: 22.0, subtotal: 66.0 },
            ],
        },
        {
            id: "ORD-2026-06-20-0003",
            date: "2026-06-20",
            items: [
                { fruitName: "葡萄", quantity: 2, unitPrice: 12.5, subtotal: 25.0 },
                { fruitName: "西瓜", quantity: 1, unitPrice: 3.2, subtotal: 12.8 },
            ],
        },
        {
            id: "ORD-2026-06-20-0004",
            date: "2026-06-20",
            items: [
                { fruitName: "桃子", quantity: 3, unitPrice: 8.5, subtotal: 25.5 },
                { fruitName: "梨", quantity: 2, unitPrice: 5.8, subtotal: 11.6 },
            ],
        },
        {
            id: "ORD-2026-06-20-0005",
            date: "2026-06-20",
            items: [
                { fruitName: "芒果", quantity: 3, unitPrice: 15.0, subtotal: 45.0 },
                { fruitName: "蓝莓", quantity: 2, unitPrice: 32.0, subtotal: 64.0 },
            ],
        },
        {
            id: "ORD-2026-06-20-0006",
            date: "2026-06-20",
            items: [
                { fruitName: "樱桃", quantity: 1, unitPrice: 45.0, subtotal: 45.0 },
                { fruitName: "猕猴桃", quantity: 3, unitPrice: 7.5, subtotal: 22.5 },
            ],
        },
        {
            id: "ORD-2026-06-20-0007",
            date: "2026-06-20",
            items: [
                { fruitName: "红富士苹果", quantity: 2, unitPrice: 6.8, subtotal: 13.6 },
                { fruitName: "草莓", quantity: 1, unitPrice: 22.0, subtotal: 22.0 },
            ],
        },
        {
            id: "ORD-2026-06-20-0008",
            date: "2026-06-20",
            items: [
                { fruitName: "香蕉", quantity: 2, unitPrice: 4.5, subtotal: 9.0 },
                { fruitName: "橙子", quantity: 3, unitPrice: 5.5, subtotal: 16.5 },
            ],
        },
    ],
    "2026-06-21": [
        {
            id: "ORD-2026-06-21-0001",
            date: "2026-06-21",
            items: [
                { fruitName: "红富士苹果", quantity: 6, unitPrice: 6.8, subtotal: 40.8 },
            ],
        },
        {
            id: "ORD-2026-06-21-0002",
            date: "2026-06-21",
            items: [
                { fruitName: "香蕉", quantity: 4, unitPrice: 4.5, subtotal: 18.0 },
                { fruitName: "橙子", quantity: 5, unitPrice: 5.5, subtotal: 27.5 },
            ],
        },
        {
            id: "ORD-2026-06-21-0003",
            date: "2026-06-21",
            items: [
                { fruitName: "草莓", quantity: 2, unitPrice: 22.0, subtotal: 44.0 },
                { fruitName: "蓝莓", quantity: 1, unitPrice: 32.0, subtotal: 32.0 },
            ],
        },
        {
            id: "ORD-2026-06-21-0004",
            date: "2026-06-21",
            items: [
                { fruitName: "葡萄", quantity: 5, unitPrice: 12.5, subtotal: 62.5 },
                { fruitName: "西瓜", quantity: 2, unitPrice: 3.2, subtotal: 25.6 },
            ],
        },
        {
            id: "ORD-2026-06-21-0005",
            date: "2026-06-21",
            items: [
                { fruitName: "桃子", quantity: 4, unitPrice: 8.5, subtotal: 34.0 },
                { fruitName: "梨", quantity: 3, unitPrice: 5.8, subtotal: 17.4 },
            ],
        },
        {
            id: "ORD-2026-06-21-0006",
            date: "2026-06-21",
            items: [
                { fruitName: "芒果", quantity: 2, unitPrice: 15.0, subtotal: 30.0 },
                { fruitName: "樱桃", quantity: 2, unitPrice: 45.0, subtotal: 90.0 },
            ],
        },
        {
            id: "ORD-2026-06-21-0007",
            date: "2026-06-21",
            items: [
                { fruitName: "猕猴桃", quantity: 4, unitPrice: 7.5, subtotal: 30.0 },
            ],
        },
        {
            id: "ORD-2026-06-21-0008",
            date: "2026-06-21",
            items: [
                { fruitName: "红富士苹果", quantity: 3, unitPrice: 6.8, subtotal: 20.4 },
                { fruitName: "香蕉", quantity: 2, unitPrice: 4.5, subtotal: 9.0 },
            ],
        },
        {
            id: "ORD-2026-06-21-0009",
            date: "2026-06-21",
            items: [
                { fruitName: "草莓", quantity: 1, unitPrice: 22.0, subtotal: 22.0 },
                { fruitName: "葡萄", quantity: 1, unitPrice: 12.5, subtotal: 12.5 },
            ],
        },
    ],
    "2026-06-22": [
        {
            id: "ORD-2026-06-22-0001",
            date: "2026-06-22",
            items: [
                { fruitName: "红富士苹果", quantity: 3, unitPrice: 6.8, subtotal: 20.4 },
                { fruitName: "香蕉", quantity: 3, unitPrice: 4.5, subtotal: 13.5 },
            ],
        },
        {
            id: "ORD-2026-06-22-0002",
            date: "2026-06-22",
            items: [
                { fruitName: "橙子", quantity: 4, unitPrice: 5.5, subtotal: 22.0 },
                { fruitName: "草莓", quantity: 2, unitPrice: 22.0, subtotal: 44.0 },
            ],
        },
        {
            id: "ORD-2026-06-22-0003",
            date: "2026-06-22",
            items: [
                { fruitName: "葡萄", quantity: 2, unitPrice: 12.5, subtotal: 25.0 },
                { fruitName: "西瓜", quantity: 3, unitPrice: 3.2, subtotal: 33.6 },
            ],
        },
        {
            id: "ORD-2026-06-22-0004",
            date: "2026-06-22",
            items: [
                { fruitName: "桃子", quantity: 2, unitPrice: 8.5, subtotal: 17.0 },
                { fruitName: "梨", quantity: 4, unitPrice: 5.8, subtotal: 23.2 },
            ],
        },
        {
            id: "ORD-2026-06-22-0005",
            date: "2026-06-22",
            items: [
                { fruitName: "芒果", quantity: 4, unitPrice: 15.0, subtotal: 60.0 },
                { fruitName: "蓝莓", quantity: 2, unitPrice: 32.0, subtotal: 64.0 },
            ],
        },
        {
            id: "ORD-2026-06-22-0006",
            date: "2026-06-22",
            items: [
                { fruitName: "樱桃", quantity: 1, unitPrice: 45.0, subtotal: 45.0 },
                { fruitName: "猕猴桃", quantity: 2, unitPrice: 7.5, subtotal: 15.0 },
            ],
        },
        {
            id: "ORD-2026-06-22-0007",
            date: "2026-06-22",
            items: [
                { fruitName: "红富士苹果", quantity: 2, unitPrice: 6.8, subtotal: 13.6 },
            ],
        },
    ],
    "2026-06-23": [
        {
            id: "ORD-2026-06-23-0001",
            date: "2026-06-23",
            items: [
                { fruitName: "红富士苹果", quantity: 4, unitPrice: 6.8, subtotal: 27.2 },
                { fruitName: "香蕉", quantity: 2, unitPrice: 4.5, subtotal: 9.0 },
            ],
        },
        {
            id: "ORD-2026-06-23-0002",
            date: "2026-06-23",
            items: [
                { fruitName: "橙子", quantity: 3, unitPrice: 5.5, subtotal: 16.5 },
                { fruitName: "草莓", quantity: 1, unitPrice: 22.0, subtotal: 22.0 },
            ],
        },
        {
            id: "ORD-2026-06-23-0003",
            date: "2026-06-23",
            items: [
                { fruitName: "葡萄", quantity: 3, unitPrice: 12.5, subtotal: 37.5 },
                { fruitName: "西瓜", quantity: 1, unitPrice: 3.2, subtotal: 14.4 },
            ],
        },
        {
            id: "ORD-2026-06-23-0004",
            date: "2026-06-23",
            items: [
                { fruitName: "桃子", quantity: 5, unitPrice: 8.5, subtotal: 42.5 },
                { fruitName: "梨", quantity: 2, unitPrice: 5.8, subtotal: 11.6 },
            ],
        },
        {
            id: "ORD-2026-06-23-0005",
            date: "2026-06-23",
            items: [
                { fruitName: "芒果", quantity: 2, unitPrice: 15.0, subtotal: 30.0 },
                { fruitName: "蓝莓", quantity: 1, unitPrice: 32.0, subtotal: 32.0 },
            ],
        },
        {
            id: "ORD-2026-06-23-0006",
            date: "2026-06-23",
            items: [
                { fruitName: "樱桃", quantity: 2, unitPrice: 45.0, subtotal: 90.0 },
                { fruitName: "猕猴桃", quantity: 3, unitPrice: 7.5, subtotal: 22.5 },
            ],
        },
        {
            id: "ORD-2026-06-23-0007",
            date: "2026-06-23",
            items: [
                { fruitName: "橙子", quantity: 2, unitPrice: 5.5, subtotal: 11.0 },
                { fruitName: "香蕉", quantity: 3, unitPrice: 4.5, subtotal: 13.5 },
            ],
        },
        {
            id: "ORD-2026-06-23-0008",
            date: "2026-06-23",
            items: [
                { fruitName: "红富士苹果", quantity: 1, unitPrice: 6.8, subtotal: 6.8 },
                { fruitName: "草莓", quantity: 2, unitPrice: 22.0, subtotal: 44.0 },
            ],
        },
    ],
};
export function getAvailableDates() {
    return Object.keys(ORDERS_BY_DATE).sort();
}
export function getDayOrders(date) {
    return ORDERS_BY_DATE[date] || [];
}
export function getWeekOrders(startDate) {
    const orders = [];
    const start = new Date(startDate);
    for (let i = 0; i < 7; i++) {
        const d = new Date(start);
        d.setDate(d.getDate() + i);
        const dateStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
        orders.push(...(ORDERS_BY_DATE[dateStr] || []));
    }
    return orders;
}

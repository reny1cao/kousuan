const questionTypes = [
    {
        grade: "一年级上册",
        categories: [
            {
                id: 1,
                name: "认识10以内的数",
                subCategories: [
                    {
                        id: 1.1,
                        name: "5以内的数比大小",
                        examples: ["2()1, 3()2"]
                    },
                    {
                        id: 1.2,
                        name: "10以内的数比大小",
                        examples: ["7()1, 6()7"]
                    }
                ]
            },
            {
                id: 2,
                name: "10以内的加法和减法",
                subCategories: [
                    {
                        id: 2.1,
                        name: "五以内加减"
                    },
                    {
                        id: 2.2,
                        name: "五以内加减填空"
                    },
                    {
                        id: 2.3,
                        name: "五以内加减两步计算无括号"
                    },
                    {
                        id: 2.4,
                        name: "五以内加减两步计算五括号填空"
                    },
                ]
            },
            {
                id: 3,
                name: "认识11-20各数",
                subCategories: [
                    {
                        id: 3.1,
                        name: "20以内的数比大小"
                    },
                    {
                        id: 3.2,
                        name: "五以内加减填空"
                    },
                    {
                        id: 3.3,
                        name: "五以内加减两步计算无括号"
                    },
                    {
                        id: 3.4,
                        name: "五以内加减两步计算五括号填空"
                    },
                ]
            },
            {
                id: 4,
                name: "20以内的进位加法",
                subCategories: [
                    {
                        id: 4.1,
                        name: "五以内加减"
                    },
                    {
                        id: 4.2,
                        name: "五以内加减填空"
                    },
                    {
                        id: 4.3,
                        name: "五以内加减两步计算无括号"
                    },
                    {
                        id: 4.4,
                        name: "五以内加减两步计算五括号填空"
                    },
                ]
            },
        ]
    },
    {
        grade: "一年级下册",
        categories: [
            {
                id: 1,
                name: "20以内的退位减法",
                subCategories: [
                    {
                        id: 1.1,
                        name: "十几减9",
                        examples: ["2()1, 3()2"]
                    },
                    {
                        id: 1.2,
                        name: "10以内的数比大小",
                        examples: ["7()1, 6()7"]
                    }
                ]
            },
            {
                id: 2,
                name: "10以内的加法和减法",
                subCategories: [
                    {
                        id: 2.1,
                        name: "五以内加减"
                    },
                    {
                        id: 2.2,
                        name: "五以内加减填空"
                    },
                    {
                        id: 2.3,
                        name: "五以内加减两步计算无括号"
                    },
                    {
                        id: 2.4,
                        name: "五以内加减两步计算五括号填空"
                    },
                ]
            },
            {
                id: 3,
                name: "认识11-20各数",
                subCategories: [
                    {
                        id: 3.1,
                        name: "20以内的数比大小"
                    },
                    {
                        id: 3.2,
                        name: "五以内加减填空"
                    },
                    {
                        id: 3.3,
                        name: "五以内加减两步计算无括号"
                    },
                    {
                        id: 3.4,
                        name: "五以内加减两步计算五括号填空"
                    },
                ]
            },
            {
                id: 4,
                name: "20以内的进位加法",
                subCategories: [
                    {
                        id: 4.1,
                        name: "五以内加减"
                    },
                    {
                        id: 4.2,
                        name: "五以内加减填空"
                    },
                    {
                        id: 4.3,
                        name: "五以内加减两步计算无括号"
                    },
                    {
                        id: 4.4,
                        name: "五以内加减两步计算五括号填空"
                    },
                ]
            },
        ]
    },
    {
        grade: "二年级上册",
        categories: [
            {
                id: 1,
                name: "100以内的加法和减法（三）",
                subCategories: [
                    {
                        id: 1.1,
                        name: "5以内的数比大小",
                        examples: ["2()1, 3()2"]
                    },
                    {
                        id: 1.2,
                        name: "10以内的数比大小",
                        examples: ["7()1, 6()7"]
                    }
                ]
            },
            {
                id: 2,
                name: "10以内的加法和减法",
                subCategories: [
                    {
                        id: 2.1,
                        name: "五以内加减"
                    },
                    {
                        id: 2.2,
                        name: "五以内加减填空"
                    },
                    {
                        id: 2.3,
                        name: "五以内加减两步计算无括号"
                    },
                    {
                        id: 2.4,
                        name: "五以内加减两步计算五括号填空"
                    },
                ]
            },
            {
                id: 3,
                name: "认识11-20各数",
                subCategories: [
                    {
                        id: 3.1,
                        name: "20以内的数比大小"
                    },
                    {
                        id: 3.2,
                        name: "五以内加减填空"
                    },
                    {
                        id: 3.3,
                        name: "五以内加减两步计算无括号"
                    },
                    {
                        id: 3.4,
                        name: "五以内加减两步计算五括号填空"
                    },
                ]
            },
            {
                id: 4,
                name: "20以内的进位加法",
                subCategories: [
                    {
                        id: 4.1,
                        name: "五以内加减"
                    },
                    {
                        id: 4.2,
                        name: "五以内加减填空"
                    },
                    {
                        id: 4.3,
                        name: "五以内加减两步计算无括号"
                    },
                    {
                        id: 4.4,
                        name: "五以内加减两步计算五括号填空"
                    },
                ]
            },
        ]
    }
]

export default questionTypes;
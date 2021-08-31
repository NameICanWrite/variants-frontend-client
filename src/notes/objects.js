// const habit = {
//     name: 'squonch',
//     action: '',
//     triggers: [
//         {
//             id: Date.now(),
//             available: true,
//             value: 'коли заходжу в парк',
//             frequency: '',//for last 21 days
//         },
//         {
//             id: Date.now(),
//             available: true,
//             value: 'коли починаю бігти',
//             frequency:'',
//         }
//     ],
//     priority: {
//         value: '',
//         info: '',
//         targets: {
//             skill1: {},
//             goal1: {}
//         }
//     },
//     frequency: '',

import { NULL } from "node-sass"

//}

//


//математично варіант в точці часу є 1 вибором із усіх комбінацій виборів які є частиною асоціації
//у цій моделі великі комюінації виборів будуть розкладені на вибори щоб зручніше/вірогідніше/швидше будувати бажану повторювану поведінку/хороші звички
const variantWithComments = {
    //асоцація 
    //      конвертована в текст 
    // яка підходить до всіх виборів 
    //      вказаних у ній  
    // (зв'язана з усіма -> є центральною в НМ)
    name: 'write code',

    // які провокують високий відсоток варіацій
    causes: [],
    choices: [{
            name: 'code language',
            variants: [{
                    name: 'css',
                    causes: []
                },
                {

                }
            ]
        },
        {
            name: 'body position',
            variants: [{
                    name: 'stand',
                    causes: []
                },
                {
                    name: 'sit',
                    causes: []
                }
            ]
        },
        {
            name: 'purpose',
            variants: [{
                    name: 'Variant app',
                    causes: []
                },
                {
                    name: 'training',
                    causes: []
                },
                {
                    name: 'ucode',
                    causes: []
                }
            ]
        }
    ]
}


console.log(new Date().getDate())

export const variant = {
    name: 'write code',
    causes: [],
    choices: [{
            name: 'code language',
            variants: [{
                    name: 'css',
                    causes: []
                },
                {
                    name: 'js',
                    causes: []
                }
            ]
        },
        {
            name: 'body position',
            variants: [{
                    name: 'stand',
                    causes: []
                },
                {
                    name: 'sit',
                    causes: []
                }
            ]
        },
        {
            name: 'purpose',
            variants: [{
                    name: 'Variant app',
                    causes: []
                },
                {
                    name: 'training',
                    causes: []
                },
                {
                    name: 'ucode',
                    causes: []
                }
            ]
        }
    ]
}

const letter = {
    markup: {
        name,
        id
    },
    expression: {
        text,
        // neural,
        type
    },
    sourceData: {
        plain: {
            text,
            files
        },
        // social,
        // neural
    },
    flightControl: {
        date: {
            from,
            to
        },
        notification: {
            isDefault
        }
    }
}

class Letter {
    constructor() {
        this.subClasses.forEach(Class => this[Class.forProperty] = new Class())
    }   

    subClasses = [
        class Markup {
            constructor() {
                this.id = this.generateId()
                this.name = 'letter #' + this.id
            }
            forProperty = 'markup'

            generateId() {
                return Date.now()
            }
        },

        class Expression {
            constructor() {
                this.expectedType = 'unknown'
                this.text = 'unknown'
            }
            forProperty = 'expression'
        },

        class SourceData {
            constructor() {
                this.subClasses.forEach(Class => this[Class.forProperty] = new Class())
            }
            forProperty = 'sourceData'
            subClasses = [
                class Plain {
                    constructor() {
                        this.text = 'Should be some helpful text here'
                        this.files = 'Should be some helpful files here'
                    }
                    forProperty = 'plain'
                },

                class Social {
                    constructor() {
                        this.contacts = 'Should be some helpful passes beyond local system'
                    }
                    forProperty = 'social'
                },

                class Neural {
                    constructor() {
                        this.generators = []
                        this.instances = []
                    }
                    forProperty = 'neural'
                }
            ]
        },

        class FlightControl {
            constructor() {
                this.time = {
                    from: 'Date when the MEASURE becomes relevant',
                    to: 'Date after which the MEASURE is not longer valid (responses will be no longer received)'
                }
                this.notificationSettings = {
                    isDefault: false
                }
            }
            forProperty = 'flightControl'
        }
    ]
}

//letter is like photon you drop on electron. It's like a ball you throw into the wall to measure it`s angle. It`s like a call to your friend to ask room temperature.
//It's a measure itself in a human readable way
//It`s a question. 
//In such way that if answer - there will be one more answer
//But does that change everything
//If you are electron - yes
//But are you?

//Written question/signal people call letter - so it`s letter

export default variant
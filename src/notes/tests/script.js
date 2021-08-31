// //TODO: add causes of variants (triggers)
//  class EventData {
//     constructor() {
//         this.events = []
//         this.id = Date.now()
//         this.setName = (name) => {
//             this.name = name
//             return this
//         }
//         this.addEvent = (choiceName, eventName) => {
//             this.events = [...this.events, {choiceName, eventName}]
//             return this
//         }
//         this.receiveEvent = (choiceName, eventName) => {
//             !this.events.find(item => item.choiceName == choiceName) 
//             && 
//             this.addEvent(choiceName, eventName)
//             return this
//         }
//         this.serialize = () => {
//             return {
//                 id: this.id,
//                 name: this.name,
//                 events: this.events
//             }
//         }
//         this.deserialize = (eventData) => {
//             const instance = new EventData().setName(eventData.name)
//             instance.id = eventData.id
//             eventData.events.forEach((item) => instance.addEvent(item.choiceName, item.eventName))
//             return instance
//         }
//     }
// }

// class Choice {
//     constructor(name, variants = []) {
//         this.name = name
//         this.variants = variants
//         this.addVariant = (variant) => {
//             this.variants = [...this.variants, variant]
//             return this
//         }
//         this.receiveVariant = (variant) => {
//             let index = this.variants.findIndex(item => item?.name == variant?.name) 

//             if (index > -1) {
//                 this.variants[index]?.addWeight()
//             } else {
//                     this.addVariant(variant)
//             }        
//             return this
//         }
//         this.serializeVariants = () => {
//             return this.variants.map(variant => variant.serialize())
//         }
//         this.serialize = () => {
//             return {
//                 name: this.name,
//                 variants: this.serializeVariants()
//             }
//         }
//         this.deserialize = (choice) => {
//             const instance = new Choice(choice.name, choice.variants.map(variant => new Variant().deserialize(variant)))
//             return instance
//         }
//     }
// }

//  class Variant {
//     constructor() {
//         this.id = Date.now()
//         this.name = ''
//         this.weight = 0
//         this.choices = []
//         this.causes = []

//         this.receiveName = (name) => {
//             !this.name && (this.name = name)
//             return this
//         }
//         this.addWeight = () => {
//             this.weight++
//             return this
//         }
//         this.addChoice = (choice) => {
//             this.choices = [
//                 ...this.choices, 
//                 choice
//             ]
//             return this
//         }
//         this.receiveChoice = (choice) => {
//             let index = this.choices.findIndex(item => item?.name == choice?.name) 
//             if (index > -1) {
//                 choice.variants.forEach(variant => this.choices[index].receiveVariant(variant))
//             } else {
//                 this.addChoice(choice)
//             }
//             return this
//         }
//         this.addData = (eventData) => {
//             console.log(eventData.name)
//             this.receiveName(eventData.name).addWeight()

//             eventData.events?.forEach(event => {
//                 const newVariant = new Variant().addData({name: event.eventName})
//                 const newChoice = new Choice(event.choiceName).receiveVariant(newVariant)
//                 this.receiveChoice(newChoice)
//             })
//             return this
//         }
//         this.serializeChoices = () => {
//             return this.choices.map(choice => choice.serialize())
//         }
//         this.serialize = () => {
//             return {
//                 id: this.id,
//                 name: this.name,
//                 choices: this.serializeChoices(),
//                 weight: this.weight,
//                 causes: this.causes
//             }
//         }
//         this.deserialize = (variant) => {
//             const instance = new Variant().receiveName(variant.name)
//             instance.id = variant.id
//             instance.choices = variant.choices.map(choice => new Choice().deserialize(choice))
//             for (variant.weight; variant.weight > 0; variant.weight--) {
//                 instance.addWeight()
//             }
//             return instance
//         }
//     }
// }
// const myData = new EventData().addEvent('choice1', 'event1').addEvent('choice1', 'event1').addEvent('choice2', 'event2').addEvent('choice2', 'event1')
// console.log(myData.serialize());
// console.log(new EventData().deserialize(myData.serialize()));
// const myVariant = new Variant().addData(myData).receiveName('myVariant')
// console.log(myVariant);
// const mySerializedVariant = myVariant.serialize()
// console.log(mySerializedVariant);
// const myDeserializedVariant = new Variant().deserialize(mySerializedVariant)
// console.log(myDeserializedVariant);
class Letter {
    constructor() {
        this.subClasses.forEach(Class => this[Class.forProperty] = new Class())
    }

    serialize() {
        function serializeObject(object) {
            const serialized = {}
            Object.getOwnPropertyNames(object)
                .filter(property => typeof object[property] !== 'function' || typeof object[property].serialize == 'function')
                .map(property => {
                    let target = object[property]
                    if (typeof target.serialize == 'function') {
                        serialized[property] = target.serialize()
                        return
                    }
                    if (Array.isArray(target)) {
                        target = serializeArray(target)
                        if (target != undefined && target.length > 0) serialized[property] = target
                        return
                    }
                    if (typeof target == 'object') {
                        serialized[property] = serializeObject(target)
                        return
                    }
                    serialized[property] = target
                    return
                })
            return serialized
        }

        function serializeArray(arr) {
            return arr.filter(item => typeof item !== 'function').map(item => typeof item == 'object' ? serializeObject(item) : (Array.isArray(item) ? serializeArray(item) : item))
        }

        return serializeObject(this)

    }

    subClasses = [
        class Markup {
            constructor() {
                this.id = this.generateId()
                this.name = 'letter #' + this.id
            }
            static forProperty = 'markup'

            generateId() {
                return Date.now()
            }
        },

        class Expression {
            constructor() {
                this.expectedType = 'unknown'
                this.text = 'unknown'
            }
            static forProperty = 'expression'
        },

        class SourceData {
            constructor() {
                this.subClasses.forEach(Class => this[Class.forProperty] = new Class())
            }
            static forProperty = 'sourceData'
            subClasses = [
                class Plain {
                    constructor() {
                        this.text = 'Should be some helpful text here'
                        this.files = 'Should be some helpful files here'
                    }
                    static forProperty = 'plain'
                },

                class Social {
                    constructor() {
                        this.contacts = 'Should be some helpful passes beyond local system'
                    }
                    static forProperty = 'social'
                },

                class Neural {
                    constructor() {
                        this.generators = []
                        this.instances = []
                    }
                    static forProperty = 'neural'
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
            static forProperty = 'flightControl'
        }
    ]
}

const letter = new Letter()

console.log(letter)
console.log(letter.serialize())
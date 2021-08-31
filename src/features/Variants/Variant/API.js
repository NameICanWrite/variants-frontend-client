
//TODO: add causes of variants (triggers)
export class EventData {
    constructor() {
        this.isNotEmpty = false
        this.events = []
        this.id = Date.now()
        this.load = () => {
            this.isNotEmpty = true
            return this
        }
        this.setName = (name) => {
            this.name = name
            return this
        }
        this.addEvent = (choiceName, eventName) => {
            this.events = [...this.events, {choiceName, eventName}]
            this.load()
            return this
        }
        this.receiveEvent = (choiceName, eventName) => {
            this.events = this.events.filter(item => item.choiceName !== choiceName) 
            this.addEvent(choiceName, eventName)
            return this
        }
        this.serialize = () => {
            return {
                id: this.id,
                name: this.name,
                events: this.events
            }
        }
        this.deserialize = (eventData) => {
            const instance = new EventData().setName(eventData.name)
            instance.id = eventData.id
            eventData.events.forEach((item) => instance.addEvent(item.choiceName, item.eventName))
            return instance
        }
    }
}

export class Choice {
    constructor(name, variants = []) {
        this.name = name
        this.variants = variants
        this.addVariant = (variant) => {
            this.variants = [...this.variants, variant]
            return this
        }
        this.receiveVariant = (variant) => {
            let index = this.variants.findIndex(item => item?.name == variant?.name) 

            if (index > -1) {
                this.variants[index]?.addWeight()
            } else {
                    this.addVariant(variant)
            }        
            return this
        }
        this.serializeVariants = () => {
            return this.variants?.map(variant => variant.serialize())
        }
        this.serialize = () => {
            return {
                name: this.name,
                variants: this.serializeVariants()
            }
        }
        this.deserialize = (choice) => {
            const instance = new Choice(choice.name, choice.variants?.map(variant => new Variant().deserialize(variant)))
            return instance
        }
    }
}

 export class Variant {
    constructor() {
        this.id = Date.now()
        this.name = ''
        this.weight = 0
        this.choices = []
        this.causes = []

        this.receiveName = (name) => {
            !this.name && (this.name = name)
            return this
        }
        this.addWeight = () => {
            this.weight++
            return this
        }
        this.addChoice = (choice) => {
            this.choices = [
                ...this.choices, 
                choice
            ]
            return this
        }
        this.receiveChoice = (choice) => {
            let index = this.choices.findIndex(item => item?.name == choice?.name) 
            if (index > -1) {
                choice.variants.forEach(variant => this.choices[index].receiveVariant(variant))
            } else {
                this.addChoice(choice)
            }
            return this
        }
        this.addData = (eventData) => {
            console.log(eventData.name)
            this.receiveName(eventData.name)

            eventData.isNotEmpty && this.addWeight()

            eventData.events?.forEach(event => {
                const newVariant = new Variant().addData({name: event.eventName, isNotEmpty: true})
                const newChoice = new Choice(event.choiceName).receiveVariant(newVariant)
                this.receiveChoice(newChoice)
            })
            return this
        }
        this.serializeChoices = () => {
            return this.choices?.map(choice => choice.serialize())
        }
        this.serialize = () => {
            return {
                id: this.id,
                name: this.name,
                choices: this.serializeChoices(),
                weight: this.weight,
                causes: this.causes
            }
        }
        this.deserialize = (variant) => {
            const instance = new Variant().receiveName(variant.name)
            instance.id = variant.id
            instance.choices = variant.choices?.map(choice => new Choice().deserialize(choice))
            for (variant.weight; variant.weight > 0; variant.weight--) {
                instance.addWeight()
            }
            return instance
        }
    }
}
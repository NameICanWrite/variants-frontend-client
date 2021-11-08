

export class Letter {
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
                    if (target instanceof Date) {
                        serialized[property] = target.toUTCString()
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
                this.notification = {
                    isDefault: false,
                    count: 1
                }
            }
            static forProperty = 'flightControl'
        }
    ]
}
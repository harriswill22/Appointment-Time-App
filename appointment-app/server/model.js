class Model {
    // Populates back-end with 9-5 
    constructor() {
        this.timeSlots = [{
                id: 1,
                time: '9: AM',
                name: '',
                phone: ''
            },
            {
                id: 2,
                time: '10: AM',
                name: '',
                phone: ''
            },
            {
                id: 3,
                time: '11: AM',
                name: '',
                phone: ''
            },
            {
                id: 4,
                time: '12: AM',
                name: '',
                phone: ''
            },
            {
                id: 5,
                time: '1: PM',
                name: '',
                phone: ''
            },
            {
                id: 6,
                time: '2: PM',
                name: '',
                phone: ''
            },
            {
                id: 7,
                time: '3: PM',
                name: '',
                phone: ''
            },
            {
                id: 8,
                time: '4: PM',
                name: '',
                phone: ''
            },
            {
                id: 9,
                time: '5: PM',
                name: '',
                phone: ''
            },
        ]
    }

    getTimeSlots() {
        return this.timeSlots;
    }

    getTimeSlot(slotId) {
        // Find a single time slot by id from the array of timeslots
        return this.timeSlots.find((timeSlot) => {
            return timeSlot.id === parseInt(slotId);
        });

    }

    updateTimeSlot(slotId, name, phone) {
        // Use to find slot index in timeSlots array
        const slotIndex = this.timeSlots.findIndex((timeSlot) => {
            return timeSlot.id === parseInt(slotId);
        });
        // Updates name and phone
        if (slotIndex === -1) {
            return false;
        }
        const timeSlotToUpdate = this.getTimeSlot(slotId);
        const updatedTimeSlot = {
            ...timeSlotToUpdate,
            name: name,
            phone: phone
        };

        // removes one slot and replaces it with an updated timeSlot
        this.timeSlots.splice(slotIndex, 1, updatedTimeSlot);
        return true;
    }

}

module.exports = Model;
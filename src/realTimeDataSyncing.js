// realTimeDataSyncing.js

class RealTimeDataSyncing {
    constructor() {
        this.data = {};
        this.listeners = new Set();
    }

    // Add a listener for data updates
    addListener(listener) {
        this.listeners.add(listener);
    }

    // Remove a listener
    removeListener(listener) {
        this.listeners.delete(listener);
    }

    // Update data and notify listeners
    updateData(key, value) {
        this.data[key] = value;
        this.notifyListeners();
    }

    // Get current data
    getData() {
        return this.data;
    }

    // Notify all listeners about data updates
    notifyListeners() {
        for (const listener of this.listeners) {
            listener(this.data);
        }
    }
}

module.exports = RealTimeDataSyncing;

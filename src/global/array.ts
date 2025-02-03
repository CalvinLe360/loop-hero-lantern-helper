function shuffle<T>(this: T[]) {
    for (var i = this.length - 1; i >= 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = this[i];
        this[i] = this[j];
        this[j] = temp;
    }

    return this
}

declare global {
    interface Array<T> {
        shuffle(): Array<T>
    }
}

Array.prototype.shuffle = shuffle
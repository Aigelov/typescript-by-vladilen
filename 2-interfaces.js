var rect1 = {
    id: 'rect1',
    color: 'green',
    size: {
        width: 20,
        height: 30
    }
};
var rect2 = {};
var rect3 = {};
var rect4 = {
    id: 'rect4',
    size: {
        width: 20,
        height: 30
    },
    getArea: function () {
        return this.size.width * this.size.height;
    }
};
var Clock = /** @class */ (function () {
    function Clock() {
        this.time = new Date;
    }
    Clock.prototype.setTime = function (date) {
        this.time = date;
    };
    return Clock;
}());
var css = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
};

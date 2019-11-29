var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(type) {
        this.nose = true;
        this.ear = 2;
        this.type = type;
    }
    Animal.prototype.voice = function (type) {
        return type + " makes a voice";
    };
    Animal.staticType = 'Animal';
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(type, size) {
        var _this = _super.call(this, type) || this;
        _this.size = size;
        return _this;
    }
    Cat.prototype.voice = function (type, size) {
        var voiceData = _super.prototype.voice.call(this, type);
        return voiceData + ". Size is " + size;
    };
    return Cat;
}(Animal));
var cat = new Cat('Cat', 'small');
console.log(cat);
console.log(cat.voice('Cat', 'small'));

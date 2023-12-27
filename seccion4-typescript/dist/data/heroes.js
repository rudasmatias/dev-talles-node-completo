"use strict";
//Es un molde que no se transpila
Object.defineProperty(exports, "__esModule", { value: true });
exports.heroes = void 0;
var Owner;
(function (Owner) {
    Owner[Owner["Marvel"] = 0] = "Marvel";
    Owner[Owner["DC"] = 1] = "DC";
})(Owner || (Owner = {}));
exports.heroes = [
    {
        id: 1,
        name: "Ironman",
        owner: "Marvel",
    },
    {
        id: 2,
        name: "Spiderman",
        owner: "Marvel",
    },
    {
        id: 3,
        name: "Batman",
        owner: "DC",
    },
];

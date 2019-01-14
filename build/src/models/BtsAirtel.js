"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let BtsAirtelSchema = new mongoose_1.Schema({
    mcc: { type: Number, default: 0 },
    mnc: { type: Number, default: 0 },
    lac: { type: Number, default: 0 },
    lat: { type: Number, default: 0 },
    lon: { type: Number, default: 0 },
    cellid: { type: Number, default: 0 },
    siteid: { type: Number, default: 0 },
    sitename: { type: String, default: '' },
    radio_type: { type: String, default: '' }
}, { collection: 'bts_airtel' });
exports.default = mongoose_1.model('BtsAirtel', BtsAirtelSchema);
//# sourceMappingURL=BtsAirtel.js.map
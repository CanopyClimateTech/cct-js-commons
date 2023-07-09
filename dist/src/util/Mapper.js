"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromJson = void 0;
const json_object_mapper_1 = require("json-object-mapper");
const fromJson = (from, to) => {
    return json_object_mapper_1.ObjectMapper.deserialize(to, from);
};
exports.fromJson = fromJson;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable functional/no-expression-statement */
const ava_1 = __importDefault(require("ava"));
const traverser_1 = require("./traverser");
ava_1.default('buildObject', t => {
    t.deepEqual(traverser_1.buildObject('obj', ['value1', 'value2']), { obj: ['value1', 'value2'] });
});
ava_1.default('buildInterface', t => {
    t.is(traverser_1.buildInterface('SomeInterface', `types`), `type SomeInterface = {\n\ttypes\n}\n`);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhdmVyc2VyLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL3RyYXZlcnNlci5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsdURBQXVEO0FBQ3ZELDhDQUFzQjtBQUV0QiwyQ0FBeUQ7QUFFekQsYUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsRUFBRTtJQUNwQixDQUFDLENBQUMsU0FBUyxDQUFDLHVCQUFXLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0FBQ3hGLENBQUMsQ0FBQyxDQUFBO0FBRUYsYUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxFQUFFO0lBQ3ZCLENBQUMsQ0FBQyxFQUFFLENBQUMsMEJBQWMsQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLEVBQUUsc0NBQXNDLENBQUMsQ0FBQTtBQUMxRixDQUFDLENBQUMsQ0FBQSJ9
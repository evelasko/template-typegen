"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable functional/no-expression-statement */
const ava_1 = __importDefault(require("ava"));
const traverser_1 = require("./traverser");
ava_1.default('extractMatchAndAppend', t => {
    const a = '#each employee';
    const b = '#each user.book as |book bookId|';
    const c = '#each otherArray as |value key|';
    t.deepEqual(traverser_1.extractMatchAndAppend(/(?<=#each |#unless )(.+?)(?= |\.|}|$)/g)(a, '%'), 'employee%');
    t.deepEqual(traverser_1.extractMatchAndAppend(/(?<=#each |#unless )(.+?)(?= |\.|}|$)/g)(b, '%'), 'user%');
    t.deepEqual(traverser_1.extractMatchAndAppend(/(?<=#each |#unless )(.+?)(?= |\.|}|$)/g)(c, '%'), 'otherArray%');
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLmhhbmRsZXJzLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL3N0cmluZy5oYW5kbGVycy5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsdURBQXVEO0FBQ3ZELDhDQUFzQjtBQUV0QiwyQ0FBbUQ7QUFFbkQsYUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUMsQ0FBQyxFQUFFO0lBQzlCLE1BQU0sQ0FBQyxHQUFHLGdCQUFnQixDQUFBO0lBQzFCLE1BQU0sQ0FBQyxHQUFHLGtDQUFrQyxDQUFBO0lBQzVDLE1BQU0sQ0FBQyxHQUFHLGlDQUFpQyxDQUFBO0lBQzNDLENBQUMsQ0FBQyxTQUFTLENBQUMsaUNBQXFCLENBQUMsd0NBQXdDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUE7SUFDakcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxpQ0FBcUIsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQTtJQUM3RixDQUFDLENBQUMsU0FBUyxDQUFDLGlDQUFxQixDQUFDLHdDQUF3QyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLGFBQWEsQ0FBQyxDQUFBO0FBQ3ZHLENBQUMsQ0FBQyxDQUFBIn0=
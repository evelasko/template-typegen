"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable functional/no-conditional-statement */
/* eslint-disable functional/no-expression-statement */
const yargs_1 = __importDefault(require("yargs"));
const sfn_1 = require("./lib/sfn");
const traverser_1 = require("./lib/traverser");
const input = yargs_1.default.usage('Usage: template-typegen <pathToTemplatesFolder> <pathToOutputFolder>').argv;
if (!input._[0] && !input._[1]) {
    yargs_1.default.showHelp();
    yargs_1.default.exit(1, new Error('missing arguments'));
}
sfn_1.recursePath(input._[0]).then(r => {
    sfn_1.writeFile(input._[1], traverser_1.traverseFiles(r));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NsaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHdEQUF3RDtBQUN4RCx1REFBdUQ7QUFDdkQsa0RBQXlCO0FBRXpCLG1DQUFrRDtBQUNsRCwrQ0FBK0M7QUFFL0MsTUFBTSxLQUFLLEdBQUcsZUFBSyxDQUFDLEtBQUssQ0FBQyxzRUFBc0UsQ0FBQyxDQUFDLElBQUksQ0FBQTtBQUV0RyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDNUIsZUFBSyxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBQ2hCLGVBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQTtDQUNoRDtBQUVELGlCQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUM3QixlQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSx5QkFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDM0MsQ0FBQyxDQUFDLENBQUEifQ==
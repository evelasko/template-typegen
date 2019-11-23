/* eslint-disable functional/no-conditional-statement */
/* eslint-disable functional/no-expression-statement */
import yargs from 'yargs';
import { recursePath, writeFile } from './lib/sfn';
import { traverseFiles } from './lib/traverser';
const input = yargs.usage('Usage: template-typegen <pathToTemplatesFolder> <pathToOutputFolder>').argv;
if (!input._[0] && !input._[1]) {
    yargs.showHelp();
    yargs.exit(1, new Error('missing arguments'));
}
recursePath(input._[0]).then(r => {
    writeFile(input._[1], traverseFiles(r));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NsaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3REFBd0Q7QUFDeEQsdURBQXVEO0FBQ3ZELE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQTtBQUV6QixPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLFdBQVcsQ0FBQTtBQUNsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUE7QUFFL0MsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxzRUFBc0UsQ0FBQyxDQUFDLElBQUksQ0FBQTtBQUV0RyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDNUIsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBQ2hCLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQTtDQUNoRDtBQUVELFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO0lBQzdCLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQzNDLENBQUMsQ0FBQyxDQUFBIn0=
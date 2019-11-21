/* eslint-disable functional/no-conditional-statement */
/* eslint-disable functional/no-expression-statement */
import yargs from 'yargs';
import { recursePath } from './lib/sfn';
import { traverseFiles } from './lib/traverser';
const input = yargs.usage('Usage: template-typegen <pathToTemplatesFolder> <pathToOutputFolder>').argv;
if (!input._[0] && !input._[1]) {
    yargs.showHelp();
    yargs.exit(1, new Error('missing arguments'));
}
recursePath(input._[0]).then(r => {
    console.log(traverseFiles(r));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NsaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3REFBd0Q7QUFDeEQsdURBQXVEO0FBQ3ZELE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQTtBQUV6QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sV0FBVyxDQUFBO0FBQ3ZDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQTtBQUUvQyxNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLHNFQUFzRSxDQUFDLENBQUMsSUFBSSxDQUFBO0FBRXRHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUM1QixLQUFLLENBQUMsUUFBUSxFQUFFLENBQUE7SUFDaEIsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFBO0NBQ2hEO0FBRUQsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUNqQyxDQUFDLENBQUMsQ0FBQSJ9
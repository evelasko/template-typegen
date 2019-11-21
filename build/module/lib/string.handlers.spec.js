/* eslint-disable functional/no-expression-statement */
import test from 'ava';
import { extractMatchAndAppend } from './traverser';
test('extractMatchAndAppend', t => {
    const a = '#each employee';
    const b = '#each user.book as |book bookId|';
    const c = '#each otherArray as |value key|';
    t.deepEqual(extractMatchAndAppend(/(?<=#each |#unless )(.+?)(?= |\.|}|$)/g)(a, '%'), 'employee%');
    t.deepEqual(extractMatchAndAppend(/(?<=#each |#unless )(.+?)(?= |\.|}|$)/g)(b, '%'), 'user%');
    t.deepEqual(extractMatchAndAppend(/(?<=#each |#unless )(.+?)(?= |\.|}|$)/g)(c, '%'), 'otherArray%');
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLmhhbmRsZXJzLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL3N0cmluZy5oYW5kbGVycy5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVEQUF1RDtBQUN2RCxPQUFPLElBQUksTUFBTSxLQUFLLENBQUE7QUFFdEIsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sYUFBYSxDQUFBO0FBRW5ELElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDLENBQUMsRUFBRTtJQUM5QixNQUFNLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQTtJQUMxQixNQUFNLENBQUMsR0FBRyxrQ0FBa0MsQ0FBQTtJQUM1QyxNQUFNLENBQUMsR0FBRyxpQ0FBaUMsQ0FBQTtJQUMzQyxDQUFDLENBQUMsU0FBUyxDQUFDLHFCQUFxQixDQUFDLHdDQUF3QyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFBO0lBQ2pHLENBQUMsQ0FBQyxTQUFTLENBQUMscUJBQXFCLENBQUMsd0NBQXdDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUE7SUFDN0YsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FBQTtBQUN2RyxDQUFDLENBQUMsQ0FBQSJ9
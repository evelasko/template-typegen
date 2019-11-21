/* eslint-disable functional/no-expression-statement */
import test from 'ava';
import { buildObject, buildInterface } from './traverser';
test('buildObject', t => {
    t.deepEqual(buildObject('obj', ['value1', 'value2']), { obj: ['value1', 'value2'] });
});
test('buildInterface', t => {
    t.is(buildInterface('SomeInterface', `types`), `interface SomeInterface {\n\ttypes\n}\n`);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhdmVyc2VyLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL3RyYXZlcnNlci5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVEQUF1RDtBQUN2RCxPQUFPLElBQUksTUFBTSxLQUFLLENBQUE7QUFDdEIsT0FBTyxFQUFFLFdBQVcsRUFBRSxjQUFjLEVBQUUsTUFBTSxhQUFhLENBQUE7QUFFekQsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsRUFBRTtJQUNwQixDQUFDLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUE7QUFDeEYsQ0FBQyxDQUFDLENBQUE7QUFFRixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLEVBQUU7SUFDdkIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxFQUFFLHlDQUF5QyxDQUFDLENBQUE7QUFDN0YsQ0FBQyxDQUFDLENBQUEifQ==
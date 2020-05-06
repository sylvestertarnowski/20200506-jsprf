import { from } from 'rxjs'
import { map } from 'rxjs/operators'

/**
   #Task:
    1. Uncomment the subscription mutation: Sub - # 1, see what happened in Sub - # 2.
       Why is this happening?
    2. Suggest solutions to the problem

   #Goal:
  Understanding that streams should be considered "read-only".
 */

  const name$ = from([
    {name: 'Michał'},
    {name: 'Zbyszek'},
    {name: 'Krysia'},
  ]);

  // Sub - #1
  name$.subscribe(user => {
    console.log(user.name)
    // Uncomment the data mutation and see what happens in the subscription below
    // user.name += '_troll';
  });

  setTimeout(() => {

    // Sub - #2
    name$.pipe(
      map(user => `Welcome back ${user.name}!`)
    ).subscribe(x => console.log(x));
  }, 3000);

import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
// const sorter = new Sorter(collection);
numbersCollection.sort();
console.log(numbersCollection.data);

const characterCollection = new CharactersCollection("xaXtJ");
characterCollection.sort();
console.log(characterCollection.data);

const linkedList = new LinkedList();
linkedList.add(3);
linkedList.add(-76);
linkedList.add(543);
linkedList.add(10);

linkedList.sort();
linkedList.print();

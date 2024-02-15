import LocationFinder from './locationFinder.js';
import { StressTest } from './stressTest.js';

export let options = StressTest();

export default function () {
    LocationFinder();
}

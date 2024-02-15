import LocationFinder from './locationFinder.js';
import { ScalabilityLoadTest } from './scalabilityLoadTest.js';

export let options = ScalabilityLoadTest();

export default function () {
    LocationFinder();
}

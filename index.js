import { movieData } from './js/_fetchData.js';
import ghibliData from './js/_createElement.js';
import selector from './js/_selectContent.js';
import showMovieDetails from './js/_movieDetails.js';
import resetSelect from './js/_resetSelection.js';

ghibliData(movieData);
selector();
showMovieDetails();
resetSelect();
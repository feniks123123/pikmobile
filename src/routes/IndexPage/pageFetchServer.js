import fetchLocations from './../../modules/Geo/actions/fetchLocations';
import fetchSpecialOffers from './../../modules/SpecialOffers/actions/fetchSpecialOffers';

import { filterMain, filterLast } from './../../modules/Complexes/actions/utils/filterComplexes';

import { INIT_STATE } from './../../modules/Geo/constants';
import { TYPES } from '../../common/constants'
import getDefaultCoordinates from "../../modules/Geo/utils/getDefaultCoordinates";
import sunsetCalc from "../../modules/Geo/utils/sunsetCalc";

export default (path, params, propertyType) => new Promise((reject, resolve) => {
  fetchData(path, params.district, propertyType)
    .then(data => reject(data))
    .catch(err => resolve(err));
});

function fetchData(path, district, propertyType) {
  return fetchLocations(path)
    .then(({locationsList, ...geo}) => {

      return Promise.all([
        fetchSpecialOffers(locationsList, TYPES[ propertyType ]),
      ])
        .then(([ offers ]) => {
          const { latitude, longitude } = getDefaultCoordinates(geo.currentLocation.id);
          const sunsetStart = sunsetCalc(latitude, longitude);

          return {
            complexes: {
              propertyType
            },
            geo: {
              ...INIT_STATE,
              ...geo,
              sunsetStart
            },
            specialOffers: { offers }
          }
        })
        .catch(err => err);
    })
    .then(data => data)
    .catch(err => err);
}
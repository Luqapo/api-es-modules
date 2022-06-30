import { Reservation } from '../model/reservation.js';

async function create(query) {
  const reservation = await Reservation.create(query);

  return reservation.rows;
}

async function get(query) {
  const reservations = await Reservation.get(query);

  return reservations.rows;
}

async function filters() {
  const result = await Reservation.getFilters();

  return result;
}

export default {
  create,
  get,
  filters,
};

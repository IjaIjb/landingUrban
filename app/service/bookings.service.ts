import { catchError, from, map, Observable } from "rxjs";
import { storeAuthToken } from "../shared/utils/ls";
import http, { handleError } from "./api";

type LoginT = {
  email: string;
  password: string;
};

export const createBookings = (data: any): Observable<any> => {
  return from(
    http.post("/transaction/multi-booking-transaction", data) // Using http2 instance
  ).pipe(
    map((response: any) => response),
    catchError((e) => handleError(e))
  );
};

export const searchBooking = (payload: any): Observable<any> => {
  return from(
    http.get<any>("/bookings/search", {
      params: { ...payload },
    })
  ).pipe(
    map((response) => response.data),
    catchError(handleError)
  );
};

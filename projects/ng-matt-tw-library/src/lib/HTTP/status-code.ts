export enum StatusCode {
  UNKNOWN = 0,
  OK = 200,
  CREATED = 201,
  ACCEPTED = 202,
  NO_CONTENT = 204,
  UNAUTHORIZED = 401,
  CONFLICT = 409,
  EXPECTATION_FAILED = 417,
  UNPROCESSABLE_ENTITY = 422,
  HTTP_LOCKED = 423,
  INTERNAL_SERVER_ERROR = 500,
}

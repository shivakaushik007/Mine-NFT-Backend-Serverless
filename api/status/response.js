// Http Response Status 200.
const ok = 200;
const created = 201;
const accepted = 202;
const nonAuthInfo = 203; //This is mostly used for mirrors or backups of another resource
const noContent = 204;
const resetContent = 205;
const partialContent = 206;

// Http Response Status 400.
const badRequest = 400;
const unAuthorized = 401;
const forbidden = 403;
const notFound = 404;
const methodNotAllowed = 405;
const notAcceptable = 406;
const conflict = 409;

// Http Response Status 500.

export default {
  ok,
  created,
  accepted,
  nonAuthInfo,
  noContent,
  resetContent,
  partialContent,
  badRequest,
  unAuthorized,
  forbidden,
  notFound,
  methodNotAllowed,
  notAcceptable,
  conflict,
};
export enum Error {
  NONE = '',
  DOWNLOADING = 'An error occurred while executing the request',
  LOGIN_EMPTY = 'Username can\'t be empty',
  PASSWORD_EMPTY = 'Password can\'t be empty',
  INVALID_CREDENTIALS = 'Incorrect username or password',
  DATA_SENDING_ERROR = 'Data sending error'
}

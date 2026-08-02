import { isHttpError } from 'http-errors';

export const errorHandler = (err, req, res, _next) => {
  if (isHttpError(err)) {
    res.status(err.status).json({
      message: err.message || err.name,
    });
    return;
  }

  res.status(500).json({
    message: 'Something went wrong',
  });
};
export class AppError extends Error {
  public readonly statusCode: number;
  public readonly isOperatinal: boolean;
  public readonly details?: any;

  constructor(
    message: string,
    statusCode: number,
    isOperational = true,
    details?: any,
  ) {
    super(message);
    this.statusCode = statusCode;
    this.isOperatinal = isOperational;
    this.details = details;
    Error.captureStackTrace(this);
  }
}

// Not Found Error
export class NotFoundErrror extends AppError {
  constructor(message = "Resouces not found") {
    super(message, 404);
  }
}

// Validation Error (use for Joi/zod/react-hook-form valiation errrs)
export class ValidationError extends AppError {
  constructor(message = "Invalid request data", details?: any) {
    super(message, 400, true, details);
  }
}

// Authentication Error
export class AuthError extends AppError {
  constructor(message = "Unauthorized", details?: any) {
    super(message, 401, true, details);
  }
}

// Forbidden Error (For Insufficient Permissions)
export class ForbiddenError extends AppError {
  constructor(message = "Forbidden Access", details?: any) {
    super(message, 403, true, details);
  }
}

// Database Error
export class DatabaseError extends AppError {
  constructor(message = "Database error", details?: any) {
    super(message, 500, false, details);
  }
}

// Rate Limit Error (If user exceedds API Limit)
export class RateLimitError extends AppError {
  constructor(message = "Too many requests, please try again later", details?: any) {
    super(message, 429, true, details);
  }
}
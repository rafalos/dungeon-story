declare module 'express-serve-static-core' {
  interface Response {
    error: (code: number, message: string) => Response;
    success: (code: number, message: string, result: any) => Response;
  }
}

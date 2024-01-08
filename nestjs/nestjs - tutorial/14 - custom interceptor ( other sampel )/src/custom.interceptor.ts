import { NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";
import { map } from "rxjs";
export class CustomInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, handler: CallHandler) {
    console.log("This is intercepting the requset");
    console.log({ context });

    return handler.handle().pipe(
      map((data) => {
        // data is response
        console.log("This is intercepting the response");
        console.log(data);
        const response = { ...data, createdAt: data.created_at };
        delete response.updated_at;
        delete response.created_at;
        delete response.amount;
        return response;
        return data;
      }),
    );
  }
}

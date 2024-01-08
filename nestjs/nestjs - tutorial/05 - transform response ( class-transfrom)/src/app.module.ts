import { ClassSerializerInterceptor, Module } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { AppService } from "./app.service";
import { AppController } from "./app.controller";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    // add new provide and useClass
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class AppModule {}

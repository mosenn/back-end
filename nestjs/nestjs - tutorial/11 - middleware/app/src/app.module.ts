import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Logger } from './middleware/log.middleware';
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
//* add class middleware for all routes and controllers
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(Logger)
      .forRoutes({ path: 'user/*', method: RequestMethod.GET });
  }
}
//* with global middleware in main.ts
// export class AppModule {}

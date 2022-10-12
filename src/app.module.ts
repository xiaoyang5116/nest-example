import { Module } from '@nestjs/common';
import { AppController, AdminController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';

@Module({
  imports: [],
  controllers: [AppController, CatsController, AdminController],
  providers: [AppService],
})
export class AppModule { }

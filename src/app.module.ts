import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedModule } from './Modules/Shared/shared.module';
import { UserModule } from './Modules/User/user.module';

@Module({
  imports: [SharedModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

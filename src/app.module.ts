import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InternalModule } from './internal/internal.module';
import { ExternalModule } from './external/external.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [InternalModule, ExternalModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

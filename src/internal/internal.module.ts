import { Module } from '@nestjs/common';
import { ExternalModule } from './external.module';
import { ProductsController } from './controllers/products.controller';
import { ProductsService } from './services/products.service';

@Module({
  imports: [ExternalModule],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class InternalModule {}

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VoitureModule } from './voiture/voiture.module';
import { VoiturModule } from './voitur/voitur.module';

@Module({imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    VoitureModule,
    VoiturModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

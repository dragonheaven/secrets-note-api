import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SecretNoteModule } from './secret-note/secret-note.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './common/env'
@Module({
  imports: [
    MongooseModule.forRoot(configuration().database.url),
    SecretNoteModule,
    ConfigModule.forRoot({
      load: [configuration]
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

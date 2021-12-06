import { Module } from "@nestjs/common"
// import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleController } from "./schedule.controller"
// import { Schedules } from './schedule.entity';
import { ScheduleService } from "./schedule.service"

@Module({
  // imports: [],
  controllers: [ScheduleController],
  providers: [ScheduleService],
})
export class ScheduleModule {}

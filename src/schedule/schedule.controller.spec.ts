import { Test, TestingModule } from "@nestjs/testing"

import { ScheduleController } from "./schedule.controller"
import { ScheduleService } from "./schedule.service"

import { CreateScheduleDto } from "./dto/create-schedule.dto"

describe("ScheduleController", () => {
  let scheduleController: ScheduleController

  const mockScheduleService = {
    create: jest.fn((dto) => {
      return {
        id: Date.now(),
        ...dto,
      }
    }),
    getById: jest.fn().mockImplementation(() => {
      return {
        id: 0,
        day: "Monday",
        subject: "English",
      }
    }),
    getAll: jest.fn().mockImplementation(() => {
      return {
        schedules: [],
      }
    }),
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScheduleController],
      providers: [ScheduleService],
    })
      .overrideProvider(ScheduleService)
      .useValue(mockScheduleService)
      .compile()

    scheduleController = module.get<ScheduleController>(ScheduleController)
  })

  const scheduleExpect = {
    id: expect.any(Number),
    day: expect.any(String),
    subject: expect.any(String),
  }

  const schedulesExpect = {
    schedules: expect.any(Array),
  }

  it("should be defined", () => {
    expect(scheduleController).toBeDefined()
  })

  it("should find a single schedule", () => {
    const id = "0"

    expect(scheduleController.getOne(id)).toEqual(scheduleExpect)
  })

  it("should return array of schedules", () => {
    expect(scheduleController.getAll()).toEqual(schedulesExpect)
  })
})

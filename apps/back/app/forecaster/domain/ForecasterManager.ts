import { CreateForecasterDto, ForecasterManagerUseCase } from "#forecaster/domain/usecase/ForecasterManagerUseCase";
import { inject } from "@adonisjs/core";
import { ForecasterFactory } from "./ForecasterFactory.js";
import { ForecasterRepository } from "./repository/ForecasterRepository.js";

@inject()
export class ForecasterManager implements ForecasterManagerUseCase {

  constructor(
    private forecasterFactory: ForecasterFactory,
    private forecasterRepository: ForecasterRepository,
  ) {}
  
  public async create(createForecasterDto: CreateForecasterDto): Promise<string> {
    const forecaster = this.forecasterFactory.create(createForecasterDto)

    await this.forecasterRepository.save(forecaster)

    return forecaster.id;
  }
}
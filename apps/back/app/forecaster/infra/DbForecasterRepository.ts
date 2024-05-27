import { Forecaster } from "#forecaster/domain/Forecaster";
import { ForecasterRepository } from "#forecaster/domain/repository/ForecasterRepository";
import { ForecasterModel } from "#models/forecaster";

export class DbForecasterRepository implements ForecasterRepository {
  public async save(forecaster: Forecaster): Promise<void> {
    await ForecasterModel.updateOrCreate({ id: forecaster.id }, forecaster)
  }
}
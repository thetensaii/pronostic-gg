import { Forecaster } from "../Forecaster.js";

export abstract class ForecasterRepository {
  abstract save: (forecaster: Forecaster) => Promise<void>
}
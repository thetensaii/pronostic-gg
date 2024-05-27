export type CreateForecasterDto = {
  username: string
}

export abstract class ForecasterManagerUseCase {
  abstract create: (createForecasterDto: CreateForecasterDto) => Promise<string>
}
export class UUIDGenerator {
  public generate(): string {
    return crypto.randomUUID()
  }
}
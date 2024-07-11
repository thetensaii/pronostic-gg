export class UUIDGenerator {
  generate(): string {
    return crypto.randomUUID()
  }
}

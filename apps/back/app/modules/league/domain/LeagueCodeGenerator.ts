export class LeagueCodeGenerator {
  public generate(): string {
    const codeLength = 7
    let code = ''
    
    for(let i = 0; i < codeLength; i++){
      code += this.getRandomCharacter()
    }

    return code
  }

  private getRandomCharacter(): string {
    const alphaNumCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789'
    const character = alphaNumCharacters[Math.floor(Math.random() * alphaNumCharacters.length)]
    return Math.random() > 0.5 ? character : character.toUpperCase()
  }
}
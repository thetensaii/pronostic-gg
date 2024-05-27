type ForecasterProps = {
  id: string,
  username: string,
}

export class Forecaster {
  public id: string;
  public username: string;

  constructor(props: ForecasterProps){
    this.id = props.id
    this.username = props.username
  }
}
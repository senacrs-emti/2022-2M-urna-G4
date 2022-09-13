export interface CandidateProps {
  id: number;
  name: string;
  lastname: string;
  party: string;
  post: string;
}

export class Candidate {
  private props: CandidateProps;

  get id() {
    return this.props.id;
  }

  get name() {
    return `${this.props.name} ${this.props.lastname}`;
  }

  get party() {
    return this.props.party;
  }

  constructor(props: CandidateProps) {
    this.props = props;
  }
}

export interface IGalaxiesRepositoriesDTO {
  id?: string;
  name: string;
  description: string;
  uncovered: Date;

  numberOfStars?: number;
  numberOfBlackHoles?: number;
  numberOfSuperMassiveBlackHoles?: number;
}

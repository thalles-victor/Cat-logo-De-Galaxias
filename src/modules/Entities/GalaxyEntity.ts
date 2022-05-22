import { v4 as uudiv4 } from 'uuid';

class GalaxyEntity {
  id?: string;
  name: string;
  description: string;
  uncovered: Date;

  numberOfStars: number;
  numberOfBlackHoles: number;
  numberOfSuperMassiveBlackHoles: number;

  created_at: Date;
  updated_at: Date;

  constructor() {
    if (!this.id)   {
      this.id = uudiv4()
    }
    this.created_at = new Date();

    /* Lembrar que quando atualizar 
       (put ou path) usar o new Date()
       para atualizar o updated_at.
    */
    this.updated_at = new Date();
  }
};

export { GalaxyEntity };
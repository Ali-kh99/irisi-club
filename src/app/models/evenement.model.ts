import {Media} from './media.model';

export class Evenement {
  public id: number;
  public titre: string;
  public sousTitre: string;
  public date: Date;
  public pts_rec: number;
  public isPublier: boolean;
  public medias: Array<Media>;
}

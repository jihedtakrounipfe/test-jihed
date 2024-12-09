export class Post {
    _id: number;
    titre: string;
    contenu: string;
  
    constructor(_id: number, titre: string, contenu: string) {
      this._id = _id;
      this.titre = titre;
      this.contenu = contenu;
    }
  }
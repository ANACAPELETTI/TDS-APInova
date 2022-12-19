
interface MinaInterface{
    id?: string;
    name: string;
    level: number;
}

export class Mina {
    id?: string;
    name: string;
    level: number;

    constructor(mina: MinaInterface){
        this.name = mina.name;
        this.level = mina.level;
    }

    toJson(){
        return {
            'minaName' : this.name!,
            'level' : this.level
        }
    }

    fromJson(json:any){
        this.name = json['name'],
        this.level = json['level']
    }

    public toJsonString() {
        return JSON.stringify(this);
    }

    public toJsonObject() {
        return JSON.parse(this.toJsonString());
    }
  }
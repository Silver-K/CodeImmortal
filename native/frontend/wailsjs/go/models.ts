export namespace battle {
	
	export class Position {
	    X: number;
	    Y: number;
	
	    static createFrom(source: any = {}) {
	        return new Position(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.X = source["X"];
	        this.Y = source["Y"];
	    }
	}
	export class CharacterInBattle {
	    BattleId: number;
	    CharacterId: string;
	    Position: Position;
	    Resource: string;
	    Statics: {[key: string]: string};
	
	    static createFrom(source: any = {}) {
	        return new CharacterInBattle(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.BattleId = source["BattleId"];
	        this.CharacterId = source["CharacterId"];
	        this.Position = this.convertValues(source["Position"], Position);
	        this.Resource = source["Resource"];
	        this.Statics = source["Statics"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class Battle {
	    BattleId: string;
	    Characters: CharacterInBattle[];
	
	    static createFrom(source: any = {}) {
	        return new Battle(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.BattleId = source["BattleId"];
	        this.Characters = this.convertValues(source["Characters"], CharacterInBattle);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	

}


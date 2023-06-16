// Soldier
class Soldier {
    constructor(health, strength) {
      this.health=health;
      this.strength=strength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
      this.health -= damage;
    }
  }
  
  // Viking
  class Viking extends Soldier {
    constructor(name,health,strength){
        super(health,strength)
        this.name = name;
    }
    receiveDamage(damage){
        this.health -= damage
        if(this.health>0){
            return (`${this.name} has received ${damage} points of damage`);
        }
        else{
            return (`${this.name} has died in act of combat`);
        }
    }
    battleCry(){
        return "Odin Owns You All!";
    }
  }
  
  // Saxon
  class Saxon extends Soldier{
    receiveDamage(damage){
        this.health -= damage;
        if(this.health>0){
            return(`A Saxon has received ${damage} points of damage`);
        }
        else{
            return(`A Saxon has died in combat`);
        }
    }
  }
  
  // War
  class War {
    vikingArmy = [];
    saxonArmy= [];
    addViking(Viking){
        this.vikingArmy.push(Viking);
    }
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon);
    }

    vikingAttack() {
        let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    
        let activeSaxon = this.saxonArmy[saxonIndex];
        let activeViking = this.vikingArmy[vikingIndex];
        
        let damage = activeViking.strength;
        let saxonDamageTaken = activeSaxon.receiveDamage(damage);
    
        if(activeSaxon.health <= 0){
            this.saxonArmy.splice(saxonIndex, 1);
        }
        return saxonDamageTaken;
    }

    saxonAttack() {
        let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    
        let activeSaxon = this.saxonArmy[saxonIndex];
        let activeViking = this.vikingArmy[vikingIndex];
        
        let damage = activeSaxon.strength;
        let vikingDamageTaken = activeViking.receiveDamage(damage);
    
        if(activeViking.health <= 0){
            this.vikingArmy.splice(vikingIndex, 1);
        }
        return vikingDamageTaken;
    } 
    
    showStatus(){
        if(this.vikingArmy.length===0){
            return "Saxons have fought for their lives and survived another day..."
        }
        else if(this.saxonArmy.length===0){
            return "Vikings have won the war of the century!"
        }
        else{
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
  }
 





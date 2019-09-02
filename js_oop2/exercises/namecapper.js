

class NameCapper{
    constructor( name ){
        this.handleClick = this.handleClick.bind( this );
        this.name = name;
        this.mode = null;
        this.dom = null;
        this.lowerCaseName();
    }
    handleClick(){
        if(this.mode==='lower'){
            this.upperCaseName();
        } else {
            this.lowerCaseName();
        }
        this.update();
    }
    upperCaseName(){
        this.name = this.name.toUpperCase();
        this.mode = 'upper';
    }
    lowerCaseName(){
        this.name = this.name.toLowerCase();
        this.mode = 'lower';
    }
    update(){
        this.dom.text( this.name );
    }
    getName(){
        return this.name;
    }
    setName( newName ){
        this.name = newName;
        this.lowerCaseName();
        this.update();
        if(this.name===newName.toLowerCase()){
            return true;
        }
        return false;
    }
    render(){
        this.dom = $("<div>").addClass('nameHolder');
        this.dom.click( this.handleClick );
        this.update();
        return this.dom;
    }

}
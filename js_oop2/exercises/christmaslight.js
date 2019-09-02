
class ChristmasLight{
    constructor( colors ){
        this.handleClick = this.handleClick.bind( this );
        this.colors = colors;
        this.dom = null;
        this.colorIndex = 0;
    }
    cycleColor(){
        this.colorIndex++;
        if( this.colorIndex === this.colors.length ){
            this.colorIndex=0;
        }
    }
    displayColor(){
        this.dom.css('background-color', this.colors[ this.colorIndex ]);
    }
    handleClick(){
        this.cycleColor();
        this.displayColor();
    }
    render(){
        this.dom = $("<div>", {
            class: 'christmasLight',
            on: {
                click: this.handleClick
            }
        });
        this.displayColor();
        return this.dom;
    }
}
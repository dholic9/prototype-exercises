

class CounterMedium{
    constructor( initialValue ){
        this.dom = null;
        this.handleClick = this.handleClick.bind( this );
        this.value = initialValue;
    }
    addClickHandler(){
        this.dom.click( this.handleClick );
    }
    handleClick(){
        this.increment();
    }
    increment(){
        this.value++;
        this.update();
    }
    update(){
        this.dom.text( this.value );
    }
    render(){
        this.dom = $("<div>").addClass('counter');
        this.update();
        return this.dom;
    }
}
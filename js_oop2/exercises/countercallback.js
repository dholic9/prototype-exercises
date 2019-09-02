

class CounterCallback{
    constructor( initialValue, clickCallback){
        this.dom = null;
        this.clickCallback = clickCallback;
        this.handleClick = this.handleClick.bind( this );
        this.value = initialValue;
    }
    addClickHandler(){
        this.dom.click( this.handleClick );
    }
    handleClick(){
        this.clickCallback( this );
        this.increment();
    }
    getValue(){
        return this.value;
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
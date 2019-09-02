

class CounterBasic{
    constructor( initialValue, targetDom ){
        this.dom = $(targetDom);
        this.handleClick = this.handleClick.bind( this );
        this.value = initialValue;
        this.addClickHandler();
        this.update();
    }
    addClickHandler(){
        this.dom.click( this.handleClick );
    }
    handleClick(){
        console.log('test');
        this.increment();
    }
    increment(){
        this.value++;
        this.update();
    }
    update(){
        this.dom.text( this.value );
    }
}
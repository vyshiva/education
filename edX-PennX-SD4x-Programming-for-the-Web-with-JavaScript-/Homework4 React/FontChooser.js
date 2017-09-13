class FontChooser extends React.Component {

    constructor(props) {
	super(props);
	var weight = true;
	if (this.props.bold == 'false') weight = false; 
	var min, max;
	if (Number(this.props.min) > Number(this.props.max)) {
		min = Number(this.props.max); 
		max = Number(this.props.min);
	} else {
		min = Number(this.props.min); 
		max = Number(this.props.max);
	}; 
	if (min <=0) min = 1;
	var sizeFont = Number(this.props.size);
	this.state = { hide : true, stBold: weight, stSize :sizeFont, min : min, max: max, colorSpan: 'black'};
    }
    
    textClick(){
		this.setState ({ hide: !this.state.hide});
	}
	changeBold (){
		this.setState ({ stBold: !this.state.stBold});
	}
	onClickIncr (){
		var min = this.state.min;	
		var max = this.state.max;
		var size = this.state.stSize;
		this.setState({colorSpan: 'black'});
		if (size > max) size = max;
		if (size < min) size = min;
		if (size < max) size++;
		if (size == min || size == max) this.setState({colorSpan: 'red'});
		this.setState ({ stSize: size });
	}
	onClickDecr (){
		var min = this.state.min;
		var max = this.state.max;
		var size = this.state.stSize;
		this.setState({colorSpan: 'black'});
		if (size > max) size = max;
		if (size < min) size = min;
		if (size > min) size--;
		if (size == min || size == max) this.setState({colorSpan: 'red'});
		this.setState ({ stSize: size });
	}
	handleDblClick(){
		this.setState ({ stSize: Number(this.props.size) , colorSpan: 'black'});
	}
	
    render() {
		var stateHide = this.state.hide;
		var stateBold = this.state.stBold ? 'bold' : 'normal';
		var stateSize = this.state.stSize;
		var colorSize = this.state.colorSpan;
	return(
	       <div>
	       <input type="checkbox" id="boldCheckbox" hidden={stateHide} onChange={this.changeBold.bind(this)} checked={this.state.stBold}/>
	       <button id="decreaseButton" hidden={stateHide} onClick = {this.onClickDecr.bind(this)}>-</button>
	       <span id="fontSizeSpan" style={{color: colorSize}} hidden={stateHide} onDoubleClick={this.handleDblClick.bind(this)}>{this.state.stSize} </span>
	       <button id="increaseButton" hidden={stateHide} onClick = {this.onClickIncr.bind(this)}>+</button>
	       <span id="textSpan" style={{fontWeight: stateBold, fontSize: stateSize}} onClick = {this.textClick.bind(this)}>{this.props.text}</span>
	       </div>
	);
    }
}


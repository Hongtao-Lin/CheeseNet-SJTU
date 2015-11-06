var breadcrumbs = ['教材与单元', '选择知识体系', '知识点选择' ,'题目选择', '布置保存'];
var currentBread = 3;
var breadState = [];
for (var i = 0; i < breadcrumbs.length; ++i)
{
	if( i < currentBread)
		breadState[i] = "clickable";
	else if(i == currentBread)
		breadState[i] = "currentBread";
}
ReactDOM.render(
	<div>
	{
	  breadcrumbs.map(function (breadcrumb, index) {
	    return <li className={index < currentBread? "clickable" : ""} 
	    		   id={index == currentBread? "currentBread" : ""}>
	    		<a href="#">{breadcrumb}</a></li>
	  })
	}
	</div>,
	document.getElementsByClassName('breadcrumb')[0]
);
var units = ['一', '二', '三' ,'四', '五', '六'];
var UnitClick = React.createClass({
	getInitialState: function() {
		return {chosen: false};
	},
	handleClick: function(event) {
		this.setState({chosen: !this.state.chosen});
	},
	render: function() {
		var text = this.state.chosen ? 'fa-check' : '';
		return (
			<li onClick={this.handleClick}>
				<span className="fa-stack">
					<i className="fa fa-square fa-stack-2x"></i>
					<i className="fa fa-lg fa-stack-1x"></i>
				</span>
				<span>{'单元'+this.props.title}</span>
				Title of Unit1
			</li>
		);
	}
});
ReactDOM.render(
	<ul>{
		units.map(function (unit) {
			return <UnitClick title={unit} />
		})
	}</ul>,
	document.getElementById('unit_hw_ul')
);
// var books = ['6A', '7A', '8A', '9A', '10A'];
// ReactDOM.render(
// 	<form className="div-book">
// 	{
// 		books.map(function (book) {
// 			return 
// 			<button type="button" className="btn btn-default btn-book">
// 			<span className="book-subtitle">{book}</span>
// 			</button>
// 		})
// 	}
// 	</form>,		
// 	document.getElementById('bookcover_div')
// );	
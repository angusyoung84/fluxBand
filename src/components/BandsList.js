import React, { Component } from 'react';

class AddBandForm extends Component {

	handleSubmit(e) {
		e.preventDefault();
		this.props.addBand(this.refs.band.value, this.refs.album.value);
		this.refs.commentForm.reset();
	}

	render() {
		return (
			<div>
	        <form onSubmit={this.handleSubmit.bind(this)} ref="commentForm" className="comment-form">
	          <input type="text" ref="band" placeholder="band"/>
	          <input type="text" ref="album" placeholder="album"/>
	          <input type="submit" hidden/>
	        </form>
			</div>
		)};
	}

class BandsList extends Component {

	render() {
		return (
		  <div>
			{console.log(this.props)}
		     {this.props.bands.map((band, i) => 
		     	<h3 key={i}> {band.band} - {band.album}           
		     		 <button className="remove-comment" onClick={this.props.removeBand.bind(null, i)}>&times;</button>
				</h3> 
			)}
		     <AddBandForm {...this.props} />
		  </div>

		)
	};
}

export default BandsList;

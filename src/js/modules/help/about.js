import config from './../../config.js';
import Dialog_class from './../../libs/popup.js';

class Help_about_class {

	constructor() {
		this.POP = new Dialog_class();
	}

	//about
	about() {
		var email = 'Ahmedkajoor@iastem,ae';	
		
		var settings = {
			title: 'About',
			params: [
				{title: "", html: '<img style="width:200px;" class="about-logo" alt="" src="images/3d50uae.jpg" />'},
				{title: "Name:", html: '<span class="about-name">AI STEM Painter</span>'},
				{title: "Version:", value: VERSION},
				{title: "Description:", value: "Online image editor."},
				{title: "Email:", html: '<a href="mailto:' + email + '">' + email + '</a>'},
				{title: "Website:", html: '<a href="https://www.iastem.ae/">https://www.iastem.ae/</a>'},
			],
		};
		this.POP.show(settings);
	}

}

export default Help_about_class;

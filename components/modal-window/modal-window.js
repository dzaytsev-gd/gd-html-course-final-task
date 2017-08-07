var ACTIVE_CLASS = 'active';
var BLUR_CLASS = 'blur';

function toggleModal(path) {
	var modal = $(path);
	modal.toggleClass(ACTIVE_CLASS);
	modal.siblings().each(function(idx, element){ $(element).toggleClass(BLUR_CLASS); });
}
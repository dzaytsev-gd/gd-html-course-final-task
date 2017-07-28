$(function() {
	var toggleSuccessPurchasedWindow = function() {
		$('.modal.purchased-successfully').toggleClass('active');
	}

	var toggleEditWindow = function() {
		$('.modal.edit').toggleClass('active');
	}

	var toggleDeleteWindow = function() {
		$('.modal.delete').toggleClass('active');
	}

	var toggleFiltersPannel = function() {
		$('.filters-pannel').toggleClass('active');
		$('#show-filters').toggleClass('active');
	}

	$('#buy-product-button').click(toggleSuccessPurchasedWindow);
	$('#buy-product-ok-button').click(toggleSuccessPurchasedWindow);

	$('#edit-product-button').click(toggleEditWindow);
	$('#edit-product-cancel-button').click(toggleEditWindow);
	$('#edit-product-submit-button').click(toggleEditWindow);

	$('#delete-product-button').click(toggleDeleteWindow);
	$('#delete-product-cancel-button').click(toggleDeleteWindow);
	$('#delete-product-submit-button').click(toggleDeleteWindow);

	$('#show-filters').click(toggleFiltersPannel);
});
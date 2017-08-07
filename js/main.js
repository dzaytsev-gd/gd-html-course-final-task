$(function() {
	var toggleSuccessPurchasedWindow = function() {
		toggleModal('.modal.purchased-successfully');
	}

	var toggleEditWindow = function() {
		toggleModal('.modal.edit');
	}

	var toggleDeleteWindow = function() {
		toggleModal('.modal.delete');
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
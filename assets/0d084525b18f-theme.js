jQuery(document).ready(function($) {
	$('body').on('click', '.dropdown-el', function(e) {
  		e.preventDefault();
  		e.stopPropagation();
  		var $this = $(this), expanded = $this.hasClass('expanded');
  		if (expanded) {
    		$this.find('input[type=radio], input[type=checkbox]').prop('checked', false);
    		$(e.target).prev().prop('checked', true).trigger('change');
    		$this.removeClass('expanded');
  		} else {
    		$this.addClass('expanded');
  		}
	});
	$(document).click(function() {
  		$('.dropdown-el').removeClass('expanded');
	});
	
	 $('#search-form button').click(function() {
    	fbq('track', 'Search');
 	 });
	
	
	
});

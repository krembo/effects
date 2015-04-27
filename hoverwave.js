function hoverWave(element, hoverColor) {
	var $element = $(element),
	letters = $element.text().split(''),
	lettersHtml = '',
	baseColor = $element.css('color'),
	hoverColor = hoverColor || 'green';
	for (var i in letters) {
		lettersHtml += '<span class="ef-letter">' + letters[i] + '</span>';
	}
	$element.html(lettersHtml);

	$element.mouseover(function () {
		$(this).find('.ef-letter').each(function (index) {
			$(this).css({
				transition : 'color ' + (index * 0.05) + 's',
				color : hoverColor
			})
		})
	})
	$element.mouseleave(function () {
		$(this).find('.ef-letter').each(function (index) {
			$(this).css({
				transition : 'color ' + (index * 0.05) + 's',
				color : baseColor
			})
		})
	})
}